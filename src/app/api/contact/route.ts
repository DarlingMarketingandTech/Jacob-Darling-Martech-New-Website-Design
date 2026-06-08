import { Resend } from "resend";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, websiteUrl, broken, improve, nextStep } = body;

    if (!name || !email || !websiteUrl || !broken || !improve) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return Response.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailBody = `
New contact form submission from ${site.name}:

Name: ${name}
Email: ${email}
Website: ${websiteUrl}

What feels broken:
${broken}

What they're trying to improve:
${improve}

Best next step: ${nextStep || "Not selected"}
    `.trim();

    const result = await resend.emails.send({
      from: "noreply@darlingmartech.com",
      to: site.email,
      subject: `New contact request from ${name}`,
      text: emailBody,
      replyTo: email,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return Response.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: result.data?.id });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
