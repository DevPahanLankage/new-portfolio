import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-medium tracking-tight mb-8 text-rich-black dark:text-platinum">
        About Me
      </h1>
      
      <div className="space-y-6 text-lg text-oxford-blue dark:text-silver-lake">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="leading-relaxed"
        >
          I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences. My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a professional pursuit of crafting elegant solutions to complex problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/50 dark:bg-rich-black/50 rounded-2xl p-6 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-medium tracking-tight mb-4 text-rich-black dark:text-platinum">
            Skills & Expertise
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yinmn-blue rounded-full" />
              Frontend Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yinmn-blue rounded-full" />
              Backend Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yinmn-blue rounded-full" />
              UI/UX Design
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yinmn-blue rounded-full" />
              Database Management
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/50 dark:bg-rich-black/50 rounded-2xl p-6 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-medium tracking-tight mb-4 text-rich-black dark:text-platinum">
            Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-rich-black dark:text-platinum">Senior Developer</h3>
              <p className="text-oxford-blue dark:text-silver-lake">2020 - Present</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-rich-black dark:text-platinum">Full Stack Developer</h3>
              <p className="text-oxford-blue dark:text-silver-lake">2018 - 2020</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
} 