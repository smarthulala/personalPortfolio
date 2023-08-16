import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'

const projects = [
  {
    name: 'CrankBit, Automotive SaaS Platform',
    description:
      'Boosting automotive mechanics efficiency, this website aids in creating streamlined repair forms, optimizing processes for enhanced workflow, and overall productivity improvement.',
    image: '/thankfulthoughts.png',
    github: 'https://github.com/CRANKBIT',
    link: 'https://thankfulthoughts.io/',
    stack: [
      { title: 'Agile development environment' },
      { title: 'problem-solving' },
      { title: 'Used Redux Toolkit Query to fetch data' },
      { title: 'Collaborative web page UI design' },
      { title: 'React, Tailwind and TypeScript' },
      { title: 'MongoDb, Mongoose' },
      { title: 'Created the database schema, model, controller' },
      { title: 'Reviewd and made changes upon pull requests on git' },
      { title: 'Jira and GitHub' },
      { title: '' },
      { title: '' },
    ],
  },
  {
    name: 'PlatoIO',
    description: 'PlatoIO is a to do list app that built using the PERN stack.',
    image: '/platoio.png',
    github: 'https://github.com/hqasmei/platoio',
    link: 'https://platoio.com/register',
  },
  {
    name: 'Kator Family Photos',
    description:
      'Kator Family Photos is a photos and video digitization service in the LA area.',
    image: '/familyphotos.png',
    github: 'https://github.com/hqasmei/katorfamilyphotos',
    link: 'https://katorfamilyphotos.com/',
  },
]

const Projects = () => {
  return (
    <div className='px-60 mb-20'>
      <div className='my-10 text-center font-bold text-6xl'>Projects</div>
      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx} className='flex flex-col md:flex-row md:space-x-12'>
              <div className='md:w-1/2'>
                <Link href={project.link}>
                  <Image
                    src={project.image}
                    alt=''
                    width={1000}
                    height={1000}
                    className='rounded-xl shadow-xl dark:md:shadow-amber-500/50 hover:opacity-70'
                  />
                </Link>
              </div>
              <div className='mt-8 md:w-1/2'>
                <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                <p className='text-xl leading-7 mb-4  dark:text-neutral-400'>
                  {project.description}
                </p>
                <div className='flex gap-4 py-4'>
                  <Link href={project.github} target='_blank'>
                    <BsGithub
                      size={30}
                      className='hover:-translate-y-1 transition-transform cursor-pointer'
                    />
                  </Link>
                  <Link href={project.link} target='_blank'>
                    <BsArrowUpRightSquare
                      size={30}
                      className='hover:-translate-y-1 transition-transform cursor-pointer'
                    />
                  </Link>
                </div>
                <div>
                  Highlights:
                  {project.stack &&
                    project.stack.map((item, index) => (
                      <ul key={index} className='text-sm my-2'>
                        {item.title}
                      </ul>
                    ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
