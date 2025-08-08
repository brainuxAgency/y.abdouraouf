/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
// import { ThemeProvider } from '../theme/theme-provider';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Détecter l'environnement actuel et charger les options appropriées
const PAYPAL_ENV = process.env.NEXT_PUBLIC_PAYPAL_ENV || "sandbox"; // Défini dans .env.local
const PAYPAL_CLIENT_ID =
    PAYPAL_ENV === "live"
        ? process.env.NEXT_PUBLIC_PAYPAL_LIVE_CLIENT_ID!
        : process.env.NEXT_PUBLIC_PAYPAL_SANDBOX_CLIENT_ID!;

const initialOptions = {
    clientId: PAYPAL_CLIENT_ID,
    currency: "EUR", // Ou utilisez une autre variable pour configurer dynamiquement
    intent: "capture",
    components: "buttons,messages,hosted-fields",
};
const queryClient = new QueryClient();

export default function ClientProviders({
    // session,
    children
}: {
    // session: SessionProviderProps['session'];
    children: React.ReactNode;
}) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                {/* <ThemeProvider attribute="class" defaultTheme="system" > */}
                    <PayPalScriptProvider options={initialOptions}>
                        {children}
                    </PayPalScriptProvider>
                {/* </ThemeProvider> */}
            </QueryClientProvider>
        </>
    );
}
