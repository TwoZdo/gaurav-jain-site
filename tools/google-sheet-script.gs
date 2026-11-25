/**
 * Google Apps Script for the "Get in Touch" form on gaurav-jain-site.
 * Paste this into the sheet (Extensions → Apps Script), set TOKEN, then Deploy → New deployment → Web app.
 * The website's Vercel function (api/contact.js) posts each submission here, and this adds a row.
 *
 * TOKEN must match SHEET_TOKEN in the Vercel project's environment variables.
 * Make it a long random phrase and keep it private: it stops anyone else from adding rows.
 */
const TOKEN = 'PASTE-THE-SAME-SECRET-AS-IN-VERCEL';
const SHEET_NAME = 'Submissions';
const HEADERS = ['Date', 'Name', 'Email', 'Organization', 'Interested in', 'Message', 'Status / notes'];

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (!TOKEN || d.token !== TOKEN) return reply({ ok: false, error: 'bad token' });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) sh = ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sh.setFrozenRows(1);
    }

    // A leading = + - @ would make Sheets treat text as a formula; prefix an apostrophe to keep it as text.
    const safe = (v) => { v = String(v || '').slice(0, 5000); return /^[=+\-@]/.test(v) ? "'" + v : v; };
    sh.appendRow([new Date(), safe(d.name), safe(d.email), safe(d.org), safe(d.interest), safe(d.msg), '']);
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  }
}

// Opening the web-app link in a browser shows this, which confirms the deployment works.
function doGet() {
  return reply({ ok: true, info: 'Gaurav Jain site form endpoint. It accepts POSTs from the website only.' });
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
