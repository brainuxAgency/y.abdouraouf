import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      fullName,
      email,
      phone,
      isCompany,
      companyName,
      companyWebsite,
      projectType,
      budget,
      message,
    } = data;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    console.log("Nouveau message reçu depuis le portfolio :", {
      fullName,
      email,
      phone,
      isCompany,
      companyName,
      companyWebsite,
      projectType,
      budget,
      message,
    });

    // Envoi via nodemailer si configuré
    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });

      const mailContent = `
Nouveau message de contact :
------------------------------------------------
Nom : ${fullName}
Email : ${email}
Téléphone : ${phone || "Non renseigné"}
Entreprise : ${isCompany ? companyName || "Oui" : "Particulier"}
Site web : ${companyWebsite || "N/A"}
Type de projet : ${projectType}
Budget estimé : ${budget}

Message :
${message}
------------------------------------------------
      `;

      await transporter.sendMail({
        from: `"Portfolio Abdouraouf" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `[Nouveau Projet Portfolio] ${projectType} - ${fullName}`,
        text: mailContent,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Votre message a bien été envoyé ! Je vous réponds sous 24h.",
    });
  } catch (error) {
    console.error("Erreur API Contact :", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi de votre message." },
      { status: 500 }
    );
  }
}
