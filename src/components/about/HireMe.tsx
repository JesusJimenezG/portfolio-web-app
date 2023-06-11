import { vcrOsdMono } from '../../app/styles/fonts'

const links = {
  upwork: 'https://www.upwork.com/freelancers/~0136891f6e1d316648',
  linkedin: 'https://www.linkedin.com/in/jesusjimenezg/',
  getonboard: 'https://www.getonbrd.com/p/jesus-jimenez-f86b',
  // discord: 'Al#5231',
}

export default function HireMe() {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h1
          className={`${vcrOsdMono.className} uppercase text-xl font-medium mb-4`}
        >
          Hire me
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-center">
          <a
            href={links['linkedin']}
            target="_blank"
            className={`${vcrOsdMono.className} uppercase tracking-wider border-gray-200 border-2 hover:border-[#f29] hover:z-10 w-full sm:w-48 sm:mx-4 px-6 py-4 rounded-lg text-white mb-4 sm:mb-0`}
          >
            LinkedIn
          </a>
          <a
            href={links['upwork']}
            target="_blank"
            className={`${vcrOsdMono.className} uppercase tracking-wider border-gray-200 border-2 hover:border-[#f29] hover:z-10 w-full sm:w-48 sm:mx-4 px-6 py-4 rounded-lg text-white mb-4 sm:mb-0`}
          >
            Upwork
          </a>
          <a
            href={links['getonboard']}
            // onClick={copyToClipboard}
            className={`${vcrOsdMono.className} uppercase tracking-widerborder-gray-200 border-2 hover:border-[#f29] hover:z-10 w-full sm:w-48 sm:mx-4 px-6 py-4 rounded-lg text-white mb-4 sm:mb-0`}
          >
            {'Getonboard'}
          </a>
        </div>
      </div>
    </section>
  )
}
