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
              className={`text-2xl font-medium tracking-tight text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors`}
            >
              Pahan Lankage
            </button>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6 relative">
                <button 
                  onClick={() => scrollToSection('about')}
                  className={`text-base font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors relative`}
                >
                  About
                  <NavIndicator isActive={activeSection === 'about'} />
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className={`text-base font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors relative`}
                >
                  Skills
                  <NavIndicator isActive={activeSection === 'skills'} />
                </button>
                <button 
                  onClick={() => scrollToSection('education')}
                  className={`text-base font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors relative`}
                >
                  Education
                  <NavIndicator isActive={activeSection === 'education'} />
                </button>
                <button 
                  onClick={() => scrollToSection('certifications')}
                  className={`text-base font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors relative`}
                >
                  Certifications
                  <NavIndicator isActive={activeSection === 'certifications'} />
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className={`text-base font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors relative`}
                >
                  Projects
                  <NavIndicator isActive={activeSection === 'projects'} />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`text-base font-medium text-rich-black dark:text-platinum hover:text-yinmn-blue dark:hover:text-silver-lake transition-colors relative`}
                >
                  Contact
                  <NavIndicator isActive={activeSection === 'contact'} />
                </button>
              </div>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-oxford-blue/50 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <SunIcon className="h-6 w-6 text-platinum" />
                ) : (
                  <MoonIcon className="h-6 w-6 text-rich-black" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-oxford-blue/50 transition-colors"
                aria-label="Open menu"
              >
                <Bars3Icon className="h-6 w-6 text-rich-black dark:text-platinum" />
              </button>
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