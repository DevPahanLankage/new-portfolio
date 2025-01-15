import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function AnimatedButton({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary'
}: AnimatedButtonProps) {
  const baseClasses = 'relative overflow-hidden rounded-lg px-6 py-3 font-medium transition-all duration-300'
  const variantClasses = {
    primary: 'bg-yinmn-blue text-platinum hover:bg-yinmn-blue/90 hover:scale-105',
    secondary: 'bg-transparent border-2 border-yinmn-blue text-yinmn-blue dark:text-platinum hover:bg-yinmn-blue/10 hover:scale-105'
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
} 