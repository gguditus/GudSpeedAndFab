import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request, response) {
  if ((await request.method) === "POST") {
    const { name, email, message } = await request.json();

    console.log(name, email, message);

    const user = process.env.mailUser;

    //creates a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: process.env.mailPass,
      },
    });

    //tries to send the email, uses env local variables to "login"
    try {
      const mail = await transporter.sendMail({
        from: user,
        to: "contact@gudspeedandfab.com",
        replyTo: email,
        subject: `Guditus Speed and Fabrication Contact from ${name}`,
        //this is where the email gets its appearance
        html: `<div style="background-color: #1F1F1F;"><h1 style="color: #E0E0E0; padding: 10px; font-size: 200%; background-image: linear-gradient(#1F1F1F,#474747); margin-bottom: 0px; border-bottom: 8px solid #F57C33;">
        Guditus Speed and Fab Contact
        </h1>
        <div style="background-color: #1F1F1F; padding: 10px; color: #E0E0E0;
        font-size: 150%; margin-top: 0px;">
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            </div></div>`,
      });

      //console.log("Message sent: ", mail.response);

      return NextResponse.json(
        { success: true, message: "Successfully sent message" },
        { status: 200 }
      );
    } catch (error) {
      console.log("error: ", error);
      NextResponse.json(
        {
          success: false,
          message: "Could not send the email. Try again later",
        },
        { status: 500 }
      );
    }
  }
}
