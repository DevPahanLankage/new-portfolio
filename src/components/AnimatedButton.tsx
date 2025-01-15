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
  const baseClasses = 'relative rounded-lg px-6 py-3 font-medium transition-all duration-300'
  const variantClasses = {
    primary: 'bg-yinmn-blue text-platinum hover:bg-yinmn-blue/90',
    secondary: 'bg-transparent border-2 border-yinmn-blue text-yinmn-blue dark:text-platinum hover:bg-yinmn-blue/10'
  }

  return (
    <motion.div
      className="rounded-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <button
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </button>
    </motion.div>
  )
} 