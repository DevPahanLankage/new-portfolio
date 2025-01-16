import { motion } from 'framer-motion'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
}

export default function ProjectCard({ title, description, image, tags, liveUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group h-full"
    >
      {/* Card Content */}
      <motion.div 
        className="bg-white/40 dark:bg-rich-black/40 rounded-2xl overflow-hidden
                   border border-transparent hover:border-yinmn-blue/20 transition-all duration-300
                   flex flex-col h-full"
        whileHover={{ scale: 1.02 }}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-medium text-rich-black dark:text-platinum mb-2">
            {title}
          </h3>
          
          <p className="text-oxford-blue/80 dark:text-silver-lake/80 mb-4 flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className="px-3 py-1 text-sm font-medium rounded-full
                         bg-yinmn-blue/10 text-yinmn-blue
                         dark:bg-silver-lake/10 dark:text-silver-lake"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* View Project Button */}
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yinmn-blue dark:text-silver-lake
                     hover:text-oxford-blue dark:hover:text-platinum transition-colors
                     relative group/btn"
            whileHover={{ x: 5 }}
          >
            <motion.span
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-yinmn-blue/20 to-transparent
                       opacity-0 group-hover/btn:opacity-100 blur-lg transition-opacity"
              animate={{
                scale: isHovered ? 1.1 : 1,
                opacity: isHovered ? 0.8 : 0
              }}
            />
            <span className="relative">View Project</span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ x: isHovered ? 5 : 0 }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </motion.svg>
          </motion.a>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute -inset-[1px] bg-gradient-to-r from-yinmn-blue/20 to-transparent 
                     rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          animate={{
            opacity: isHovered ? 0.5 : 0
          }}
        />
      </motion.div>
    </motion.div>
  )
} 