
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: "Alex Morgan",
      role: "Product Designer",
      quote: "The glassmorphism effects completely transformed our dashboard UI. Our users love the modern look and the subtle animations make the experience feel premium.",
      avatar: "/avatar1.jpg",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      quote: "I was worried about performance issues with glass effects, but this implementation is incredibly smooth. The code is clean and easy to customize.",
      avatar: "/avatar2.jpg",
      rating: 5,
    },
    {
      name: "Michael Davis",
      role: "UX Director",
      quote: "Our conversion rates improved by 27% after implementing this design system. The glass UI creates a sense of depth that makes information more digestible.",
      avatar: "/avatar3.jpg",
      rating: 4,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="testimonials" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-accent-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
              What Our Clients Say
            </h2>
            <p className="text-lg text-primary-100/80">
              Hear from designers and developers who have implemented our glassmorphism UI in their projects.
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 relative"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)",
                background: "rgba(255, 255, 255, 0.12)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-6 right-6 text-accent-400">
                <Quote className="w-8 h-8 opacity-20" />
              </div>
              
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-accent-500/30"></div>
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      const initial = testimonial.name.charAt(0)
                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-primary-700/50 text-white font-semibold">${initial}</div>`
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-primary-100/70">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-accent-400 fill-accent-400' : 'text-gray-400'}`}
                  />
                ))}
              </div>
              
              <p className="text-primary-100/90 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
