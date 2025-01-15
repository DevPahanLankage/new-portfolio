import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import ProjectCard from '../components/ProjectCard'
import ContactForm from '../components/ContactForm'
import TiltCard from '../components/TiltCard'
import AnimatedButton from '../components/AnimatedButton'
import { floatingAnimation } from '../utils/animations'

const projects = [
  {
    title: "Sinhala Lyrics",
    description: "A web application for Sinhala song lyrics with advanced search capabilities and a modern user interface.",
    image: "/projects/sinhala-lyrics.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://sinhalalyrics.vercel.app"
  },
  {
    title: "Sinhala Fonts",
    description: "A comprehensive collection of Sinhala fonts with preview and download capabilities.",
    image: "/projects/sinhala-fonts.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://sinhalafonts.vercel.app"
  },
  {
    title: "Sinhala Unicode Converter",
    description: "A tool to convert legacy Sinhala text to Unicode with real-time preview and batch conversion support.",
    image: "/projects/sinhala-unicode.jpg",
    tags: ["React", "TypeScript", "Material-UI"],
    liveUrl: "https://sinhalaunicode.vercel.app"
  }
]

const skills = [
  {
    category: "Frontend Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind"]
  },
  {
    category: "Backend Development",
    items: ["Python", "Node.js", "PHP", "MySQL", "TypeScript"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "GitHub", "VS Code"]
  }
]

