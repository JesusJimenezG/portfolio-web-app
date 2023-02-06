'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Stripes } from '../../home/components/Home'
import { dsDigital, vcrOsdMono } from '../../styles/fonts'

const routes = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'CV', href: '/cv' },
  { text: 'Contact', href: '/contact' },
]

export const Navigation = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }
  const isHome = pathname === '/home'

  return (
    <nav className="flex items-center justify-between lg:px-40 md:px-20 px-5 py-2">
      <div className="mt-2 absolute left-1/2 -translate-x-1/2 hover:z-50">
        <Stripes width="w-[35px]" height="h-[35px]" small={true} />
      </div>
      <div className="flex items-center">
        {/* <img src="/" alt="alt" className="w-12 h-12" /> */}
        <h1
          className={`${dsDigital.className} font-[] uppercase text-start lg:w-full md:w-full sm:w-full w-4/6 py-1 px-5 tracking-widest text-white lg:text-2xl text-xl z-50`}
        >
          <Link
            href="/"
            className="text-white hover:scale-50 hover:text-[#f29]"
          >
            {'JESUS JIMENEZ'}
          </Link>
        </h1>
      </div>
      <div
        className={`${vcrOsdMono.className} font-mono text-xl font-medium flex sm:hidden pr-5`}
      >
        <div
          className={`cursor-pointer ${isOpen ? 'z-50' : 'hover:z-50'}`}
          onClick={toggleNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className={`${
              isOpen ? 'hover:text-[#f29] hover:scale-110' : ''
            } fill-current text-white w-8 h-8`}
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </div>
      </div>
      <div
        className={`${vcrOsdMono.className} text-xl font-medium hidden sm:flex`}
      >
        {routes.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`ml-6 uppercase sm:ml-4  text-white ${
              isHome ? 'hover:z-10' : 'hover:text-[#f29]'
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div
        className={`fixed top-0 right-0 w-full h-screen transition-transform bg-black/80 backdrop-blur-md ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } sm:hidden z-10`}
      >
        <div
          className={`fixed top-1/4 right-0 items-center justify-center rounded-md p-8`}
        >
          <div
            className={`relative w-56 text-center rounded-lg shadow-lg transition ease-out duration-75`}
          >
            {routes.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                onClick={toggleNav}
                className={`${vcrOsdMono.className} block py-4 text-white scale-125 mb-10 text-2xl font-bold hover:text-[#f29] hover:scale-150`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
