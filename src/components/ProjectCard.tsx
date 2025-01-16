import { motion } from 'framer-motion'
import ProjectPreview from './ProjectPreview'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  tags: string[]
  liveUrl: string
}

export default function ProjectCard({ title, description, image, tags, liveUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="bg-white/40 dark:bg-rich-black/40 rounded-xl overflow-hidden
                 border border-transparent hover:border-yinmn-blue/20 transition-all duration-300"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <ProjectPreview
          url={liveUrl}
          fallbackImage={image}
          title={title}
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-medium text-oxford-blue dark:text-platinum">{title}</h3>
        <p className="text-slate-600 dark:text-silver-lake">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium rounded-full
                       bg-yinmn-blue/10 text-yinmn-blue
                       dark:bg-silver-lake/10 dark:text-silver-lake"
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-yinmn-blue dark:text-silver-lake
                   hover:text-oxford-blue dark:hover:text-platinum transition-colors
                   relative group/btn"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
    </motion.div>
  )
} 