export default function Home() {
  const techStack = [
    { icon: FaReact, name: 'React' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: FaPython, name: 'Python' }
  ]

  return (
    <div className="space-y-32 py-24">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[calc(100vh-8rem)] flex flex-col justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Test Background */}
          <div className="absolute inset-0 bg-black" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl"
        >
          <motion.h1 
            className="text-7xl font-medium tracking-tight mb-8 text-rich-black dark:text-platinum"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hi, I'm{' '}
            <motion.span 
              className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-pink-500 via-purple-500 via-blue-500 to-red-500 animate-name-gradient"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              Pahan Lankage
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-yinmn-blue rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl font-normal leading-relaxed text-oxford-blue dark:text-silver-lake mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I collaborate with startups to bring their visions to life, building dynamic and engaging digital products through full-stack development, blending creativity on the front end with robust functionality on the back end.
          </motion.p>
          
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <AnimatedButton
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              variant="primary"
            >
              View My Work
            </AnimatedButton>
            
            <AnimatedButton
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="secondary"
            >
              Contact Me
            </AnimatedButton>
          </motion.div>
        </motion.div>

        {/* Tech Stack Icons with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-8"
        >
          {techStack.map(({ icon: Icon, name }, index) => (
            <motion.div
              key={name}
              className="group relative"
              animate={floatingAnimation}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.3 }
              }}
              transition={{
                delay: index * 0.2,
                ...floatingAnimation.transition,
              }}
            >
              <Icon className="w-8 h-8 text-oxford-blue/50 dark:text-silver-lake/50 
                             group-hover:text-yinmn-blue dark:group-hover:text-silver-lake 
                             transition-all duration-300" />
              <motion.span 
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm 
                           text-oxford-blue/50 dark:text-silver-lake/50
                           opacity-0 group-hover:opacity-100 transition-all duration-300
                           whitespace-nowrap"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {name}
              </motion.span>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
                           rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-medium tracking-tight mb-8 text-rich-black dark:text-platinum">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-oxford-blue dark:text-silver-lake">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="leading-relaxed space-y-6"
            >
              <span className="block">
                I'm a dedicated full-stack developer with a passion for creating seamless digital experiences. Coding is more than just a job for me—it's a craft I'm constantly refining. With expertise in HTML/CSS, C#, Python, Git, MySQL, Javascript, I love tackling a wide variety of projects, whether it's breathing life into a creative design, building software solutions, or diving into the intricacies of database management.
              </span>
              
              <span className="block">
                My development approach is enhanced by cutting-edge AI tools and technologies, allowing me to deliver solutions that are not just efficient, but revolutionary. I leverage AI for code optimization, automated testing, and intelligent debugging, ensuring faster development cycles without compromising on quality. This modern approach, combined with traditional development expertise, enables me to build robust, scalable applications with remarkable speed and precision.
              </span>

              <span className="block">
                My problem-solving approach is thoughtful and strategic: I take time to fully understand the challenge at hand, break it down into manageable parts, and build solutions step by step. I'm a strong believer in collaboration, and I thrive in team environments where ideas flow freely. Patience and perseverance are my strengths—I won't stop working until I've hit my target for the day.
              </span>

              <span className="block">
                Outside of coding, I keep myself energized by hitting the gym, vibing to tech house and progressive music, and enjoying a night out with friends. This balance of technical focus and personal interests fuels my creativity and drives me to continuously improve and innovate in the ever-evolving world of software development.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/50 dark:bg-rich-black/50 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-medium tracking-tight mb-4 text-rich-black dark:text-platinum">
                Development Approach
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0" />
                  <span>AI-Enhanced Development: Leveraging cutting-edge AI tools for code optimization and intelligent solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0" />
                  <span>Rapid Prototyping: Quick iteration and development cycles without compromising quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0" />
                  <span>Strategic Problem-Solving: Methodical approach to breaking down and solving complex challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0" />
                  <span>Collaborative Mindset: Strong team player with excellent communication skills</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-medium tracking-tight mb-8 text-rich-black dark:text-platinum">
            Technical Skills
          </h2>
          
          <div className="space-y-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/30 dark:bg-rich-black/30 rounded-xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-medium text-yinmn-blue dark:text-silver-lake mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-white/30 dark:bg-rich-black/30 
                               text-oxford-blue dark:text-silver-lake text-base font-medium
                               border border-silver-lake/10 hover:border-yinmn-blue/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Timeline Section */}
      <section id="education" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-medium tracking-tight mb-8 text-rich-black dark:text-platinum">
            Education
          </h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative pl-8 border-l-2 border-yinmn-blue dark:border-silver-lake"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-yinmn-blue dark:bg-silver-lake" />
              <div className="bg-white/30 dark:bg-rich-black/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-medium text-rich-black dark:text-platinum">
                    Certificate in Software Engineering
                  </h3>
                  <span className="text-sm font-medium text-yinmn-blue dark:text-silver-lake">
                    March 2024 - November 2024
                  </span>
                </div>
                <p className="text-base text-oxford-blue dark:text-silver-lake mb-2">
                  NIBM - Colombo 07
                </p>
                <p className="text-sm text-oxford-blue/80 dark:text-silver-lake/80">
                  Specialized certification program focusing on advanced software development methodologies, modern programming practices, and industry-standard tools. Enhancing practical skills through hands-on projects and real-world applications.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative pl-8 border-l-2 border-yinmn-blue dark:border-silver-lake"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-yinmn-blue dark:bg-silver-lake" />
              <div className="bg-white/30 dark:bg-rich-black/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-medium text-rich-black dark:text-platinum">
                    Foundation Degree in Computer Software Engineering
                  </h3>
                  <span className="text-sm font-medium text-yinmn-blue dark:text-silver-lake">
                    February 2023 - December 2023
                  </span>
                </div>
                <p className="text-base text-oxford-blue dark:text-silver-lake mb-2">
                  SLIIT City University
                </p>
                <p className="text-sm text-oxford-blue/80 dark:text-silver-lake/80">
                  Currently pursuing my foundation degree with a focus on computer software engineering, building a strong foundation in programming and software development principles.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative pl-8 border-l-2 border-yinmn-blue dark:border-silver-lake"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-yinmn-blue dark:bg-silver-lake" />
              <div className="bg-white/30 dark:bg-rich-black/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-medium text-rich-black dark:text-platinum">
                    Ordinary Level (O/Ls)
                  </h3>
                  <span className="text-sm font-medium text-yinmn-blue dark:text-silver-lake">
                    2021 - 2022
                  </span>
                </div>
                <p className="text-base text-oxford-blue dark:text-silver-lake mb-2">
                  Lyceum International School
                </p>
                <p className="text-sm text-oxford-blue/80 dark:text-silver-lake/80">
                  Completed Cambridge O/Ls with a specialization in Computer Science, establishing a strong academic foundation in technology and computing.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-medium tracking-tight mb-8 text-rich-black dark:text-platinum">
            Certifications
          </h2>

          <div className="space-y-6">
            {/* IBM Data Science Track */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/30 dark:bg-rich-black/30 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-medium text-yinmn-blue dark:text-silver-lake mb-4">
                IBM Data Science Specialization
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0" />
                  <span>Data Science Foundations - Level 1</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0" />
                  <span>Data Science Foundations - Level 2 (V2)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0" />
                  <span>Python for Data Science</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0" />
                  <span>Data Analysis Using Python</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0" />
                  <span>Data Visualization Using Python</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0" />
                  <span>Applied Data Science with Python - Level 2</span>
                </div>
              </div>
            </motion.div>

            {/* IBM Additional Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/30 dark:bg-rich-black/30 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-medium text-yinmn-blue dark:text-silver-lake mb-4">
                Additional IBM Certifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0" />
                  <span>Big Data Foundations - Level 1</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0" />
                  <span>Build Your Own Chatbot - Level 1</span>
                </div>
              </div>
            </motion.div>

            {/* Other Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/30 dark:bg-rich-black/30 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-medium text-yinmn-blue dark:text-silver-lake mb-4">
                Additional Certifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0" />
                  <span>Theoretical Understanding of Python Core - Sololearn (CT-FJTXTYWC)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-medium tracking-tight mb-8 text-rich-black dark:text-platinum">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-medium tracking-tight mb-8 text-rich-black dark:text-platinum">
            Get in Touch
          </h2>
          
          <div className="bg-white/50 dark:bg-rich-black/50 rounded-2xl p-8 backdrop-blur-sm">
            <ContactForm />
          </div>
        </motion.div>
      </section>
    </div>
  )
} 