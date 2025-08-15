import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 80 },
    { name: 'Node.js', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'TypeScript', level: 50 },
    { name: 'MongoDB', level: 75 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
            I love turning ideas into reality through clean, efficient code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I started my coding journey with a curiosity to build things that make a difference. 
                From my first "Hello World" to building full-stack applications, every step has been 
                a learning experience.
              </p>
              <p>
                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have 
                experience with modern tools and frameworks. My goal is to create applications 
                that are not only functional but also provide an excellent user experience.
              </p>
              <p>
                When I'm not coding, you can find me solving problems on LeetCode, contributing 
                to open-source projects, or exploring new technologies to stay ahead of the curve.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Skills & Technologies</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {skills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-primary-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-600 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-primary-400 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About 