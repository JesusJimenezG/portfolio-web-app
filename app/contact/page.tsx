'use client'
import { useState } from 'react'
import useSWR from 'swr'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const fetcher = (formData: string) =>
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }).then((res) => res.json())

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const { name, email, message } = formData

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // send email here
    // const res = useSWR(formData, fetcher)
    // console.log('Response received')
    // console.log('Response succeeded!')
    toast('Message sent. Thanks for getting in touch!')
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <div className="flex w-4/12 h-screen m-auto justify-center items-center">
      <div className="cotainer h-auto w-full my-auto">
        <h2 className="text-3xl font-medium text-center text-white mb-8">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block font-medium text-white mb-2">
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
              className="block font-medium text-white mb-2"
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
              htmlFor="message"
              className="block font-medium text-white mb-2"
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
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded"
          >
            Send
          </button>
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
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   })
//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (event: any) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     })
//   }

//   const handleSubmit = (event: any) => {
//     event.preventDefault()
//     console.log(formData)
//     // Send formData to email here

//   }

//   return (
//     <section className="py-12">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-medium text-center text-white mb-6">
//           Get in Touch
//         </h2>
//         <form
//           onSubmit={handleSubmit}
//           className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
//         >
//           <div className="mb-4">
//             <label className="block text-white font-medium mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
//               id="name"
//               type="text"
//               placeholder="John Doe"
//               onChange={handleChange}
//               value={formData.name}
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-white font-medium mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               placeholder="john.doe@example.com"
//               onChange={handleChange}
//               value={formData.email}
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-white font-medium mb-2"
//               htmlFor="message"
//             >
//               Message
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
//               id="message"
//               placeholder="Write your message here..."
//               onChange={handleChange}
//               value={formData.message}
//             />
//           </div>
//           <div className="flex items-center justify-center">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Send
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   )
// }
