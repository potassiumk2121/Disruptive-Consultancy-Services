const CONTACT_TO = process.env.CONTACT_TO || "utiwari@developmentmonitors.com";

function json(res, status, data) {
  res.status(status).setHeader("Content-Type", "application/json; charset=utf-8");
  res.send(JSON.stringify(data));
}

function clean(value) {
  return String(value || "").trim().slice(0, 4000);
}

async function sendWithResend(inquiry) {
  if (!process.env.RESEND_API_KEY) return false;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "DCS Website <onboarding@resend.dev>",
      to: [CONTACT_TO],
      reply_to: inquiry.email,
      subject: `Website enquiry from ${inquiry.name}`,
      text: [
        `Name: ${inquiry.name}`,
        `Email: ${inquiry.email}`,
        `Organisation: ${inquiry.organisation || "Not provided"}`,
        "",
        inquiry.message,
      ].join("\n"),
    }),
  });
  return response.ok;
}

async function sendWithFormSubmit(inquiry) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_TO)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: inquiry.name,
      email: inquiry.email,
      organisation: inquiry.organisation,
      message: inquiry.message,
      _subject: `Website enquiry from ${inquiry.name}`,
      _replyto: inquiry.email,
      _template: "table",
    }),
  });
  return response.ok;
}

module.exports = async (req, res) => {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    json(res, 405, { error: "Use POST" });
    return;
  }

  const payload = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  if (clean(payload.website)) {
    json(res, 201, { ok: true });
    return;
  }

  const inquiry = {
    name: clean(payload.name),
    email: clean(payload.email),
    organisation: clean(payload.organisation),
    message: clean(payload.message),
  };

  if (!inquiry.name || !inquiry.email || !inquiry.message) {
    json(res, 400, { error: "Name, email and message are required." });
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) {
    json(res, 400, { error: "Please enter a valid email address." });
    return;
  }

  const emailed = (await sendWithResend(inquiry)) || (await sendWithFormSubmit(inquiry));
  if (!emailed) {
    json(res, 502, { error: "The message could not be emailed. Please write to " + CONTACT_TO + "." });
    return;
  }

  json(res, 201, { ok: true });
};
