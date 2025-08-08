/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Shield, X } from "lucide-react"
import { RiInstagramLine, RiLinkedinLine, RiTiktokFill, RiYoutubeLine } from "react-icons/ri"
import Link from "next/link"

const socialLinks = [
  { name: "Tiktok", icon: RiTiktokFill },
  { name: "Instagram", icon: RiInstagramLine },
  { name: "Twitter", icon: X },
  { name: "Linkedin", icon: RiLinkedinLine },
  { name: "Youtube", icon: RiYoutubeLine },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Large decorative asterisk */}
      <div className="absolute right-0 bottom-0 text-purple-500 opacity-20 text-[200px] leading-none pointer-events-none">
        {`</>`}
      </div>

      <div className="xl:container mx-auto px-6 pt-20 pb-10 relative">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-purple-400 text-2xl">*</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 uppercase text-sm tracking-wider">
              Abonnez-vous à la Newsletter
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 max-w-3xl mx-auto">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
              RESTEZ À JOUR AVEC
              <br />
              MA <span className="italic">NEWSLETTER</span>
            </span>
          </h2>

          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Adresse Email*"
              className="bg-gray-900/50 border-gray-800/50 text-white placeholder:text-gray-500 backdrop-blur-xl"
            />
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-6 whitespace-nowrap">
              S'ABONNER
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {socialLinks.map((social) => (
            <motion.a key={social.name} href="#" whileHover={{ scale: 1.05 }} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white backdrop-blur-xl ring-1 ring-gray-800/50 transition-colors">
                <social.icon className="w-4 h-4" />
                {social.name}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-12 px-4 border-t border-gray-800">
          <div className="container mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h4 className="text-white font-semibold">À Propos</h4>
                <p className="text-gray-400 text-sm">
                  Y.Abdouraouf est une plateforme dédiée au partage de connaissances et de ressources pour les développeurs.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold">Liens Rapides</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/ressources" className="text-gray-400 hover:text-purple-400 transition-colors">
                      Ressources
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold">Légal</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/legal/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors">
                      Politique de Confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
                      Conditions d'Utilisation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold">Sécurité</h4>
                <Link href="/legal/payment-security" className="flex hover:text-purple-400 transition-colors items-center gap-2 text-gray-400">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Paiements Sécurisés</span>
                </Link>
              </div>
            </div>

            <div className="mt-12 pt-8 border-gray-800 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Conçu par Y.Abdouraouf. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

