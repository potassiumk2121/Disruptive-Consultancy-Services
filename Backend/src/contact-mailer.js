const { Resend } = require("resend");

const CONTACT_TO = process.env.CONTACT_TO || "potassiumk2121@gmail.com";
const CONTACT_FROM =
  process.env.CONTACT_FROM ||
  "Disruptive Consultancy Services <hello@dcspl.net>";

function cleanLine(value, max = 200) {
  return String(value || "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

function cleanMessage(value, max = 4000) {
  return String(value || "").trim().slice(0, max);
}

function parseContactPayload(payload = {}) {
  if (cleanLine(payload.website)) {
    return { honeypot: true };
  }

  const inquiry = {
    name: cleanLine(payload.name),
    email: cleanLine(payload.email),
    organisation: cleanLine(payload.organisation),
    message: cleanMessage(payload.message),
  };

  if (!inquiry.name || !inquiry.email || !inquiry.organisation || !inquiry.message) {
    return { error: "Name, email, organisation and message are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) {
    return { error: "Please enter a valid email address." };
  }

  return { inquiry };
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    const error = new Error("RESEND_API_KEY is not configured.");
    error.code = "CONFIG";
    throw error;
  }
  return new Resend(apiKey);
}

async function sendResendEmail(fields) {
  const resend = getResendClient();
  const { data, error } = await resend.emails.send(fields);
  if (error) {
    const sendError = new Error(error.message || "Resend rejected the email.");
    sendError.code = "RESEND";
    sendError.details = error;
    throw sendError;
  }
  return data;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function confirmationText(inquiry) {
  return [
    `Hello ${inquiry.name},`,
    "",
    "Thank you for contacting Disruptive Consultancy Services.",
    "",
    "We have successfully received your enquiry and our team will review it shortly.",
    "",
    "Organisation:",
    inquiry.organisation,
    "",
    "Your Message:",
    inquiry.message,
    "",
    "We will get back to you as soon as possible.",
    "",
    "Regards,",
    "Disruptive Consultancy Services",
  ].join("\n");
}

function confirmationHtml(inquiry) {
  const name = escapeHtml(inquiry.name);
  const organisation = escapeHtml(inquiry.organisation);
  const message = escapeHtml(inquiry.message).replace(/\n/g, "<br>");

  return [
    `<p>Hello ${name},</p>`,
    "<p>Thank you for contacting Disruptive Consultancy Services.</p>",
    "<p>We have successfully received your enquiry and our team will review it shortly.</p>",
    `<p><strong>Organisation:</strong><br>${organisation}</p>`,
    `<p><strong>Your Message:</strong><br>${message}</p>`,
    "<p>We will get back to you as soon as possible.</p>",
    "<p>Regards,<br>Disruptive Consultancy Services</p>",
  ].join("\n");
}

function notificationText(inquiry, extraLines = []) {
  return [
    ...extraLines,
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Organisation: ${inquiry.organisation}`,
    `Message: ${inquiry.message}`,
  ]
    .filter((line, index, lines) => !(line === "" && lines[index - 1] === ""))
    .join("\n");
}

async function sendTeamNotification(inquiry) {
  try {
    await sendResendEmail({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      replyTo: inquiry.email,
      subject: "New Contact Form Submission",
      text: notificationText(inquiry),
    });
    return CONTACT_TO;
  } catch (error) {
    const allowed = /own email address \(([^)]+)\)/i.exec(error.message || "")?.[1];
    if (!allowed || allowed.toLowerCase() === CONTACT_TO.toLowerCase()) {
      throw error;
    }

    console.warn(
      `Resend test mode can only send to ${allowed}. Delivering there until a domain is verified.`
    );
    await sendResendEmail({
      from: CONTACT_FROM,
      to: [allowed],
      replyTo: inquiry.email,
      subject: "New Contact Form Submission",
      text: notificationText(inquiry, [
        `Intended recipient: ${CONTACT_TO}`,
        `Delivered to ${allowed} because Resend is still in test mode. Verify a domain at resend.com/domains to send directly to the intended inbox.`,
        "",
      ]),
    });
    return allowed;
  }
}

async function sendContactEmails(inquiry) {
  await sendTeamNotification(inquiry);

  let confirmationSent = true;
  try {
    await sendResendEmail({
      from: CONTACT_FROM,
      to: [inquiry.email],
      subject: "Thank you for contacting Disruptive Consultancy Services",
      html: confirmationHtml(inquiry),
      text: confirmationText(inquiry),
    });
  } catch (error) {
    confirmationSent = false;
    console.error("Confirmation email failed:", error.message);
  }

  return { confirmationSent };
}

module.exports = {
  CONTACT_TO,
  parseContactPayload,
  sendContactEmails,
};
