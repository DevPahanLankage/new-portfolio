import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
}

export default function ProjectCard({ title, description, image, tags, liveUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-white/50 dark:bg-rich-black/50 rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium tracking-tight text-rich-black dark:text-platinum mb-2">
          {title}
        </h3>
        <p className="text-oxford-blue dark:text-silver-lake mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium bg-yinmn-blue/10 dark:bg-yinmn-blue/20 text-yinmn-blue dark:text-silver-lake rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-yinmn-blue dark:text-silver-lake hover:text-oxford-blue dark:hover:text-platinum transition-colors"
          >
            Live Demo
            <ArrowUpRightIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  )
} 