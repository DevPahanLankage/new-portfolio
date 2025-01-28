import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '19952a92-d88f-439c-bc5d-367f501f2d78',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name}`,
          botcheck: false
        }),
      })

      const data = await response.json()
      
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        
        // Show success state for 2 seconds
        setTimeout(() => {
          setStatus('idle')
        }, 2000)
      } else {
        console.error('Form submission failed:', data)
        setStatus('error')
        setTimeout(() => {
          setStatus('idle')
        }, 3000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    }
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
          className={`
            relative min-w-[200px] h-[68px] px-5 py-5 rounded-[14px] font-medium text-lg
            text-rich-black dark:text-platinum
            cursor-pointer border-none
            shadow-[0_0.5px_0.5px_1px_rgba(255,255,255,0.2),0_10px_20px_rgba(0,0,0,0.2),0_4px_5px_0px_rgba(0,0,0,0.05)]
            hover:shadow-[0_0_1px_2px_rgba(255,255,255,0.3),0_15px_30px_rgba(0,0,0,0.3),0_10px_3px_-3px_rgba(0,0,0,0.04)]
            active:shadow-[0_0_1px_2px_rgba(255,255,255,0.3),0_10px_3px_-3px_rgba(0,0,0,0.2)]
            hover:scale-[1.02] active:scale-100
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
            group
            ${status === 'sending' || status === 'success' ? 'focus' : ''}
          `}
          style={{
            '--primary': '#ff5569',
          } as React.CSSProperties}
        >
          <div className="outline absolute -inset-[2px_3.5px] rounded-[14px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-[1]">
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_180deg,transparent_60%,white_80%,transparent_100%)] animate-spin" />
          </div>

          <div className="absolute inset-0 rounded-[14px] border-2 border-transparent bg-gradient-to-b from-[#f7f8f7] to-[#e7e7e7] dark:from-oxford-blue dark:to-rich-black z-0" />
          
          <div className="absolute inset-[7px_6px_6px_6px] bg-gradient-to-t from-[#f7f8f7] to-[#e7e7e7] dark:from-oxford-blue dark:to-rich-black rounded-[30px] filter blur-[0.5px] z-[2]" />

          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.div
                key="default"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="state state--default relative pl-[29px] z-[2] flex items-center justify-center"
              >
                <div className="icon absolute left-0 top-0 bottom-0 my-auto scale-125 transition-all duration-300 flex items-center justify-center group-hover:rotate-45">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-land">
                    <g style={{ filter: 'url(#shadow)' }}>
                      <path d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z" fill="currentColor" />
                      <path d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z" fill="currentColor" />
                    </g>
                    <defs>
                      <filter id="shadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="0.6" floodOpacity="0.5" />
                      </filter>
                    </defs>
                  </svg>
                  <div className="absolute top-1/2 h-[2px] -left-[5px] bg-gradient-to-r from-transparent to-black/50" />
                </div>
                <p className="flex items-center justify-center">
                  {['S', 'e', 'n', 'd', ' ', 'M', 'e', 's', 's', 'a', 'g', 'e'].map((letter, i) => (
                    <motion.span
                      key={i}
                      style={{ '--i': i } as React.CSSProperties}
                      className="block group-hover:animate-wave animate-slideDown"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </p>
              </motion.div>
            )}

            {status === 'sending' && (
              <motion.div
                key="sending"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="state state--default relative pl-[29px] z-[2] flex items-center justify-center"
              >
                <div className="icon absolute left-0 top-0 bottom-0 my-auto scale-125 flex items-center justify-center">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-takeOff">
                    <g style={{ filter: 'url(#shadow)' }}>
                      <path d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z" fill="currentColor" />
                      <path d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z" fill="currentColor" />
                    </g>
                    <defs>
                      <filter id="shadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="0.6" floodOpacity="0.5" />
                      </filter>
                    </defs>
                  </svg>
                  <div className="absolute top-1/2 h-[2px] -left-[5px] bg-gradient-to-r from-transparent to-black/50 animate-contrail" />
                </div>
                <p className="flex items-center justify-center">
                  {['S', 'e', 'n', 'd', ' ', 'M', 'e', 's', 's', 'a', 'g', 'e'].map((letter, i) => (
                    <motion.span
                      key={i}
                      style={{ '--i': i } as React.CSSProperties}
                      className="block animate-disapear"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </p>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="state state--sent absolute inset-0 z-[2] flex items-center justify-center"
              >
                <div className="icon mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1em" width="1em" strokeWidth="0.5px" stroke="black" className="animate-appear [animation-delay:0.8s]">
                    <g style={{ filter: 'url(#shadow)' }}>
                      <path fill="currentColor" d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" />
                      <path fill="currentColor" d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z" />
                    </g>
                  </svg>
                </div>
                <p className="flex flex-row items-center justify-center">
                  {['S', 'e', 'n', 't'].map((letter, i) => (
                    <motion.span
                      key={i}
                      style={{ '--i': i + 5 } as React.CSSProperties}
                      className="inline-block animate-slideDown [animation-delay:calc(var(--i)*0.2s)]"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
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