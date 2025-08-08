'use server'

import {  PurchaseData } from "@/src/types/paypal-type";


export async function processPurchase(data: PurchaseData) {

    const result = await fetch("/api/purchase", {
        method: "POST",
        body: JSON.stringify(data)
    });

    return result.json();
}