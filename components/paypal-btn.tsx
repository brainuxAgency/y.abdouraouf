/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client'

import { useEffect } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { toast } from '@/hooks/use-toast';
import { PayPalApprovalDetails } from '@/src/types/paypal-type';
import { LoadingSpinner } from './loading-spiner';
import { Button } from './ui/button';
import { CreditCard } from 'lucide-react';

interface MyPayPalButtonProps {
    amount: string;
    ressourceName: string;
    onApprove: (details: PayPalApprovalDetails) => Promise<void>;
    isDisabled: boolean;
}

export function MyPayPalButton({ amount, ressourceName, onApprove, isDisabled }: MyPayPalButtonProps) {
    const [{ isPending, isRejected, isResolved }] = usePayPalScriptReducer();

    useEffect(() => {
        if (isRejected) {
            toast({
                title: "Erreur",
                description: "Impossible de charger PayPal. Veuillez réessayer plus tard.",
                variant: "destructive",
            });
        }
    }, [isRejected]);

    if (isPending) {
        return <div className='min-h-screen flex items-center justify-center'>
            <LoadingSpinner />
        </div>
    }

    if (isRejected) {
        return <div>Une erreur s'est produite lors du chargement de PayPal. Veuillez réessayer.</div>;
    }

    if (!isResolved) {
        return null;
    }

    return (
        <div style={{ colorScheme: 'none' }} className="w-full max-w-md mx-auto paypal-button-container p-2 rounded-md overflow-hidden">
            <PayPalButtons
                style={{
                    color: "gold",
                    shape: "rect",
                    label: "pay",
                    height: 40,
                    layout: "vertical",
                    disableMaxWidth: true,
                }}
                fundingSource="paypal"
                disabled={isDisabled}
                forceReRender={[amount, ressourceName]}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: ressourceName,
                                amount: {
                                    currency_code: "EUR",
                                    value: amount.toString(),
                                },
                            },
                        ],
                        intent: 'CAPTURE',
                    });
                }}
                onApprove={async (data, actions) => {
                    try {
                        const details = await actions.order?.capture();
                        if (details?.id) {
                            await onApprove(details);
                        }
                    } catch (error) {
                        console.error('Payment capture failed:', error);
                        toast({
                            title: "Erreur",
                            description: "La capture du paiement a échoué. Veuillez réessayer.",
                            variant: "destructive",
                        });
                    }
                }}
                onError={(err) => {
                    console.error("PayPal Checkout onError", err);
                    toast({
                        title: "Erreur",
                        description: "Une erreur s'est produite lors du paiement. Veuillez réessayer.",
                        variant: "destructive",
                    });
                }}
                onCancel={() => {
                    console.log("Paiement annulé");
                }}
            />
            <Button
                onClick={() => {
                    toast({
                        title: "Stripe",
                        description: "Le paiement par Stripe sera bientôt disponible",
                    });
                }}
                className="w-full h-10 mt-2 bg-[#635BFF] hover:bg-[#4b44d1] text-white flex items-center justify-center gap-2"
                disabled={isDisabled}
            >
                <CreditCard className="w-4 h-4" />
                Payer avec Stripe
            </Button>
        </div>
    );
}

