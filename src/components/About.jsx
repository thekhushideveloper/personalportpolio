import React from 'react'
import ProfileImage from '../assets/IMG_0971-2.jpg';

export default function About() {
    return (
        <div className='pb-4'>
            <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>


            <div className='flex flex-wrap'>
                {/* Left Div */}
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-md h-[500px] w-[500px]' src={ProfileImage} alt="ProfileImage" />
                    </div>
                </div>

                {/* Right Div */}
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>I am a dedicated and MERN stack developer with a passion for creating
                            efficient and user-friendly web applications. With 3 years of professional experience, I have worked
                            with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB.
                            My journey in web development began with a deep curiosity for how things work, and it has evolved
                            into a career where I continuously strive to learn and adapt to new challenges. I thrive in
                            collaborative environments and enjoy solving complex problems to deliver high-quality solutions.
                            Outside of coding, I enjoy staying active, exploring new technologies, and contributing to
                            open-source projects.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
