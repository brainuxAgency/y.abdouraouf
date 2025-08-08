
"use client"
import { motion } from "framer-motion"
import { ServiceCard } from "./ServiceCard"
import { mesServices } from "@/src/constants/services"

export function Services() {
    return (
        <section id="services" className="relative py-32 bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_100%_200px,#3e0693,transparent)]" />

            <div className="container relative mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
                            Développement Web & Mobile
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300/90 max-w-3xl mx-auto">
                        Des solutions innovantes et sur mesure pour donner vie à vos projets digitaux
                    </p>
                </motion.div>

                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center max-w-4xl mx-auto gap-8">
                        {mesServices.slice(0, 2).map((service, index) => (
                            <ServiceCard key={service.title} service={service} index={index} />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:grid-cols-3 gap-8">
                        {mesServices.slice(2, 5).map((service, index) => (
                            <ServiceCard key={service.title} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}