'use client'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowDown } from 'react-icons/hi'
import { handleClickScroll } from './Data'

export default function Hero() {
  return (
    <div className='mt-40 md:mt-60 px-6' id='home'>
      <div className='flex flex-col items-center justify-center gap-1 text-center md:text-left md:flex-row xl:w-[1200px]'>
        <Image
          className='rounded-full shadow-2xl hover:scale-105 duration-300'
          src='/Profile.jpeg'
          alt='me'
          width={300}
          height={300}
          priority={false}
        />
        <div className='md:px-24 flex flex-col gap-6 items-center md:items-start'>
          <div className='text-3xl md:text-6xl font-bold my-6'>
            Hi, I'm Chao
          </div>
          <div>
            I'm a skilled{' '}
            <span className='text-amber-600'>
              Frontend and Full Stack developer{' '}
            </span>
            based in Melbourne, passionate about crafting exceptional web
            experiences. With a focus on creating dynamic and functional
            websites, I thrive on bringing creative ideas to life through code.
            My expertise in frontend technologies, coupled with my proficiency
            in backend development, allows me to seamlessly bridge the gap
            between design and functionality.
          </div>
          <Link
            href='project'
            className='p-2 bg-amber-500 text-white rounded hover:scale-105 duration-300 hover:bg-amber-400 w-20 text-center'
          >
            Projects
          </Link>
        </div>
      </div>
      <div className='flex flex-row justify-center my-20'>
        <HiArrowDown
          className='cursor-pointer text-4xl animate-bounce'
          onClick={(event: any) => {
            handleClickScroll(event, 'about')
          }}
        />
      </div>
    </div>
  )
}
