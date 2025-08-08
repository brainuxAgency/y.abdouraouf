/* eslint-disable @typescript-eslint/no-unused-vars */
import { db } from "@/lib/db";
import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP, openAPI } from "better-auth/plugins";
import { admin } from "better-auth/plugins";


import { sendCodePasswordResetEmail } from "./actions/mail.service.action";

export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql",
    }),
    trustedOrigins: [
        process.env.NEXT_PUBLIC_BETTER_AUTH_URL!,
        "https://y.abdouraouf.com",
        "https://y-abdouraouf.netlify.app",
    ],
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24, // 1 day
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60 // Cache duration in seconds
        },

    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: "user" // Définit le rôle par défaut
            },

        },
        // changeEmail: {
        //   enabled: true,
        //   sendChangeEmailVerification: async ({ newEmail, url }) => {
        //     await sendEmail({
        //       to: newEmail,

        //       subject: 'Verify your email change',
        //       text: `Click the link to verify: ${url}`
        //     })
        //   }
        // }

    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    plugins: [
        openAPI(),
        admin({
            impersonationSessionDuration: 60 * 60 * 24 * 7, // 7 days
        }),
        emailOTP({
            expiresIn: 300,
            otpLength: 6,
            // sendVerificationOnSignUp: true,
            async sendVerificationOTP({ email, otp, type }) {
                if (type === "forget-password") {

                    await sendCodePasswordResetEmail(email, otp)

                } else if (type === "email-verification") {
                    // Send the OTP for email verification
                } else {
                    // Send the OTP for password reset
                }
            },

        }),

    ],


    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
        sendResetPassword: async ({ user, url }) => {
            // Ici, nous utilisons le token comme OTP

            await sendCodePasswordResetEmail(user.email, url)
        },
        resetPasswordTokenExpiresIn: 300, // 5 minutes
    },
    emailVerification: {

        // sendOnSignUp: true,
        // autoSignInAfterVerification: true,

        // sendVerificationEmail: async ({ user, token }) => {
        //     const verificationUrl = `${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackURL=${process.env.EMAIL_VERIFICATION_CALLBACK_URL}`;
        //     await sendEmailVerificationEmail(user.email, user.name, verificationUrl)
        // },
    }


} satisfies BetterAuthOptions);

export type Session = typeof auth.$Infer.Session;

declare module "better-auth" {
    interface UserData {
        role?: string;
    }
}
