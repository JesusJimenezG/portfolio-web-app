'use client'
import { vcrOsdMono } from '../../../../styles/fonts'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'

const links = [
  { text: 'Twitter', href: 'https://twitter.com/Jesalfz' },
  { text: 'LinkedIn', href: 'https://www.linkedin.com/in/jesusjimenezg/' },
  { text: 'GitHub', href: 'https://github.com/JesusJimenezG' },
  { text: 'YouTube', href: 'https://www.youtube.com/@jesalfz' },
  { text: 'Discord', href: 'Al#5231' },
]

export const SocialMedia = () => {
  const isDiscord = (link: { text: string; href: string }) =>
    link.text.toLowerCase().includes('discord')

  const handleLink = (link: { text: string; href: string }) => {
    if (isDiscord(link)) {
      navigator.clipboard.writeText(link.href)
      toast.success('Copied Discord username to clipboard!')
    } else {
      window.open(link.href, '_blank')
    }
  }

  return (
    <section
      title="social media"
      className="m-auto text-center justify-center items-center"
    >
      <h2
        className={`${vcrOsdMono.className} font-mon tracking-wider uppercase text-xl font-medium text-white`}
      >
        Follow me on
      </h2>
      <ul className="mt-4 flex">
        {links.map((link, index) => (
          <li key={index} className="mx-6">
            <a onClick={() => handleLink(link)}>
              <i
                aria-hidden
                className={`fab fa-${link.text.toLowerCase()} fa-2x text-[#f29] hover:text-white cursor-pointer`}
              ></i>
            </a>
          </li>
        ))}
      </ul>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  )
}
