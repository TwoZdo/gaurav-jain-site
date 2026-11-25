// Vercel serverless function: receives the "Get in Touch" form, emails it through Resend
// and adds it as a row to a Google Sheet. Either one is enough for the visitor to see "sent".
// Settings live in the Vercel project's environment variables, never in this file:
//   RESEND_API_KEY  the Resend API key (turns on the email)
//   CONTACT_TO      optional: where emails go; defaults to jain@yellowfryum.com
//   CONTACT_FROM    optional: the sender; defaults to Resend's test sender, which can only deliver
//                   to the address the Resend account was created with. Set it to e.g.
//                   "Gaurav Jain website <contact@yellowfryum.com>" once that domain is verified in Resend.
//   SHEET_URL       the Google Apps Script web-app URL (turns on the sheet; script in tools/google-sheet-script.gs)
//   SHEET_TOKEN     the shared secret that script checks, so only this site can add rows
//   CONTACT_CONFIRM optional: set to "off" to stop the thank-you email to the visitor (on by default)
//
// The visitor confirmation is best-effort: if it fails, the inquiry has still been delivered and the
// visitor still sees "sent". With Resend's test sender it only reaches the Resend account's own address,
// so it starts working for real visitors once CONTACT_FROM uses a verified domain.
// It never repeats the visitor's message and uses only a plain first name, so the form can't be used
// to send someone else's text to a stranger's inbox.

const TO = process.env.CONTACT_TO || 'jain@yellowfryum.com';
const FROM = process.env.CONTACT_FROM || 'Gaurav Jain website <onboarding@resend.dev>';
const INTERESTS = ['Speaking or keynote', 'Executive workshop', 'Advisory or consulting', 'Research collaboration', 'Other'];

const clean = (v, max) => String(v == null ? '' : v).replace(/\r/g, '').trim().slice(0, max);
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

async function sendEmail(f) {
  const rows = [['Name', f.name], ['Email', f.email], ['Organization', f.org || '—'], ['Interested in', f.interest || '—'], ['Message', f.msg || '—']];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = '<table style="font:15px/1.5 Arial,sans-serif;color:#16215B;border-collapse:collapse">' +
    rows.map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;vertical-align:top;color:#5F6496;white-space:nowrap">${k}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`).join('') +
    '</table>';
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: f.email,
      subject: `Website inquiry from ${f.name}${f.interest ? ` (${f.interest})` : ''}`,
      text,
      html,
    }),
  });
  if (!r.ok) throw new Error(`Resend ${r.status}: ${await r.text()}`);
}

// Thank-you note to the visitor. Fixed wording only: a plain first name (letters, hyphens, apostrophes)
// or "there", never their message, links or organization.
async function sendConfirmation(f) {
  const first = f.name.split(/\s+/)[0];
  const hi = /^[\p{L}'’-]{1,40}$/u.test(first) ? first : 'there';
  // wording supplied by the client (2026-11-25)
  const lines = [
    `Hi ${hi},`,
    'Thank you for reaching out. I appreciate your interest in connecting.',
    'I’ve received your message and will get back to you shortly.',
    'Looking forward to our conversation.',
  ];
  const sign = 'Best,\nDr. Gaurav Jain\nwww.gauravjain.us';
  const note = 'You’re receiving this because this address was entered in the contact form on Dr. Gaurav Jain’s website. If that wasn’t you, you can ignore this email.';
  const p = (s) => `<p style="margin:0 0 16px">${s}</p>`;
  const html = '<div style="font:15px/1.6 Arial,sans-serif;color:#16215B;max-width:560px">' +
    lines.map((l) => p(esc(l))).join('') +
    p('Best,<br>Dr. Gaurav Jain<br><a href="https://www.gauravjain.us" style="color:#1F299C">www.gauravjain.us</a>') +
    `<p style="margin:24px 0 0;padding-top:16px;border-top:1px solid #E5E0D6;font-size:13px;color:#5F6496">${esc(note)}</p></div>`;
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [f.email],
      reply_to: TO,
      subject: 'Thank you for reaching out',
      text: `${lines.join('\n\n')}\n\n${sign}\n\n--\n${note}`,
      html,
    }),
  });
  if (!r.ok) throw new Error(`Resend ${r.status}: ${await r.text()}`);
}

async function addRow(f) {
  // Apps Script answers a POST with a redirect to its output; fetch follows it.
  const r = await fetch(process.env.SHEET_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ token: process.env.SHEET_TOKEN || '', ...f }),
    redirect: 'follow',
  });
  const out = await r.text();
  let j = {};
  try { j = JSON.parse(out); } catch { /* not JSON: treated as a failure below */ }
  if (!r.ok || !j.ok) throw new Error(`Sheet ${r.status}: ${out.slice(0, 300)}`);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method' });
  }

  let body = req.body || {};
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }

  // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const f = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    org: clean(body.org, 200),
    interest: INTERESTS.includes(body.interest) ? body.interest : '',
    msg: clean(body.msg, 5000),
  };
  if (!f.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    return res.status(400).json({ ok: false, error: 'invalid' });
  }

  const jobs = [];
  if (process.env.RESEND_API_KEY) jobs.push(['email', sendEmail(f)]);
  if (process.env.SHEET_URL) jobs.push(['sheet', addRow(f)]);
  if (!jobs.length) return res.status(503).json({ ok: false, error: 'not-configured' });

  const results = await Promise.allSettled(jobs.map(([, p]) => p));
  const done = [];
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') done.push(jobs[i][0]);
    else console.error(`${jobs[i][0]} failed:`, r.reason && r.reason.message);
  });
  if (!done.length) return res.status(502).json({ ok: false, error: 'send-failed' });

  // The inquiry is safely recorded; now thank the visitor. A failure here is logged, not shown to them.
  if (process.env.RESEND_API_KEY && process.env.CONTACT_CONFIRM !== 'off') {
    try { await sendConfirmation(f); done.push('confirmation'); }
    catch (e) { console.error('confirmation failed:', e && e.message); }
  }
  return res.status(200).json({ ok: true, done });
};
