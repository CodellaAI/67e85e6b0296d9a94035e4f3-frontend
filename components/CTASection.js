
'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/50 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="glass-card max-w-4xl mx-auto rounded-2xl p-8 md:p-12 overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
                Ready to Transform Your UI?
              </h2>
              <p className="text-lg text-primary-100/80 max-w-2xl mx-auto">
                Implement our glassmorphism design system in your next project and create interfaces that stand out with modern, premium aesthetics.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <motion.button 
                  className="px-8 py-3 rounded-full bg-accent-500 text-white font-medium hover:bg-accent-600 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
              
              <Link href="#features">
                <motion.button 
                  className="btn-glass px-8 py-3 rounded-full text-white font-medium flex items-center justify-center w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
