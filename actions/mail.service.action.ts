'use server'

import { ResetPasswordEmailTemplate } from '@/components/email-templete/ResetPasswordEmail'
import { sendMail } from '@/lib/email'
import { getUserByEmail } from './user.action'


export async function sendCodePasswordResetEmail(
    to: string,

    otp: string,
) {
    const user = await getUserByEmail(to)
    if (!user) {
        throw new Error("User not found")
    }
    return sendMail({
        to,
        subject: "Réinitialisation du mot de passe.",
        emailTemplate: ResetPasswordEmailTemplate({
            name: user?.name || "",
            otp,
        }),
    })
}





