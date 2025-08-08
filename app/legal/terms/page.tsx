/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-white mb-8">Conditions d'Utilisation</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptation des Conditions</h2>
              <p>
                En accédant et en utilisant la plateforme Y.Abdouraouf, vous acceptez d'être lié 
                par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez 
                ne pas utiliser notre plateforme.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description des Services</h2>
              <p>
                Y.Abdouraouf fournit une plateforme de ressources éducatives et de développement, 
                incluant mais non limité à :
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Tutoriels et cours en ligne</li>
                <li>Ressources de développement</li>
                <li>Code source et documentation</li>
                <li>Services de consultation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Compte Utilisateur</h2>
              <p>En créant un compte, vous acceptez :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>De fournir des informations exactes et complètes</li>
                <li>De maintenir la confidentialité de votre mot de passe</li>
                <li>D'être responsable de toutes les activités sur votre compte</li>
                <li>De nous informer de toute utilisation non autorisée</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Propriété Intellectuelle</h2>
              <p>
                Tout le contenu disponible sur Y.Abdouraouf (textes, images, vidéos, code source) 
                est protégé par des droits de propriété intellectuelle. L'utilisation de ce contenu 
                est strictement limitée à un usage personnel et non commercial.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Paiements et Remboursements</h2>
              <p>
                Pour les contenus premium :
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Les paiements sont sécurisés via PayPal et Stripe</li>
                <li>Les prix sont en euros et incluent toutes les taxes applicables</li>
                <li>Les remboursements sont possibles dans les 14 jours suivant l'achat</li>
                <li>L'accès est permanent une fois l'achat effectué</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation de Responsabilité</h2>
              <p>
                Y.Abdouraouf ne peut être tenu responsable des dommages directs ou indirects 
                résultant de l'utilisation ou de l'impossibilité d'utiliser nos services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Modifications des Services</h2>
              <p>
                Nous nous réservons le droit de modifier, suspendre ou interrompre tout aspect 
                du service à tout moment, avec ou sans préavis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Résiliation</h2>
              <p>
                Nous nous réservons le droit de résilier ou de suspendre votre accès à nos services 
                en cas de violation de ces conditions d'utilisation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Contact</h2>
              <p>
                Pour toute question concernant ces conditions d'utilisation, contactez-nous à : {" "}
                <a href="mailto:contact@y.abdouraouf.com" className="text-purple-400 hover:text-purple-300">
                  contact@y.abdouraouf.com
                </a>
              </p>
            </section>

            <section>
              <p className="mt-8 text-sm text-gray-400">
                Dernière mise à jour : {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 