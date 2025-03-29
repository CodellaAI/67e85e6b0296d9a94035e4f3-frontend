
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simulate form submission
    setFormStatus({ submitted: true, success: false, message: 'Sending...' })
    
    // Fake API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      })
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: '',
        })
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-accent-400" />,
      title: 'Email Us',
      content: 'contact@glassmorphic.com',
    },
    {
      icon: <Phone className="w-5 h-5 text-accent-400" />,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent-400" />,
      title: 'Visit Us',
      content: '123 Design Street, Creative City',
    },
  ]

  return (
    <section id="contact" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary-900/50 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
              Get in Touch
            </h2>
            <p className="text-lg text-primary-100/80">
              Have questions about implementing glassmorphism in your project? Reach out to us and we'll get back to you soon.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-xl p-6 md:p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-primary-100 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass-dark border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-primary-100 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass-dark border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-primary-100 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg glass-dark border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formStatus.submitted}
                  >
                    {formStatus.submitted && !formStatus.success ? (
                      <>Processing<span className="animate-pulse">...</span></>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                  
                  {formStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-3 rounded-lg text-center ${
                        formStatus.success ? 'bg-accent-500/20 text-accent-300' : 'bg-red-500/20 text-red-300'
                      }`}
                    >
                      {formStatus.message}
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-xl p-6 md:p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="glass inline-flex p-2 rounded-lg mr-4 bg-white/5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-primary-100">{item.title}</h4>
                      <p className="text-white">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="text-sm font-medium text-primary-100 mb-4">Follow Us</h4>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
