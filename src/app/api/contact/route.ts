import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✨ Clean, modern email design
    const htmlTemplate = `
      <div style="background-color: #f5f7fa; padding: 40px 0; font-family: 'Inter', Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(90deg, #0070f3, #00c896); color: white; padding: 20px 30px;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 600;">📬 New Contact Message</h2>
          </div>

          <!-- Content -->
          <div style="padding: 30px;">
            <p style="font-size: 16px; color: #333; margin-bottom: 12px;">Hello 👋,</p>
            <p style="font-size: 15px; color: #555;">You’ve received a new message from your contact form.</p>

            <div style="margin-top: 20px; padding: 16px; background: #f8f9fb; border-radius: 10px;">
              <p style="margin: 0; font-size: 15px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 4px 0; font-size: 15px;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 12px 0 0; font-size: 15px;"><strong>Message:</strong></p>
              <p style="margin: 6px 0 0; color: #444; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #fafafa; border-top: 1px solid #eee; text-align: center; padding: 15px;">
            <p style="font-size: 13px; color: #999;">
              This message was sent from your website contact form.
            </p>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER!,
      subject: `New Contact Message from ${name}`,
      html: htmlTemplate,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
