/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { FaPaypal, FaStripe, FaLock, FaShieldAlt, FaUserShield } from "react-icons/fa"
import { RiSecurePaymentLine } from "react-icons/ri"
import { motion } from "framer-motion"

const features = [
  {
    icon: FaLock,
    title: "Cryptage SSL 256-bit",
    description: "Toutes vos données sont protégées par un cryptage de niveau bancaire",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: FaUserShield,
    title: "Protection des Données",
    description: "Conformité RGPD et sécurité maximale de vos informations personnelles",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: FaShieldAlt,
    title: "Transactions Sécurisées",
    description: "Surveillance en temps réel et détection des fraudes",
    color: "from-green-500 to-green-600"
  }
]

const paymentStats = [
  { value: "100%", label: "Transactions Sécurisées" },
  { value: "24/7", label: "Surveillance" },
  { value: "14j", label: "Garantie de Remboursement" }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function PaymentSecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 pt-24 pb-16 relative">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-400 hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-500/10 rounded-full">
                <RiSecurePaymentLine className="w-16 h-16 text-purple-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sécurité et Protection
            </h1>
            <p className="text-xl text-gray-400">
              Nous mettons en œuvre les meilleures pratiques de sécurité pour protéger 
              vos paiements et vos données personnelles.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
          >
            {paymentStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              <div className="relative p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Payment Partners */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Nos Partenaires de Confiance</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nous collaborons avec les leaders mondiaux du paiement en ligne pour 
            vous offrir des transactions sûres et sécurisées.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaPaypal className="w-10 h-10 text-[#00457C]" />
              <div>
                <h3 className="text-xl font-semibold text-white">PayPal</h3>
                <p className="text-gray-400">Protection acheteur garantie</p>
              </div>
            </div>
            <p className="text-gray-300">
              Leader mondial des paiements en ligne, PayPal offre une protection 
              complète et un système de résolution des litiges.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaStripe className="w-10 h-10 text-[#635BFF]" />
              <div>
                <h3 className="text-xl font-semibold text-white">Stripe</h3>
                <p className="text-gray-400">Infrastructure de paiement sécurisée</p>
              </div>
            </div>
            <p className="text-gray-300">
              Plateforme de paiement de confiance utilisée par des millions d'entreprises, 
              avec une sécurité de niveau bancaire.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Des Questions ?</h2>
          <p className="text-gray-400 mb-6">
            Notre équipe de sécurité est disponible pour répondre à toutes vos questions 
            concernant la sécurité de vos paiements.
          </p>
          <a 
            href="mailto:security@y.abdouraouf.com" 
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            security@y.abdouraouf.com
          </a>
        </motion.div>
      </div>
    </div>
  )
} 