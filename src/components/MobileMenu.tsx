import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (sectionId: string) => void
}

export default function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  const handleClick = (sectionId: string) => {
    onNavigate(sectionId)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-rich-black/20 dark:bg-rich-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-rich-black p-6 shadow-xl z-50"
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-oxford-blue/50 transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-rich-black dark:text-platinum" />
              </button>
            </div>
            
            <nav className="space-y-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick('hero')}
                className="w-full text-left px-4 py-2 text-lg font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors"
              >
                Home
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick('about')}
                className="w-full text-left px-4 py-2 text-lg font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors"
              >
                About
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick('skills')}
                className="w-full text-left px-4 py-2 text-lg font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors"
              >
                Skills
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick('education')}
                className="w-full text-left px-4 py-2 text-lg font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors"
              >
                Education
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick('certifications')}
                className="w-full text-left px-4 py-2 text-lg font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors"
              >
                Certifications
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick('projects')}
                className="w-full text-left px-4 py-2 text-lg font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors"
              >
                Projects
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick('contact')}
                className="w-full text-left px-4 py-2 text-lg font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors"
              >
                Contact
              </motion.button>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 