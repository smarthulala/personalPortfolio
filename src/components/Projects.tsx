import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import { projects } from './Data'

const Projects = () => {
  return (
    <div className='px-10 md:px-60 mb-20' id='projects'>
      <div className='my-10 text-center font-bold text-6xl'>Projects</div>
      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx} className='flex flex-col md:flex-row md:space-x-12'>
              <div className='md:w-1/2'>
                <Link href={project.link}>
                  <Image
                    src={project.image}
                    alt={project.description}
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
