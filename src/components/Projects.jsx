import React from 'react'
import project1 from '../assets/projects/Blogger.jpg'
import project2 from '../assets/projects/Shopping Cart.png'
import project3 from '../assets/Screenshot 2024-11-25 at 3.14.34 PM.png'
import {motion} from 'framer-motion'

export default function Projects() {

  const PROJECTS = [
    {
      title: "Blogger",
      image: project1,
      description:
        "MERN Developer, Tech Stack: ReactJS, Express, JavaScript, NodeJS, MongoDB. Create Blogger library website. Where Users give review on Blogger. Here use JWT authentication for protected APIs. Like library-Blogger, etc.",
      technologies: ["React", "Tailwind", "Express", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      title: "Shopping Cart",
      image: project2,
      description:
        "MERN Developer, Tech Stack: JavaScript, Node, MongoDB and React. Created an Shopping card website's backend part with multiple APIs based on products, users, carts and orders. Here use JWT authentication for protected APIs and also use AWS. Like Amazon and Flipkart etc.",
      technologies: ["React", "Tailwind", "Express", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["HTML", "CSS", "React", "Tailwnd"],
    },
  ];

  return (
    <div>
      <motion.h1 
      whileInView={{opacity:1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className='my-20 text-center text-4xl'>Projects</motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>

            {/* Left Div */}
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full lg:w-1/4'>
              <img className='mb-6 rounded h-[200px] md:w-[250px]' src={project.image}  alt={project.title} />
            </motion.div>

            {/* Right Div */}
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>{project.title}</h6>
            <p className='mb-4 text-neutral-400'>{project.description}</p>

            {project.technologies.map((technology, index) => (
                <span className='mr-2 rounded border border-neutral-800 px-2 py-1 text-xs hover:bg-neutral-800 hover:text-purple-800' key={index}>{technology}</span>
            ))}
            

            </motion.div>
          </div>
        ))}
      </div>

    </div>
  )
}
