'use client'

import Link from 'next/link'
import { Stripes } from '../components/home/Home'
import { vcrOsdMono } from '../styles/fonts'

const routes = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  // { text: 'Contact', href: '/contact' },
]

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between sm:px-20 lg:px-40 px-5 py-2">
      <div className="mt-2 absolute left-1/2 -translate-x-1/2">
        <Stripes width="w-[35px]" height="h-[35px]" small={true} />
      </div>
      <div className="flex items-center">
        {/* <img src="/" alt="alt" className="w-12 h-12" /> */}
        <h1
          className={`${vcrOsdMono.className} tracking-widest font-mono text-white font-medium lg:text-2xl text-xl`}
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
        className={`${vcrOsdMono.className} font-mono text-xl font-medium flex`}
      >
        {routes.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="ml-6 text-white hover:z-10"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  )
}
