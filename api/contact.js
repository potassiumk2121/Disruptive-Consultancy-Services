const { parseContactPayload, sendContactEmails } = require("../backend/src/contact-mailer");

function json(res, status, data) {
  res.status(status).setHeader("Content-Type", "application/json; charset=utf-8");
  res.send(JSON.stringify(data));
}

function readPayload(req) {
  if (typeof req.body === "string") {
    return JSON.parse(req.body || "{}");
  }
  return req.body || {};
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

  let payload;
  try {
    payload = readPayload(req);
  } catch {
    json(res, 400, { error: "Invalid JSON body" });
    return;
  }

  const parsed = parseContactPayload(payload);
  if (parsed.honeypot) {
    json(res, 201, { ok: true });
    return;
  }
  if (parsed.error) {
    json(res, 400, { error: parsed.error });
    return;
  }

  try {
    const result = await sendContactEmails(parsed.inquiry);
    json(res, 201, { ok: true, confirmationSent: result.confirmationSent });
  } catch (error) {
    console.error("Contact email failed:", error.message);
    const message =
      error.code === "CONFIG"
        ? "Email service is not configured."
        : "The message could not be sent. Please try again.";
    json(res, 502, { error: message });
  }
};
