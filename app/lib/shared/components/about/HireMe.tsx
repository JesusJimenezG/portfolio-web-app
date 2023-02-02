import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { vcrOsdMono } from '../../../../styles/fonts'

const links = {
  upwork: 'https://www.upwork.com/freelancers/~0136891f6e1d316648',
  linkedin: 'https://www.linkedin.com/in/jesusjimenezg/',
  discord: 'Al#5231',
}

export default function HireMe() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(links['discord'])
    toast('Copied to clipboard')
  }
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h1
          className={`${vcrOsdMono.className} uppercase text-xl font-medium mb-4`}
        >
          Get in Touch
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-center">
          <a
            href={links['linkedin']}
            className={`${vcrOsdMono.className} uppercase tracking-wider border-gray-200 border-2 hover:border-[#f29] hover:z-10 w-full sm:w-48 sm:mx-4 px-6 py-4 rounded-lg text-white mb-4 sm:mb-0`}
          >
            LinkedIn
          </a>
          <a
            href={links['upwork']}
            className={`${vcrOsdMono.className} uppercase tracking-wider border-gray-200 border-2 hover:border-[#f29] hover:z-10 w-full sm:w-48 sm:mx-4 px-6 py-4 rounded-lg text-white mb-4 sm:mb-0`}
          >
            Upwork
          </a>
          <a
            href="#"
            onClick={copyToClipboard}
            className={`${vcrOsdMono.className} uppercase tracking-widerborder-gray-200 border-2 hover:border-[#f29] hover:z-10 w-full sm:w-48 sm:mx-4 px-6 py-4 rounded-lg text-white mb-4 sm:mb-0 cursor-copy`}
          >
            {'Discord:'}
            <span className="text-gray-500 italic">{links['discord']}</span>
          </a>
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
        </div>
      </div>
    </section>
  )
}
