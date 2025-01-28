import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export default function AnimatedButton({ children, onClick, variant = 'primary' }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x)
  const mouseY = useSpring(y)

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const distanceX = event.clientX - centerX
    const distanceY = event.clientY - centerY
    
    x.set(distanceX / 5) // Reduced movement for subtlety
    y.set(distanceY / 5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const baseClasses = "relative px-6 py-3 rounded-xl font-medium flex items-center gap-2 overflow-hidden group"
  const variantClasses = {
    primary: "bg-gradient-to-r from-yinmn-blue via-oxford-blue to-yinmn-blue text-platinum bg-[length:200%_100%] hover:bg-right transition-[background-position] duration-500",
    secondary: "bg-gradient-to-r from-transparent via-yinmn-blue/10 to-transparent border-2 border-yinmn-blue text-yinmn-blue dark:text-silver-lake bg-[length:200%_100%] hover:bg-right transition-[background-position] duration-500"
  }

  return (
    <motion.button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`${baseClasses} ${variantClasses[variant]}`}
      style={{
        x: mouseX,
        y: mouseY,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
      <motion.span
        animate={{
          x: isHovered ? 5 : 0,
          opacity: isHovered ? 1 : 0.7,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <ArrowRightIcon className="w-5 h-5" />
      </motion.span>
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-yinmn-blue/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
} 