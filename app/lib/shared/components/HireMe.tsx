export default function HireMe() {
  const links = {
    upwork: 'https://www.upwork.com/freelancers/~0136891f6e1d316648',
    linkedin: 'https://www.linkedin.com/in/jesusjimenezg/',
    discord: 'Al#5231',
  }
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-xl font-medium mb-4">Get in Touch</h1>
        <div className="flex flex-col sm:flex-row sm:justify-center">
          <a
            href={links['linkedin']}
            className="border-gray-200 border-2 hover:border-[#f29] hover:z-10 w-full sm:w-48 sm:mx-4 px-6 py-4 rounded-lg text-white mb-4 sm:mb-0"
          >
            LinkedIn
          </a>
          <a
            href={links['upwork']}
            className="border-gray-200 border-2 hover:border-[#f29] hover:z-10 w-full sm:w-48 sm:mx-4 px-6 py-4 rounded-lg text-white mb-4 sm:mb-0"
          >
            Upwork
          </a>
          <a
            href={links['discord']}
            className="border-gray-200 border-2 hover:border-[#f29] hover:z-10 w-full sm:w-48 sm:mx-4 px-6 py-4 rounded-lg text-white mb-4 sm:mb-0"
          >
            {'Discord:'}
            <span className="text-gray-300">{links['discord']}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
