
'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading for smoother transitions
    setTimeout(() => {
      setIsLoaded(true)
    }, 300)
  }, [])

  return (
    <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Hero />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </div>
  )
}
