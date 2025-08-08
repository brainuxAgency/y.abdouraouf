/* eslint-disable react/no-unescaped-entities */
"use client"
import { motion } from "framer-motion"
import { Rocket, TrendingUp, Shield, Globe, Clock, Zap } from "lucide-react"
import { Button } from "../ui/button"

const benefits = [
  {
    icon: TrendingUp,
    title: "Croissance Visible",
    description: "Développez votre présence en ligne avec des solutions qui attirent plus de clients. Nos méthodes basées sur les données vous assurent des résultats concrets et mesurables."
  },
  {
    icon: Shield,
    title: "Sécurité Renforcée",
    description: "Protection complète de vos données et de celles de vos clients avec les dernières technologies de sécurité. Conformité totale avec les lois sur la protection des données."
  },
  {
    icon: Globe,
    title: "Toujours Accessible",
    description: "Vos services restent disponibles 24h/24 et 7j/7, avec une garantie de fonctionnement de 99.9%. Vos clients peuvent vous trouver à tout moment, où qu'ils soient."
  },
  {
    icon: Zap,
    title: "Vitesse Exceptionnelle",
    description: "Sites et applications ultra-rapides qui ne ralentissent jamais, même aux heures de pointe. Une expérience fluide qui fidélise vos visiteurs."
  },
  {
    icon: Clock,
    title: "Gain de Temps Précieux",
    description: "Automatisez jusqu'à 80% de vos tâches répétitives grâce à l'intelligence artificielle. Concentrez-vous sur l'essentiel pendant que la technologie travaille pour vous."
  },
  {
    icon: Rocket,
    title: "Toujours à la Pointe",
    description: "Gardez une longueur d'avance avec les dernières innovations technologiques. Nous veillons à ce que vos outils restent modernes et efficaces."
  }
]

export function ValueProposition() {
  const scrollToSection = (sectionId: string) => {
  // Ferme le menu mobile
    const element = document.querySelector(sectionId)
    if (element) {
      const navHeight = 64 // Hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_10%_200px,#3e0693,transparent)]" />
      
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
              Pourquoi Choisir Nos Services ?
            </span>
          </h2>
          <p className="text-xl text-gray-300/90 max-w-3xl mx-auto">
            Transformez votre entreprise avec des outils numériques qui simplifient votre travail et impressionnent vos clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-8 bg-gray-900 rounded-lg ring-1 ring-gray-800/50">
                <benefit.icon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300/90">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center justify-center"
        >
          <div className="max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à Faire Évoluer Votre Entreprise ?
            </h3>
            <p className="text-gray-300/90 mb-8">
              Discutons de vos besoins lors d'une consultation gratuite et voyons comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
          </div>
          
          <Button 
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg shadow-xl shadow-purple-500/20"
            onClick={() => scrollToSection("#contact")}
          >
            Réserver ma consultation Gratuite
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 