'use client'
import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { lora, vcrOsdMono } from '../styles/fonts'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [sending, setSending] = useState(false)

  const { name, email, subject, message } = formData

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = async () => {
    let json = JSON.stringify(formData)
    const { success } = await (
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: json,
      })
    ).json()
    if (success) {
      toast('Message sent. Thanks for getting in touch!')
      setSending(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setSending(true)
    sendEmail()
  }

  return (
    <div className="flex lg:w-4/12 w-2/4 h-screen m-auto justify-center items-center">
      <div className="cotainer h-auto w-full my-auto">
        <h2
          className={`${vcrOsdMono.className} uppercase tracking-widest text-3xl font-medium text-center text-white mb-8 hover:text-[#f29]`}
        >
          Contact Me
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className={`${lora.className} text-lg block font-medium text-white mb-2`}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className="border bg-black text-white p-2 w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className={`${lora.className} text-lg block font-medium text-white mb-2`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="border bg-black text-white p-2 w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className={`${lora.className} text-lg block font-medium text-white mb-2`}
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={handleChange}
              className="border bg-black text-white p-2 w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className={`${lora.className} text-lg block font-medium text-white mb-2`}
            >
              Message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              className="border bg-black text-white p-2 w-full"
              rows={6}
              required
            />
          </div>
          <button
            type="submit"
            className={`${
              vcrOsdMono.className
            } uppercase tracking-widest text-lg w-32 border-2  ${
              sending
                ? 'border-gray-600/50'
                : 'hover:border-[#f29] border-white'
            } text-white font-medium py-2 px-4 rounded`}
            disabled={sending}
          >
            Send
          </button>
          <span className={`ml-5 ${sending ? 'block' : 'hidden'}`}>
            Sending...
          </span>

          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </form>
      </div>
    </div>
  )
}
