import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {

  const EXPERIENCES = [
    {
      year: "2024 - Present",
      role: "MERN Stack Developer",
      company: "Sqilco",
      description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
      technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    },

  ];

  return (
    <div>
      <h1 className='my-20 text-center text-4xl'>Experience</h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>

            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </motion.div>

            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span></h6>

              <p className='mb-4 text-neutral-400'>{experience.description}</p>

              {experience.technologies.map((technology, index) => (
                <span className='mr-2 rounded border border-neutral-800 px-2 py-1 text-xs hover:bg-neutral-800 hover:text-purple-800' key={index}>{technology}</span>
              ))}
            </motion.div>

          </div>
        ))}
      </div>
    </div>
  )
}
