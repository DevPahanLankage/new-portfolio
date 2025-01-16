import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaPhp } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiTailwindcss, SiMysql, SiChatbot } from 'react-icons/si'
import { VscCode, VscCopilot, VscTerminalCmd } from 'react-icons/vsc'
import ProjectCard from '../components/ProjectCard'
import ContactForm from '../components/ContactForm'
import AnimatedButton from '../components/AnimatedButton'
import { floatingAnimation } from '../utils/animations'

const projects = [
  {
    title: "Elevate360",
    description: "A results-driven marketing agency website focused on enhancing brands through innovative strategies and customized solutions. Features social media campaigns, website development, and digital marketing services.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://www.elevate360.agency"
  },
  {
    title: "Aspire Volonte",
    description: "A comprehensive insurance agency website offering various insurance solutions with detailed service information, quote calculators, and appointment scheduling.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://www.aspirevolonte.com"
  },
  {
    title: "Real Estate Website",
    description: "A modern real estate platform featuring property listings, advanced search functionality, and interactive property viewing. Built with a focus on user experience and responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://real-estate-website-devpahanlankages-projects.vercel.app"
  },
  {
    title: "Industri Nightclub",
    description: "A responsive, modern website developed for Colombo's premier nightclub. Built with HTML, CSS, and JavaScript, featuring elegant design with event listings, VIP table bookings, and venue hire services. Includes dynamic event calendars and an immersive gallery showcase.",
    tags: ["React", "JavaScript", "CSS", "Responsive Design"],
    liveUrl: "https://devpahanlankage.github.io/Industri-Website"
  },
  {
    title: "Via Roma",
    description: "A luxury bathware supplier website featuring premium products, showroom locations, and an elegant product showcase system. Includes interactive product galleries and location services.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://via-roma-client.vercel.app"
  }
]

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: FaReact },
      { name: "Tailwind", icon: SiTailwindcss }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Python", icon: FaPython },
      { name: "Node.js", icon: FaNodeJs },
      { name: "PHP", icon: FaPhp },
      { name: "MySQL", icon: SiMysql },
      { name: "TypeScript", icon: SiTypescript }
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscCode },
      { name: "ChatGPT", icon: SiChatbot },
      { name: "Cursor", icon: VscTerminalCmd },
      { name: "GitHub Copilot", icon: VscCopilot }
    ]
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
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yinmn-blue/20 via-purple-500/10 to-pink-500/20 dark:from-yinmn-blue/30 dark:via-purple-500/20 dark:to-pink-500/30 animate-gradient-xy" />
          
          {/* Animated Shapes */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-[20%] w-64 h-64 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-[20%] w-64 h-64 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          {/* Grid Pattern with Animation */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.07]" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-yinmn-blue/5 to-transparent"
              animate={{
                opacity: [0, 0.5, 0],
                y: [0, 100, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <motion.h1 
                className="text-7xl font-medium tracking-tight mb-8 text-rich-black dark:text-platinum"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Hi, I'm{' '}
                <motion.span 
                  className="relative inline-block font-['Geist_Sans'] gradient-text"
                  style={{ fontWeight: 120 }}
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
                Currently serving as the web developer at Elevate360, a results-driven marketing agency, I collaborate with startups to bring their visions to life, building dynamic and engaging digital products through full-stack development, blending creativity on the front end with robust functionality on the back end.
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

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="relative w-[400px] h-[600px] rounded-2xl overflow-hidden">
                <motion.img
                  src="/src/assets/picture1.jpg"
                  alt="Pahan Lankage"
                  className="w-full h-full object-cover object-[80%_center]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Decorative Elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-yinmn-blue/20 via-purple-500/20 to-pink-500/20 rounded-3xl -z-10 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-yinmn-blue/30 to-purple-500/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Icons */}
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
                delay: index * 0.05,
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
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-4xl font-medium tracking-tight mb-8 text-rich-black dark:text-platinum"
          >
            About Me
          </motion.h2>
          
          <div className="space-y-6 text-lg text-oxford-blue dark:text-silver-lake">
            {/* About Text Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="leading-relaxed space-y-6"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="block"
              >
                I'm a dedicated full-stack developer with a passion for creating seamless digital experiences. Currently, I serve as the web developer at Elevate360, a results-driven marketing agency, where I lead the development of innovative web solutions and digital products. With expertise in HTML/CSS, C#, Python, Git, MySQL, Javascript, I love tackling a wide variety of projects, whether it's breathing life into a creative design, building software solutions, or diving into the intricacies of database management.
              </motion.span>

              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="block"
              >
                At Elevate360, I collaborate closely with the creative and marketing teams to develop and maintain client websites, implement digital marketing solutions, and ensure seamless user experiences across all platforms. My role involves translating design concepts into fully functional websites, optimizing performance, and implementing modern web technologies to drive business growth.
              </motion.span>

              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="block"
              >
                My development approach is enhanced by cutting-edge AI tools and technologies, allowing me to deliver solutions that are not just efficient, but revolutionary. I leverage AI for code optimization, automated testing, and intelligent debugging, ensuring faster development cycles without compromising on quality. This modern approach, combined with traditional development expertise, enables me to build robust, scalable applications with remarkable speed and precision.
              </motion.span>

              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="block"
              >
                My problem-solving approach is thoughtful and strategic: I take time to fully understand the challenge at hand, break it down into manageable parts, and build solutions step by step. I'm a strong believer in collaboration, and I thrive in team environments where ideas flow freely. Patience and perseverance are my strengths—I won't stop working until I've hit my target for the day.
              </motion.span>

              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="block"
              >
                Outside of coding, I keep myself energized by hitting the gym, vibing to tech house and progressive music, and enjoying a night out with friends. This balance of technical focus and personal interests fuels my creativity and drives me to continuously improve and innovate in the ever-evolving world of software development.
              </motion.span>

              {/* Development Approach Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.3, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/40 dark:bg-rich-black/40 rounded-2xl p-6
                         border border-transparent hover:border-yinmn-blue/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-medium tracking-tight mb-4 text-rich-black dark:text-platinum">
                  Development Approach
                </h3>
                <ul className="space-y-3">
                  {[
                    "AI-Enhanced Development: Leveraging cutting-edge AI tools for code optimization and intelligent solutions",
                    "Rapid Prototyping: Quick iteration and development cycles without compromising quality",
                    "Strategic Problem-Solving: Methodical approach to breaking down and solving complex challenges",
                    "Collaborative Mindset: Strong team player with excellent communication skills"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-200px" }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <motion.span 
                        className="w-2 h-2 mt-2 bg-yinmn-blue rounded-full flex-shrink-0 group-hover:scale-125"
                        transition={{ duration: 0.2 }}
                      />
                      <span className="group-hover:text-yinmn-blue dark:group-hover:text-silver-lake transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-4xl font-medium tracking-tight mb-8 text-rich-black dark:text-platinum"
          >
            Technical Skills
          </motion.h2>
          
          <div className="space-y-6">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.3, delay: 0.2 + groupIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/40 dark:bg-rich-black/40 rounded-xl p-6
                         border border-transparent hover:border-yinmn-blue/20 transition-all duration-300"
              >
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-200px" }}
                  transition={{ duration: 0.3, delay: 0.3 + groupIndex * 0.1 }}
                  className="text-2xl font-medium text-yinmn-blue dark:text-silver-lake mb-4"
                >
                  {skillGroup.category}
                </motion.h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-200px" }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.4 + groupIndex * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [-1, 1, -1, 0],
                        transition: { duration: 0.3 }
                      }}
                      className="relative group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-yinmn-blue/20 to-yinmn-blue/0 
                                     rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative px-4 py-2 rounded-lg bg-white/40 dark:bg-rich-black/40 
                                     text-oxford-blue dark:text-silver-lake text-base font-medium
                                     border border-silver-lake/10 group-hover:border-yinmn-blue/30 
                                     group-hover:text-yinmn-blue dark:group-hover:text-silver-lake
                                     transition-all duration-300 z-10 flex items-center gap-2">
                        <skill.icon className="w-4 h-4" />
                        {skill.name}
                      </span>
                    </motion.div>
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
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-4xl font-medium tracking-tight mb-8 text-rich-black dark:text-platinum"
          >
            Education
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="relative pl-8 border-l-2 border-yinmn-blue dark:border-silver-lake"
            >
              <motion.div 
                className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-yinmn-blue dark:bg-silver-lake"
                whileInView={{
                  scale: [1, 1.5, 1],
                  transition: { duration: 0.5, delay: 0.2 }
                }}
              />
              <motion.div 
                className="bg-white/40 dark:bg-rich-black/40 rounded-xl p-6
                          border border-transparent hover:border-yinmn-blue/20 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <motion.h3 
                    className="text-xl font-medium text-rich-black dark:text-platinum"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Certificate in Software Engineering
                  </motion.h3>
                  <motion.span 
                    className="text-sm font-medium text-yinmn-blue dark:text-silver-lake"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    March 2024 - November 2024
                  </motion.span>
                </div>
                <motion.p 
                  className="text-base text-oxford-blue dark:text-silver-lake mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  NIBM - Colombo 07
                </motion.p>
                <motion.p 
                  className="text-sm text-oxford-blue/80 dark:text-silver-lake/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Specialized certification program focusing on advanced software development methodologies, modern programming practices, and industry-standard tools. Enhancing practical skills through hands-on projects and real-world applications.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* SLIIT City University */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="relative pl-8 border-l-2 border-yinmn-blue dark:border-silver-lake"
            >
              <motion.div 
                className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-yinmn-blue dark:bg-silver-lake"
                whileInView={{
                  scale: [1, 1.5, 1],
                  transition: { duration: 0.5, delay: 0.4 }
                }}
              />
              <motion.div 
                className="bg-white/40 dark:bg-rich-black/40 rounded-xl p-6
                          border border-transparent hover:border-yinmn-blue/20 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <motion.h3 
                    className="text-xl font-medium text-rich-black dark:text-platinum"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Foundation Degree in Computer Software Engineering
                  </motion.h3>
                  <motion.span 
                    className="text-sm font-medium text-yinmn-blue dark:text-silver-lake"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    February 2023 - December 2023
                  </motion.span>
                </div>
                <motion.p 
                  className="text-base text-oxford-blue dark:text-silver-lake mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  SLIIT City University
                </motion.p>
                <motion.p 
                  className="text-sm text-oxford-blue/80 dark:text-silver-lake/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Currently pursuing my foundation degree with a focus on computer software engineering, building a strong foundation in programming and software development principles.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Lyceum International School */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="relative pl-8 border-l-2 border-yinmn-blue dark:border-silver-lake"
            >
              <motion.div 
                className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-yinmn-blue dark:bg-silver-lake"
                whileInView={{
                  scale: [1, 1.5, 1],
                  transition: { duration: 0.5, delay: 0.6 }
                }}
              />
              <motion.div 
                className="bg-white/40 dark:bg-rich-black/40 rounded-xl p-6
                          border border-transparent hover:border-yinmn-blue/20 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <motion.h3 
                    className="text-xl font-medium text-rich-black dark:text-platinum"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Ordinary Level (O/Ls)
                  </motion.h3>
                  <motion.span 
                    className="text-sm font-medium text-yinmn-blue dark:text-silver-lake"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    2021 - 2022
                  </motion.span>
                </div>
                <motion.p 
                  className="text-base text-oxford-blue dark:text-silver-lake mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  Lyceum International School
                </motion.p>
                <motion.p 
                  className="text-sm text-oxford-blue/80 dark:text-silver-lake/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  Completed Cambridge O/Ls with a specialization in Computer Science, establishing a strong academic foundation in technology and computing.
                </motion.p>
              </motion.div>
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
              className="bg-white/40 dark:bg-rich-black/40 rounded-xl p-6"
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
              className="bg-white/40 dark:bg-rich-black/40 rounded-xl p-6"
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
              className="bg-white/40 dark:bg-rich-black/40 rounded-xl p-6"
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
          
          
          <div className="space-y-8">
          

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/40 dark:bg-rich-black/40 rounded-2xl p-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
} 