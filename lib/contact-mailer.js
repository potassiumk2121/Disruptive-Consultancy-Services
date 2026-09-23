const { Resend } = require("resend");

const CONTACT_TO = process.env.CONTACT_TO || "umesh.disruptivetech@gmail.com";
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
  const logo = "https://disruptive-consultancy-services.vercel.app/DM_logo.png";

  return `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#f4f1ea;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ea;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;background:#ffffff;border:1px solid #e6dfd2;">
          <tr>
            <td align="center" style="padding:36px 40px 8px;">
              <img src="${logo}" alt="DCS" width="42" height="42" style="display:block;border:0;border-radius:50%;margin:0 auto 14px;">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;letter-spacing:0.28em;color:#0a1f3d;text-transform:uppercase;">Disruptive</p>
              <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.22em;color:#8a7350;text-transform:uppercase;">Consultancy Services</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:18px 40px 0;">
              <div style="width:42px;height:1px;background:#c9a24d;margin:0 auto;"></div>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:22px 40px 0;">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:34px;font-style:italic;font-weight:400;color:#0a1f3d;line-height:1.15;">Thank you</p>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 40px 8px;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.7;color:#2c3544;">
              <p style="margin:0 0 14px;">Hello ${name},</p>
              <p style="margin:0;">Thank you for contacting Disruptive Consultancy Services. We have received your enquiry and our team will review it shortly.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 40px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf8f4;border-left:2px solid #c9a24d;">
                <tr>
                  <td style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#3a4453;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#8a7350;">Organisation</p>
                    <p style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#0a1f3d;">${organisation}</p>
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#8a7350;">Your message</p>
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:1.55;color:#0a1f3d;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 40px 8px;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.7;color:#2c3544;">
              <p style="margin:0;">We will get back to you as soon as possible.</p>
              <p style="margin:16px 0 0;">Regards,<br>Disruptive Consultancy Services</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:28px 40px 32px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.04em;line-height:1.6;color:#8d867c;">
              Disruptive Consultancy Services Pvt. Ltd<br>Rohini, New Delhi
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
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
  const logo = "https://disruptive-consultancy-services.vercel.app/DM_logo.png";

  return `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#f4f1ea;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ea;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;background:#ffffff;border:1px solid #e6dfd2;">
          <tr>
            <td align="center" style="padding:36px 40px 8px;">
              <img src="${logo}" alt="DCS" width="42" height="42" style="display:block;border:0;border-radius:50%;margin:0 auto 14px;">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;letter-spacing:0.28em;color:#0a1f3d;text-transform:uppercase;">Disruptive</p>
              <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.22em;color:#8a7350;text-transform:uppercase;">Consultancy Services</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:18px 40px 0;">
              <div style="width:42px;height:1px;background:#c9a24d;margin:0 auto;"></div>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:22px 40px 0;">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:400;color:#0a1f3d;line-height:1.2;">New enquiry</p>
              <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:#6b645c;">A visitor submitted the contact form.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 40px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf8f4;border-left:2px solid #c9a24d;">
                <tr>
                  <td style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#3a4453;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#8a7350;">Name</p>
                    <p style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#0a1f3d;">${name}</p>
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#8a7350;">Email</p>
                    <p style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:16px;"><a href="mailto:${email}" style="color:#0a1f3d;text-decoration:none;">${email}</a></p>
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#8a7350;">Organisation</p>
                    <p style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#0a1f3d;">${organisation}</p>
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#8a7350;">Message</p>
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.55;color:#0a1f3d;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:28px 40px 32px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.04em;line-height:1.6;color:#8d867c;">
              Disruptive Consultancy Services Pvt. Ltd<br>Rohini, New Delhi
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
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
