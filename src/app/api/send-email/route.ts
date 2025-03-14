import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";


export async function GET() {
	return NextResponse.json(
		{
			"msg": "success",
		}
	)
}

export async function POST(req: NextRequest) {
	console.log("hit");

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const { name, email, message } = await req.json()

	try {
		// Create transporter for Gmail
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: process.env.SMTP_USER, // Your Gmail address
				pass: process.env.SMTP_PASS, // Your App Password
			},
		});

		// Email options
		const mailOptions = {
			from: email,
			to: process.env.RECEIVER_EMAIL, // Replace with your receiving email
			subject: `New Contact Form Submission from ${name}`,
			text: message,
			html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
		};

		// Send email
		await transporter.sendMail(mailOptions);

		return NextResponse.json({ message: "Email sent successfully" }, {status: 200})
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json({ message: "Failed to send email" }, {status: 500})
	}
}
