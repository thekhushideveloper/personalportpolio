import React from 'react'
import project1 from '../assets/projects/Blogger.jpg'
import project2 from '../assets/projects/Shopping Cart.png'
import project3 from '../assets/Screenshot 2024-11-25 at 3.14.34 PM.png'
import project4 from '../assets/projects/Products Management.jpeg'
import project5 from '../assets/projects/Book Management.png'

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
    {
      title: "Products Management",
      image: project4,
      description:
        "Backend Developer, Tech Stack: JavaScript, Node, MongoDB. Created an eCommerce website's backend part with multiple APIs based on products, users, carts and orders. Here use JWT authentication for protected APIs and also use AWS. Like Amazon and Flipkart etc.",
      technologies: ["Nodejs", "Express", "MongoDB"],
    },
    {
      title: "Book Management",
      image: project5,
      description:
        "Backend Developer, Tech Stack: JavaScript, NodeJs, MongoDB. Create books library website where users can give review on books. Here use JWT authentication for protected APIs. Like library- management, etc.",
      technologies: ["Nodejs", "Express", "MongoDB"],
    },
  ];

  return (
    <div>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>

            {/* Left Div */}
            <div className='w-full lg:w-1/4'>
              <img className='mb-6 rounded' src={project.image} width={200} height={200} alt={project.title} />
            </div>

            {/* Right Div */}
            <div className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>{project.title}</h6>
            <p className='mb-4 text-neutral-400'>{project.description}</p>

            {project.technologies.map((technology, index) => (
                <span className='mr-2 rounded border border-neutral-800 px-2 py-1 text-xs hover:bg-neutral-800 hover:text-purple-800' key={index}>{technology}</span>
            ))}
            

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
