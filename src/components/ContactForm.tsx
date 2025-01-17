import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '19952a92-d88f-439c-bc5d-367f501f2d78',
          ...formData,
          subject: `New message from ${formData.name}`,
        }),
      })

      const data = await response.json()
      
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }

    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-14">
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-medium text-yinmn-blue dark:text-silver-lake mb-2">
            Let's Connect
          </h3>
          <p className="text-oxford-blue dark:text-silver-lake">
            Whether you have a project in mind or just want to chat about web development, I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-medium text-yinmn-blue dark:text-silver-lake mb-3">Contact Details</h3>
          <div className="flex items-center gap-3 text-oxford-blue dark:text-silver-lake mb-2">
            <EnvelopeIcon className="w-5 h-5" />
            <a href="mailto:pahan.lankage@gmail.com" className="hover:text-yinmn-blue dark:hover:text-platinum transition-colors">
              pahan.lankage@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-oxford-blue dark:text-silver-lake">
            <PhoneIcon className="w-5 h-5" />
            <a href="tel:+94760019446" className="hover:text-yinmn-blue dark:hover:text-platinum transition-colors">
              +94 76 001 9446
            </a>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-rich-black dark:text-platinum mb-2">
            Name
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-oxford-blue/50 border border-silver-lake/20 
                     focus:border-yinmn-blue dark:focus:border-silver-lake outline-none transition-colors
                     text-rich-black dark:text-platinum placeholder-oxford-blue/50 dark:placeholder-silver-lake/50"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-rich-black dark:text-platinum mb-2">
            Email
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-oxford-blue/50 border border-silver-lake/20 
                     focus:border-yinmn-blue dark:focus:border-silver-lake outline-none transition-colors
                     text-rich-black dark:text-platinum placeholder-oxford-blue/50 dark:placeholder-silver-lake/50"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-rich-black dark:text-platinum mb-2">
            Message
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-oxford-blue/50 border border-silver-lake/20 
                     focus:border-yinmn-blue dark:focus:border-silver-lake outline-none transition-colors
                     text-rich-black dark:text-platinum placeholder-oxford-blue/50 dark:placeholder-silver-lake/50
                     resize-none"
            placeholder="Your message here..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === 'sending'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-3 bg-yinmn-blue text-platinum rounded-xl font-medium 
                   hover:bg-oxford-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </motion.button>

        {status === 'success' && (
          <p className="text-green-600 dark:text-green-400 text-sm">
            Message sent successfully! I'll get back to you soon.
          </p>
        )}
        
        {status === 'error' && (
          <p className="text-red-600 dark:text-red-400 text-sm">
            Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  )
} 