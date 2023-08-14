'use client'
import { useState } from 'react'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { useTheme } from 'next-themes'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

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

  return (
    <header className='w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600'>
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='md:py-5 md:block'>
            <h2 className='test-2xl font-bold dark:text-white'>Chao, Long</h2>
          </div>
        </div>
        <div className='md:flex md:space-x-6 dark:text-white'>
          {NavItems.map((item, idx) => {
            return <a key={idx}>{item.label}</a>
          })}
          <button
            onClick={() =>
              setTheme(`${currentTheme === 'dark' ? 'light' : 'dark'}`)
            }
          >
            {currentTheme === 'dark' ? <RiSunLine /> : <RiMoonFill />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
