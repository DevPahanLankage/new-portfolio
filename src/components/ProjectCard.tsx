import { motion } from 'framer-motion'
import { scrollAnimation, standardViewport, hoverScale } from '../utils/animations'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  liveUrl: string
  image: string
}

export default function ProjectCard({ title, description, tags, liveUrl, image }: ProjectCardProps) {
  return (
    <motion.div
      className="relative bg-white/40 dark:bg-rich-black/40 rounded-xl shadow-lg overflow-hidden
                 border border-transparent hover:border-yinmn-blue/20 transition-all duration-300
                 group"
      variants={scrollAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={standardViewport}
      whileHover={hoverScale}
    >
      <div className="relative h-[250px] overflow-hidden">
        <motion.img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-cover object-center transition-transform duration-500
                   group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="relative p-6">
        <h3 className="text-xl font-semibold text-rich-black dark:text-platinum mb-2
                     group-hover:text-yinmn-blue dark:group-hover:text-silver-lake transition-colors">
          {title}
        </h3>
        <p className="text-oxford-blue/80 dark:text-silver-lake/80 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 text-sm font-medium text-yinmn-blue dark:text-silver-lake 
                       bg-yinmn-blue/10 dark:bg-silver-lake/10 rounded-full
                       hover:bg-yinmn-blue/20 dark:hover:bg-silver-lake/20 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <motion.a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-yinmn-blue dark:text-silver-lake 
                   hover:text-blue-700 dark:hover:text-silver transition-colors"
          whileHover={{ x: 5 }}
        >
          View Project
          <svg
            className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  )
} 