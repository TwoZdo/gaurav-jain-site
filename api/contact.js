// Vercel serverless function: receives the "Get in Touch" form and emails it through Resend.
// Settings live in the Vercel project's environment variables, never in this file:
//   RESEND_API_KEY  (required) the Resend API key
//   CONTACT_TO      (optional) where messages go; defaults to jain@yellowfryum.com
//   CONTACT_FROM    (optional) the sender; defaults to Resend's test sender, which can only deliver
//                   to the address the Resend account was created with. Set it to e.g.
//                   "Gaurav Jain website <contact@yellowfryum.com>" once that domain is verified in Resend.

const TO = process.env.CONTACT_TO || 'jain@yellowfryum.com';
const FROM = process.env.CONTACT_FROM || 'Gaurav Jain website <onboarding@resend.dev>';
const INTERESTS = ['Speaking or keynote', 'Executive workshop', 'Advisory or consulting', 'Research collaboration', 'Other'];

const clean = (v, max) => String(v == null ? '' : v).replace(/\r/g, '').trim().slice(0, max);
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method' });
  }

  let body = req.body || {};
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }

  // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const org = clean(body.org, 200);
  const interest = INTERESTS.includes(body.interest) ? body.interest : '';
  const msg = clean(body.msg, 5000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'invalid' });
  }
  if (!process.env.RESEND_API_KEY) {
    return res.status(503).json({ ok: false, error: 'not-configured' });
  }

  const rows = [['Name', name], ['Email', email], ['Organization', org || '—'], ['Interested in', interest || '—'], ['Message', msg || '—']];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = '<table style="font:15px/1.5 Arial,sans-serif;color:#16215B;border-collapse:collapse">' +
    rows.map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;vertical-align:top;color:#5F6496;white-space:nowrap">${k}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`).join('') +
    '</table>';

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Website inquiry from ${name}${interest ? ` (${interest})` : ''}`,
        text,
        html,
      }),
    });
    if (!r.ok) {
      console.error('Resend error', r.status, await r.text());
      return res.status(502).json({ ok: false, error: 'send-failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Resend request failed', e);
    return res.status(502).json({ ok: false, error: 'send-failed' });
  }
};
