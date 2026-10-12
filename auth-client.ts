import { createAuthClient } from "better-auth/react";
import { adminClient, emailOTPClient } from "better-auth/client/plugins";
import { inferAdditionalFields } from "better-auth/client/plugins";
import type { auth } from "./auth";

export const authClient = createAuthClient({
    baseURL:
        process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
        process.env.BETTER_AUTH_URL ||
        (typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"),
    plugins: [
        adminClient(),
        emailOTPClient(),
        inferAdditionalFields<typeof auth>()
    ],
});
