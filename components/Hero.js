
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      
      const rect = heroRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      setMousePosition({ x, y })
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  // Calculate movement for floating elements based on mouse position
  const calculateMovement = (factor = 1) => {
    if (!heroRef.current) return { x: 0, y: 0 }
    
    const rect = heroRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Calculate distance from center (normalized to -1 to 1)
    const moveX = ((mousePosition.x - centerX) / centerX) * 20 * factor
    const moveY = ((mousePosition.y - centerY) / centerY) * 10 * factor
    
    return { x: moveX, y: moveY }
  }

  const floatingElement1 = calculateMovement(0.5)
  const floatingElement2 = calculateMovement(-0.3)
  const floatingElement3 = calculateMovement(0.2)

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background gradient circles */}
      <div className="absolute top-[-300px] left-[-300px] w-[600px] h-[600px] rounded-full bg-primary-600/20 blur-3xl"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-secondary-600/20 blur-3xl"></div>
      <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-accent-500/10 blur-3xl"></div>

      {/* Floating glassmorphic elements */}
      <motion.div 
        className="absolute glass rounded-2xl w-32 h-32 md:w-48 md:h-48 opacity-20"
        initial={{ x: -100, y: -150 }}
        animate={{ 
          x: -100 + floatingElement1.x, 
          y: -150 + floatingElement1.y,
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }
        }}
      />
      
      <motion.div 
        className="absolute glass rounded-full w-24 h-24 md:w-36 md:h-36 opacity-20"
        initial={{ x: 150, y: 100 }}
        animate={{ 
          x: 150 + floatingElement2.x, 
          y: 100 + floatingElement2.y,
          rotate: [0, -5, 0, 5, 0],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }
        }}
      />
      
      <motion.div 
        className="absolute glass rounded-lg w-16 h-16 md:w-24 md:h-24 opacity-20"
        initial={{ x: 50, y: -180 }}
        animate={{ 
          x: 50 + floatingElement3.x, 
          y: -180 + floatingElement3.y,
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut"
          }
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
              Modern Design with Glassmorphism
            </h1>
            
            <p className="text-lg md:text-xl text-primary-100/80 mb-10 max-w-2xl mx-auto">
              Experience the beauty of frosted glass effects with our cutting-edge UI design. Create stunning interfaces that feel premium and futuristic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#features">
                <motion.button 
                  className="btn-glass group px-8 py-3 rounded-full text-white font-medium flex items-center justify-center gap-2 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Features
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
              
              <Link href="#contact">
                <motion.button 
                  className="px-8 py-3 rounded-full bg-accent-500 text-white font-medium hover:bg-accent-600 transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-16 glass-card rounded-xl p-6 md:p-8 max-w-3xl mx-auto overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 z-10"></div>
              <Image 
                src="/dashboard-preview.jpg" 
                alt="Dashboard Preview" 
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  e.target.parentElement.innerHTML += '<div class="absolute inset-0 flex items-center justify-center text-white/50">Preview Image</div>'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
