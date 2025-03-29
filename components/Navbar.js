
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Disclosure, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <Disclosure as="nav" 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out border border-solid ${
        scrolled 
          ? 'bg-black/20 backdrop-blur-md border-white/5 py-2 shadow-lg' 
          : 'bg-transparent backdrop-blur-none border-transparent py-4 shadow-none'
      }`}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center">
                  <div className="h-10 w-10 relative mr-2">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-500 to-primary-500 animate-glow"></div>
                    <div className="absolute inset-0.5 rounded-full glass flex items-center justify-center">
                      <span className="text-white font-bold">G</span>
                    </div>
                  </div>
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-primary-300">
                    GlassMorphic
                  </span>
                </Link>
              </div>
              
              <div className="hidden md:flex md:items-center md:space-x-8">
                {navigation.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="relative px-2 py-1 text-sm font-medium text-white hover:text-accent-300 transition-colors group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
                <Link 
                  href="#contact" 
                  className="btn-glass px-4 py-2 rounded-full text-sm font-medium text-white hover:text-accent-300"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="flex md:hidden">
                <Disclosure.Button className="btn-glass inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent-300 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="md:hidden glass-dark">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-accent-300 hover:bg-white/5 transition-colors"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Disclosure.Button
                  as="a"
                  href="#contact"
                  className="block w-full text-center mt-4 btn-glass px-4 py-2 rounded-full text-base font-medium text-white hover:text-accent-300"
                >
                  Get Started
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
