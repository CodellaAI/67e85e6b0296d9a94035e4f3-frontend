
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Zap, Sparkles, Layers, LayoutGrid, Palette } from 'lucide-react'

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-accent-400" />,
      title: 'Modern UI Elements',
      description: 'Stunning glass-like components that bring depth and elegance to your interfaces.',
    },
    {
      icon: <Zap className="w-6 h-6 text-accent-400" />,
      title: 'Optimized Performance',
      description: 'Carefully crafted to ensure smooth animations and transitions despite complex visual effects.',
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-accent-400" />,
      title: 'Responsive Design',
      description: 'Glass effects that adapt perfectly to any screen size from mobile to desktop.',
    },
    {
      icon: <Layers className="w-6 h-6 text-accent-400" />,
      title: 'Depth & Dimension',
      description: 'Create interfaces with a sense of depth through strategic layering and transparency.',
    },
    {
      icon: <Palette className="w-6 h-6 text-accent-400" />,
      title: 'Custom Styling',
      description: 'Easily customize the glass effect intensity, colors, and blur to match your brand.',
    },
    {
      icon: <Shield className="w-6 h-6 text-accent-400" />,
      title: 'Browser Compatible',
      description: 'Works across modern browsers with graceful fallbacks for older ones.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="features" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-full h-96 bg-gradient-to-r from-primary-700/20 to-secondary-700/20 transform -skew-y-3 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
              Stunning Glass UI Features
            </h2>
            <p className="text-lg text-primary-100/80">
              Discover the power of glassmorphism with these premium features designed to elevate your user interface.
            </p>
          </motion.div>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 h-full"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)",
                background: "rgba(255, 255, 255, 0.12)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass inline-flex p-3 rounded-lg mb-4 bg-white/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-primary-100/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
