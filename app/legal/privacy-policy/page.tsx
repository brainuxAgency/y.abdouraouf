/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-400 hover:text-purple-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>

        <div className="prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-white mb-8">Politique de Confidentialité</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p>
                La protection de vos données personnelles est une priorité pour Y.Abdouraouf. 
                Cette politique de confidentialité décrit comment nous collectons, utilisons et 
                protégeons vos informations personnelles lorsque vous utilisez notre plateforme.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Collecte des Données</h2>
              <p>Nous collectons les informations suivantes :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Informations de compte (nom, email, mot de passe)</li>
                <li>Données de profil</li>
                <li>Historique des achats et transactions</li>
                <li>Informations techniques (adresse IP, type de navigateur)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Utilisation des Données</h2>
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Gérer votre compte et accès aux services</li>
                <li>Personnaliser votre expérience</li>
                <li>Traiter vos paiements</li>
                <li>Vous envoyer des communications importantes</li>
                <li>Améliorer nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Protection des Données</h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
                pour protéger vos données contre tout accès non autorisé, modification, 
                divulgation ou destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Vos Droits</h2>
              <p>Vous avez le droit de :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Accéder à vos données personnelles</li>
                <li>Rectifier vos données</li>
                <li>Supprimer vos données</li>
                <li>Limiter le traitement de vos données</li>
                <li>Vous opposer au traitement de vos données</li>
                <li>Portabilité de vos données</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
              <p>
                Nous utilisons des cookies pour améliorer votre expérience sur notre plateforme. 
                Vous pouvez contrôler l'utilisation des cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, 
                contactez-nous à : <a href="mailto:privacy@y.abdouraouf.com" className="text-purple-400 hover:text-purple-300">
                privacy@y.abdouraouf.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications entrent en vigueur dès leur publication sur cette page.
              </p>
              <p className="mt-4 text-sm text-gray-400">
                Dernière mise à jour : {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 