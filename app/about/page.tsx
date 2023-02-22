import { lora, mukta, playfairDisplay, vcrOsdMono } from '../styles/fonts'
import { Skills } from '../lib/shared/components/about/Skills'
import { profile } from '../../pages/api/profile'
import Image from 'next/image'
import Repositories from '../lib/shared/components/github/Repositories'

export default function About() {
  // const profileResponse = use(getProfile())
  // const profile = profileResponse.results

  return (
    <div className="flex flex-col lg:px-40 lg:py-20 md:px-10 p-5 mt-10">
      <section title="About">
        <div className="flex lg:flex-row flex-col lg:text-left">
          <div className="lg:w-3/5 md:w-full sm:w-full text-start px-5">
            <h2
              className={`${vcrOsdMono.className} uppercase tracking-widest text-2xl font-medium hover:text-[#f29]`}
            >
              About me
            </h2>
            <p
              className={`${lora.className} tracking-wider text-white text-xl text-start my-8`}
            >
              {profile.about}
            </p>
          </div>
          <div className="lg:w-2/5 md:w-full sm:w-full px-5">
            <Skills skills={profile.skills} />
          </div>
        </div>
      </section>
      <section title="Projects">
        <div className="flex flex-col text-start px-5 my-10">
          <h2
            className={`${vcrOsdMono.className} uppercase tracking-widest text-2xl font-medium my-5 hover:text-[#f29]`}
          >
            Experience
          </h2>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
            {profile.projects.map((project, index) => (
              <div
                className="flex-col rounded-xl border-2 border-white hover:border-[#f29] items-center lg:mx-auto md:mx-auto"
                key={index}
              >
                <div className="pb-4 w-full h-[500px]">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                      style={{
                        borderRadius: '10px',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </a>
                </div>
                <div className="flex flex-row p-4">
                  <div className="flex flex-col">
                    <h3 className="text-white text-xl font-bold">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <h4 className="text-white text-lg">{project.position}</h4>
                    <h5 className="text-white text-lg">
                      {project.contract_url ? (
                        <div>
                          <a
                            href={project.contract_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            {project.contractor}
                          </a>
                          <span>{` | ${new Date(
                            project.start_date
                          ).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })} - ${
                            project.end_date
                              ? new Date(project.end_date).toLocaleDateString(
                                  'en-US',
                                  {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                  }
                                )
                              : 'Present'
                          }`}</span>
                        </div>
                      ) : (
                        `${project.contractor} | ${new Date(
                          project.start_date
                        ).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })} - ${
                          project.end_date
                            ? new Date(project.end_date).toLocaleDateString(
                                'en-US',
                                {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                }
                              )
                            : 'Present'
                        }`
                      )}
                    </h5>
                    <p className="text-white text-xl my-4">
                      {project.description}
                    </p>
                    {project.feedback && project.client_name && (
                      <div>
                        <h3 className="text-white text-xl font-bold hover:text-[#f29]">
                          {"Client's feedback:"}
                        </h3>
                        <p className="text-white text-xl my-4 italic whitespace-pre-wrap">
                          {`"${project.feedback}"\n- ${project.client_name}`}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-row p-4">
                  <div className="flex flex-col">
                    <h3 className="text-white text-xl font-bold hover:text-[#f29]">
                      Technologies
                    </h3>
                    <ul className="mt-2 flex flex-wrap justify-start">
                      {project.technologies.map((tech, index) => (
                        <li
                          key={index}
                          className="h-[38px] w-auto overflow-hidden text-center inline-block border font-[consolas] border-white hover:border-[#f29] rounded-xl px-2 py-2 text-sm font-medium text-white mx-1 mb-2"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section title="Repositories" className="my-10">
        <Repositories />
      </section>
    </div>
  )
}
