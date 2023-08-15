import React from 'react'
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className='w-screen border bg-neutral-200'></div>
      <div className='md:px-40 py-4 flex flex-col gap-2 text-neutral-900 md:flex-row md:justify-end'>
        <div className='flex items-center justify-center dark:text-neutral-100'>
          © 2023 Chao Long<a href='/' className='hover:underline'></a>
        </div>
        <div className='flex flex-row items-center justify-center gap-2 mb-2'>
          <a href='/' rel='noreferrer' target='_blank'>
            <AiOutlineGithub
              className='hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100'
              size={30}
            />
          </a>
          <a href='/' rel='noreferrer' target='_blank'>
            <AiOutlineLinkedin
              className='hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100'
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
