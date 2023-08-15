'use client'
import { useState, useEffect } from 'react'
import { skills, skillCategories } from './Data'

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory)

  return (
    <div className='md:flex justify-center mb-10 w-screen gap-4 md:px-24 px-4'>
      <div className='md:w-1/3 text-center md:text-left'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ad rerum
        illum, atque ipsa similique blanditiis. Laudantium, repellendus
        voluptatum a totam necessitatibus quibusdam aperiam ut reprehenderit
        accusamus itaque saepe ab aspernatur omnis alias rerum nihil quidem
        possimus eum illo praesentium. Amet dicta id placeat sequi omnis
        similique qui illo modi. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Modi, quisquam? Harum omnis aut, itaque explicabo quod
        a iste, temporibus excepturi voluptas voluptatum dolore exercitationem
        quam blanditiis adipisci. Veniam odit similique ratione recusandae
        deleniti iure distinctio quo aliquid? Ducimus saepe eveniet ab ipsa,
        natus aspernatur dolorem sapiente iusto est sint neque.
      </div>
      <div className='flex flex-col gap-4 md:w-1/2'>
        <div className='md:flex justify-between md:my-4'>
          <div className='my-6 md:my-0 text-2xl font-bold'>My Skills:</div>
          {skillCategories.map((category, idx) => {
            return (
              <button
                className='focus:bg-amber-500 px-2 rounded hover:bg-amber-500 font-bold'
                key={idx}
                onClick={() => {
                  setSelectedCategory(category.label)
                }}
              >
                {category.label}
              </button>
            )
          })}
        </div>
        <div className='flex flex-wrap justify-center md:justify-start gap-2'>
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className='bg-amber-500 rounded hover:scale-105 duration-300 text-center p-2'
            >
              {skill.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
