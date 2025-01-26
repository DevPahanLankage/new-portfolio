import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { wobbleHover } from '../utils/animations'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 flex items-center z-50">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              rotate: isHovered ? [0, -5, 5, -5, 0] : 0
            }}
            transition={{
              rotate: {
                repeat: 0,
                duration: 0.5
              }
            }}
            className="absolute right-[calc(100%+20px)] text-2xl font-['Geist_Sans'] text-platinum whitespace-nowrap"
            style={{ fontWeight: 80 }}
          >
            Back to Top
          </motion.span>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={scrollToTop}
            className="p-3 bg-yinmn-blue dark:bg-oxford-blue rounded-full shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUpIcon className="w-6 h-6 text-platinum" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
} 