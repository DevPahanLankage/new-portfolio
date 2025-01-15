import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-radial from-yinmn-blue/10 via-transparent to-transparent dark:from-yinmn-blue/5" />
      
      {/* Animated Shapes */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-yinmn-blue/10 to-transparent dark:from-yinmn-blue/5 blur-3xl"
            animate={{
              x: ['0%', '100%', '0%'],
              y: ['0%', '100%', '0%'],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] dark:opacity-[0.05]" />

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] dark:opacity-[0.05] mix-blend-overlay" />
    </div>
  )
} 