import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Customer-typed values are inserted into the HTML email, so escape them first.
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      fullName,
      email,
      phone,
      location,
      city,
      company,
      subject,
      type,
      message,
      refCode,
    } = body;

    const contactName = name || fullName || "Interested Partner";
    const contactEmail = email || "Not provided";
    const contactPhone = phone || "Not provided";
    const contactLocation = location || city || "Not provided";
    const contactCompany = company || "Not specified";
    const contactSubject = subject || type || "Franchise & Business Inquiry";
    const contactMessage = message || "New inquiry submitted via website form.";
    const reference = refCode || `CANTO-${Math.floor(100000 + Math.random() * 900000)}`;

    const recipient = process.env.RECIPIENT_EMAIL || "admin@olenecanto.com";

    console.log("=================================================");
    console.log(`[OLENE CANTO] Form Submission Received (${reference})`);
    console.log(`Destination Email: ${recipient} (Website: www.olenecanto.com)`);
    console.log(`Name: ${contactName}`);
    console.log(`Phone: ${contactPhone}`);
    console.log(`Email: ${contactEmail}`);
    console.log(`Location: ${contactLocation}`);
    console.log(`Subject: ${contactSubject}`);
    console.log(`Message: ${contactMessage}`);
    console.log("=================================================");

    // If SMTP credentials exist in environment variables, dispatch email via nodemailer
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(smtpPort),
        secure: Number(smtpPort) === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #121212; color: #ffffff; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px;">OLENE CANTO</h1>
            <p style="margin: 6px 0 0; color: #d9b578; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;">New Website Inquiry • Ref: ${escapeHtml(reference)}</p>
          </div>
          <div style="padding: 24px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #777777; width: 35%;"><strong>Full Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #111111;">${escapeHtml(contactName)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #777777;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #111111;"><a href="mailto:${encodeURIComponent(contactEmail)}" style="color: #9b722b;">${escapeHtml(contactEmail)}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #777777;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #111111;">${escapeHtml(contactPhone)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #777777;"><strong>City / Country:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #111111;">${escapeHtml(contactLocation)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #777777;"><strong>Company / Brand:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #111111;">${escapeHtml(contactCompany)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #777777;"><strong>Subject / Inquiry:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #111111;">${escapeHtml(contactSubject)}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background-color: #faf7f2; border-left: 4px solid #d9b578; border-radius: 6px;">
              <p style="margin: 0 0 6px; font-size: 12px; font-weight: bold; color: #9b722b; text-transform: uppercase;">Inquiry Message / Details:</p>
              <p style="margin: 0; font-size: 14px; color: #333333; line-height: 1.6;">${escapeHtml(contactMessage)}</p>
            </div>
          </div>
          <div style="background-color: #f9f9f9; padding: 16px; text-align: center; font-size: 11px; color: #888888; border-top: 1px solid #eeeeee;">
            Sent automatically from www.olenecanto.com • Olene Foods Pvt. Ltd.
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Olene Canto Website" <${smtpUser}>`,
        to: recipient,
        replyTo: contactEmail !== "Not provided" ? contactEmail : undefined,
        subject: `[Olene Canto Web Inquiry] ${contactSubject} - ${contactName} (${reference})`,
        text: `New Inquiry from ${contactName}\nEmail: ${contactEmail}\nPhone: ${contactPhone}\nLocation: ${contactLocation}\nSubject: ${contactSubject}\nMessage: ${contactMessage}\nRef: ${reference}\nWebsite: www.olenecanto.com`,
        html: emailHtml,
      });

      console.log(`[OLENE CANTO] Email successfully dispatched via SMTP to ${recipient}`);
    }

    return NextResponse.json({
      success: true,
      message: `Your details have been submitted and routed to ${recipient}.`,
      recipient,
      refCode: reference,
    });
  } catch (error) {
    console.error("[OLENE CANTO] Error processing inquiry form:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process inquiry. Please try again or reach out to admin@olenecanto.com.",
      },
      { status: 500 }
    );
  }
}
