const { Resend } = require("resend");

const CONTACT_TO = process.env.CONTACT_TO || "untiwari@dcspl.net";
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

function resendErrorMessage(error) {
  if (!error) return "Resend rejected the email.";
  if (typeof error === "string") return error;
  if (typeof error.message === "string" && error.message !== "[object Object]") {
    return error.message;
  }
  if (error.message && typeof error.message === "object") {
    if (typeof error.message.message === "string") return error.message.message;
    try {
      return JSON.stringify(error.message);
    } catch {
      return "Resend rejected the email.";
    }
  }
  if (typeof error.name === "string") return error.name;
  return "Resend rejected the email.";
}

async function sendResendEmail(fields) {
  const resend = getResendClient();
  const { data, error } = await resend.emails.send(fields);
  if (error) {
    const sendError = new Error(resendErrorMessage(error));
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

function notificationText(inquiry) {
  return [
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Organisation: ${inquiry.organisation}`,
    `Message: ${inquiry.message}`,
  ].join("\n");
}

function teamHtml(inquiry) {
  const name = escapeHtml(inquiry.name);
  const email = escapeHtml(inquiry.email);
  const organisation = escapeHtml(inquiry.organisation);
  const message = escapeHtml(inquiry.message).replace(/\n/g, "<br>");

  return [
    "<p><strong>New Contact Form Submission</strong></p>",
    `<p>Name: ${name}<br>`,
    `Email: ${email}<br>`,
    `Organisation: ${organisation}<br>`,
    `Message: ${message}</p>`,
  ].join("\n");
}

async function sendTeamNotification(inquiry) {
  console.log(`Sending team enquiry to ${CONTACT_TO}`);
  await sendResendEmail({
    from: CONTACT_FROM,
    to: [CONTACT_TO],
    replyTo: inquiry.email,
    subject: "New Contact Form Submission",
    text: notificationText(inquiry),
    html: teamHtml(inquiry),
  });
  return CONTACT_TO;
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
