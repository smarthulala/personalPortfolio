'use client'
import { useState, useEffect } from 'react'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { useTheme } from 'next-themes'
import Link from 'next/link'

interface NavItem {
  label: string
  page: string
}

const NavItems: Array<NavItem> = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Projects', page: 'projects' },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  return (
    <div
      className={`w-full mx-auto shadow fixed top-0 z-50 px-10 md:px-4 bg-white dark:bg-black dark:border-b dark:border-slate-500`}
    >
      <div className='justify-between py-4 md:items-center md:flex'>
        <div className='flex items-center justify-between text-2xl'>
          <h2 className='font-bold'>Chao, Long</h2>
          <button className='md:hidden' onClick={() => setNavbar(!navbar)}>
            {navbar ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
        <div
          className={`md:block transition-all transform duration-300 ${
            !navbar && 'hidden'
          }`}
        >
          <div className='gap-14 text-end space-y-4 pt-2 md:space-y-0 md:flex items-center justify-center'>
            {NavItems.map((item, idx) => {
              return (
                <Link
                  href={item.page}
                  key={idx}
                  className='hover:text-neutral-500 hover:scale-105 block'
                >
                  {item.label}
                </Link>
              )
            })}
            <button
              className={`rounded-3xl px-2 ${
                currentTheme !== 'dark'
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              } `}
              onClick={() => setTheme(`${theme === 'dark' ? 'light' : 'dark'}`)}
            >
              {currentTheme === 'dark' ? 'Light mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
