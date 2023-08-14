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

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  console.log(theme)
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (currentTheme === 'dark') {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return (
    <header className={`w-full mx-auto shadow fixed top-0 z-50 px-10 md:px-4 `}>
      <div className='justify-between py-4 md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between text-2xl'>
            <div>
              <h2 className='font-bold'>Chao, Long</h2>
            </div>
            <div className='md:hidden'>
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose /> : <IoMdMenu />}
              </button>
            </div>
          </div>
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
                  className='hover:text-neutral-500  block lg:inline-block'
                >
                  {item.label}
                </Link>
              )
            })}
            <button
              className={`text-2xl  p-1 ${
                theme !== 'dark'
                  ? 'bg-black text-white rounded-3xl '
                  : 'text-amber-500'
              } `}
              onClick={() => setTheme(`${theme === 'dark' ? 'light' : 'dark'}`)}
            >
              {theme === 'dark' ? <RiSunLine /> : <RiMoonFill />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
