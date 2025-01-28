import { useState, useEffect, type ReactNode } from 'react'
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline'
import MobileMenu from '../components/MobileMenu'
import ScrollProgress from '../components/ScrollProgress'
import SocialLinks from '../components/SocialLinks'
import BackToTop from '../components/BackToTop'
import CustomCursor from '../components/CustomCursor'
import { motion, AnimatePresence } from 'framer-motion'

interface RootLayoutProps {
  children: ReactNode
}

function NavIndicator({ isActive }: { isActive: boolean }) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 animated-gradient-indicator"
          layoutId="activeSection"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </AnimatePresence>
  )
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'education', 'certifications', 'projects', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen bg-platinum dark:bg-rich-black ${isDarkMode ? 'dark' : ''}`}>
      <CustomCursor />
      <header className="fixed top-0 w-full bg-white/80 dark:bg-rich-black/80 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`text-2xl font-medium tracking-tight text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-all duration-300 relative group`}
            >
              <span className="relative z-10">Pahan Lankage</span>
              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-yinmn-blue/10 via-yinmn-blue/5 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"
                whileHover={{ scale: 1.2 }}
              />
            </button>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6 relative">
                <motion.button 
                  onClick={() => scrollToSection('about')}
                  className={`text-base font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-all duration-300 relative group`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10">About</span>
                  <NavIndicator isActive={activeSection === 'about'} />
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-yinmn-blue/10 via-yinmn-blue/5 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('skills')}
                  className={`text-base font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-all duration-300 relative group`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10">Skills</span>
                  <NavIndicator isActive={activeSection === 'skills'} />
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-yinmn-blue/10 via-yinmn-blue/5 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('education')}
                  className={`text-base font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-all duration-300 relative group`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10">Education</span>
                  <NavIndicator isActive={activeSection === 'education'} />
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-yinmn-blue/10 via-yinmn-blue/5 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('certifications')}
                  className={`text-base font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-all duration-300 relative group`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10">Certifications</span>
                  <NavIndicator isActive={activeSection === 'certifications'} />
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-yinmn-blue/10 via-yinmn-blue/5 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('projects')}
                  className={`text-base font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-all duration-300 relative group`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10">Projects</span>
                  <NavIndicator isActive={activeSection === 'projects'} />
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-yinmn-blue/10 via-yinmn-blue/5 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('contact')}
                  className={`text-base font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-all duration-300 relative group`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10">Contact</span>
                  <NavIndicator isActive={activeSection === 'contact'} />
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-yinmn-blue/10 via-yinmn-blue/5 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.button>
              </div>
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl hover:bg-gradient-to-r from-yinmn-blue/10 via-yinmn-blue/5 to-transparent transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <SunIcon className="h-6 w-6 text-platinum" />
                ) : (
                  <MoonIcon className="h-6 w-6 text-rich-black" />
                )}
              </motion.button>
              <motion.button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-xl hover:bg-gradient-to-r from-yinmn-blue/10 via-yinmn-blue/5 to-transparent transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open menu"
              >
                <Bars3Icon className="h-6 w-6 text-rich-black dark:text-platinum" />
              </motion.button>
            </div>
          </div>
        </nav>
      </header>
      <div className="h-[72px]" />
      <ScrollProgress />
      <main className="container mx-auto px-4">
        {children}
      </main>

      <footer className="bg-white/80 dark:bg-rich-black/80 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-normal text-rich-black dark:text-platinum">
              © {new Date().getFullYear()} Pahan Lankage. All rights reserved.
            </p>
            <SocialLinks />
          </div>
        </div>
      </footer>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={scrollToSection}
      />
      <BackToTop />
    </div>
  )
} 