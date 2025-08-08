"use client"
import { Service } from "@/src/constants/services"
import { motion } from "framer-motion"

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`} />
      <div >
        <div className="relative p-4 md:p-6 bg-gray-900 rounded-lg ring-1 ring-gray-800/50 hover:ring-gray-700/50 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
              className="bg-purple-500/20 rounded-full p-3"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <service.icon className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-400 transition-all duration-300">
              {service.title}
            </h3>
          </div>
          <motion.p 
            className="text-gray-300/90 text-sm leading-relaxed relative"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
          >
            {service.description}
          </motion.p>
          <motion.div 
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            <svg 
              className="w-5 h-5 text-purple-400"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </motion.div>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            whileHover={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0) 0%, transparent 50%)"
              ],
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  )
} 