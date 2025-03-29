
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Pricing', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  }

  return (
    <footer className="relative pt-24 pb-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div className="h-8 w-8 relative mr-2">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-500 to-primary-500"></div>
                <div className="absolute inset-0.5 rounded-full glass flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
              </div>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-primary-300">
                GlassMorphic
              </span>
            </Link>
            
            <p className="text-primary-100/70 mb-6 max-w-md">
              Create stunning interfaces with our premium glassmorphism UI kit. Modern, responsive, and optimized for performance.
            </p>
            
            <div className="flex space-x-4">
              {['twitter', 'instagram', 'dribbble', 'github'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="glass inline-flex p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <div className="w-5 h-5 text-accent-400 capitalize">{social.charAt(0)}</div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-primary-100/70 hover:text-accent-300 transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-primary-100/70 hover:text-accent-300 transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-primary-100/70 hover:text-accent-300 transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="glass-dark rounded-xl p-6 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Ready to get started?</h3>
              <p className="text-primary-100/70">Join thousands of designers creating stunning interfaces.</p>
            </div>
            <Link href="#contact">
              <motion.button 
                className="px-6 py-3 rounded-lg bg-accent-500 text-white font-medium hover:bg-accent-600 transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-100/50 text-sm">
            © {currentYear} GlassMorphic. All rights reserved.
          </p>
          <p className="text-primary-100/50 text-sm mt-4 md:mt-0">
            Designed with ♥ for modern interfaces
          </p>
        </div>
      </div>
    </footer>
  )
}
