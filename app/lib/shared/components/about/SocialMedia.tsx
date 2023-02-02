import { vcrOsdMono } from '../../../../styles/fonts'

export const SocialMedia = () => {
  const links = {
    twitter: 'https://twitter.com/Jesalfz',
    linkedin: 'https://www.linkedin.com/in/jesusjimenezg/',
    github: 'https://github.com/JesusJimenezG',
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
        <li key={'twitter'} className="mx-6">
          <a href={links['twitter']} target="_blank">
            <i
              aria-hidden
              className="fab fa-twitter fa-2x text-[#f29] hover:text-white"
            ></i>
          </a>
        </li>
        <li key={'linkedin'} className="mx-6">
          <a href={links['linkedin']} target="_blank">
            <i
              aria-hidden
              className="fab fa-linkedin fa-2x text-[#f29] hover:text-white"
            ></i>
          </a>
        </li>
        <li key={'github'} className="mx-6">
          <a href={links['github']} target="_blank">
            <i
              aria-hidden
              className="fab fa-github fa-2x text-[#f29] decoration-purple-200 hover:text-white shadow-purple-300"
            ></i>
          </a>
        </li>
      </ul>
    </section>
  )
}
