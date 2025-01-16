import { useState } from 'react'
import Microlink from '@microlink/react'
import { motion } from 'framer-motion'

interface ProjectPreviewProps {
  url: string
  fallbackImage?: string
  title: string
}

export default function ProjectPreview({ url, fallbackImage, title }: ProjectPreviewProps) {
  const [previewError, setPreviewError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  if (previewError && fallbackImage) {
    return (
      <motion.img
        src={fallbackImage}
        alt={`${title} preview`}
        className="w-full h-full object-cover rounded-t-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    )
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <motion.div 
          className="absolute inset-0 bg-white/40 dark:bg-rich-black/40 rounded-t-xl flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative">
            {/* Pulse animation */}
            <motion.div
              className="absolute inset-0 rounded-full bg-yinmn-blue/30 dark:bg-silver-lake/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.2, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Loading text */}
            <motion.div
              className="relative px-4 py-2 text-sm font-medium text-yinmn-blue dark:text-silver-lake"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Generating Preview...
            </motion.div>
          </div>
        </motion.div>
      )}
      
      <Microlink
        url={url}
        size="large"
        className="w-full rounded-t-xl overflow-hidden"
        media={{
          width: 1200,
          height: 630,
        }}
        loading="lazy"
        setData={{
          screenshot: {
            waitFor: 1000,
            element: '#__next',
            type: 'jpeg',
            fullPage: false,
          }
        }}
        onError={() => {
          setPreviewError(true)
          setIsLoading(false)
        }}
        onSuccess={() => setIsLoading(false)}
      />
    </div>
  )
} 