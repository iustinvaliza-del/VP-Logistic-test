import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, company, message } = result.data;

    // Log the contact form submission
    // In production, integrate with Resend, SendGrid, or similar email service
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email using Resend
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@vplogistic.ro',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New contact from ${name} - ${company || 'N/A'}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
