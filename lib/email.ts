// src/lib/email/config/nodemailer.ts
import nodemailer from 'nodemailer';
import { ReactElement } from 'react';
import { render } from '@react-email/components'


interface SendMailProps {
    to: string;
    subject: string;
    emailTemplate: ReactElement;
    files?: File[];
}



export async function sendMail({ to, subject, emailTemplate, files }: SendMailProps) {
    try {
        const emailHtml = await render(emailTemplate)

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        })

        // Préparation des pièces jointes (si elles existent)

        const attachments = files ? await Promise.all(
            files.map(async (file) => {
                const buffer = Buffer.from(await file.arrayBuffer());
                return {
                    filename: file.name,
                    content: buffer,
                };
            })
        ) : [];

        await transporter.sendMail({
            from: 'Y.Abdouraouf" <support@y.abdouraouf.com>',
            to,
            subject,
            html: emailHtml,
            attachments,
        })

        return { success: true, message: `Email envoyé avec succès à ${to}` }
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error)
        return { success: false, error: 'Erreur lors de l\'envoi de l\'email' }
    }
}
