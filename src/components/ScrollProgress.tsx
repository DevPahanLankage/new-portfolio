import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-[72px] left-0 right-0 h-0.5 bg-yinmn-blue dark:bg-silver-lake z-50 origin-left"
      style={{ scaleX }}
    />
  )
} 