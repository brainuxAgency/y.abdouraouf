// Définir le type pour les fonctionnalités individuelles


export interface PayPalApprovalDetails {
    id?: string;  // Identifiant unique de la transaction PayPal
    intent?: string;  // L'intention du paiement (ex : 'CAPTURE')
    status?: string;  // Statut de la transaction (ex : 'COMPLETED', 'PENDING', 'FAILED')
    create_time?: string;  // Date de création du paiement
    update_time?: string;  // Dernière mise à jour de l'état du paiement
    payer?: {
        email_address?: string;  // Email de l'utilisateur
        payer_id?: string;  // Identifiant PayPal du payeur
        name?: {
            given_name?: string;  // Prénom
            surname?: string;  // Nom
        };
        address?: {
            country_code?: string;  // Code du pays (ex : 'FR' pour la France)
            line1?: string;  // Ligne d'adresse 1
            line2?: string;  // Ligne d'adresse 2
            city?: string;  // Ville
            postal_code?: string;  // Code postal
        };
    };
    payment_source?: {
        paypal?: {
            email_address?: string;  // Adresse e-mail utilisée par PayPal
        };
        card?: {
            name?: string;  // Nom du titulaire de la carte
            type?: string;  // Type de la carte (Visa, MasterCard, etc.)
            last_digits?: string;  // Derniers chiffres de la carte
            brand?: string;  // Marque de la carte (ex : 'VISA')
            expire_month?: string;  // Mois d'expiration
            expire_year?: string;  // Année d'expiration
            billing_address?: {
                line1?: string;  // Ligne d'adresse de facturation
                city?: string;  // Ville de facturation
                postal_code?: string;  // Code postal de facturation
                country_code?: string;  // Code pays de facturation
            };
        };
    };
    purchase_units?: Array<{
        reference_id?: string;  // Identifiant de référence de l'unité d'achat
        amount?: {
            currency_code?: string;  // Code de la devise (ex : 'USD', 'EUR')
            value?: string;  // Montant de la transaction
        };
        description?: string;  // Description de l'achat
    }>;
}

export interface PurchaseData {
    ressourceName: string;
    amount: number;
    orderDetails: PayPalApprovalDetails;
}
