import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export default function AnimatedButton({ children, onClick, variant = 'primary' }: AnimatedButtonProps) {
  const baseClasses = "relative px-6 py-3 rounded-full font-medium flex items-center gap-2 overflow-hidden group"
  const variantClasses = {
    primary: "bg-yinmn-blue text-platinum hover:bg-oxford-blue",
    secondary: "bg-transparent border-2 border-yinmn-blue text-yinmn-blue dark:text-silver-lake hover:bg-yinmn-blue/10"
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
      <motion.span
        className="relative"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <ArrowRightIcon className="w-5 h-5" />
      </motion.span>
    </motion.button>
  )
} 