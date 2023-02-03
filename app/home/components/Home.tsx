'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { OpenAIDataType, ProfileDataType } from '../../lib/types'
import styles from '../styles/hero.module.css'
import { lora, vcrOsdMono, vt323 } from '../../styles/fonts'
import useSWR from 'swr'
import HireMe from '../../lib/shared/components/about/HireMe'
import QRCode from 'react-qr-code'

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())

import React from 'react'

export const Home = ({ profile }: { profile: ProfileDataType }) => {
  const { data, isLoading, error, mutate } = useSWR(
    '/api/completion/',
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )
  const [completion, setCompletion] = useState<OpenAIDataType>()
  const [description, setDescription] = useState('')
  const [isTypingStyle, setIsTypingStyle] = useState(true)
  const [isTypingDescription, setIsTypingDescription] = useState(false)

  useEffect(() => {
    if (data) {
      setCompletion(data.results)
    }
  }, [data])
  useEffect(() => {
    if (isTypingDescription) {
      setDescription(completion!.text)
      if (
        completion!.style.toLowerCase().includes('gif') ||
        completion!.style.toLowerCase().includes('png') ||
        completion!.style.toLowerCase().includes('qr')
      ) {
        setIsTypingDescription(false)
      }
    }
  }, [isTypingDescription])

  const search = () => {
    if (completion!.style.includes('in the style of ')) {
      const keyword = completion!.style.replace('in the style of ', '')
      const link = `https://www.google.com/search?q=${keyword}`

      window.open(link, '_blank')
    }
  }

  const refreshData = () => {
    mutate('/api/completion/')
    // setIsTypingDescription(true)
  }

  const styleAnimEnd = () => {
    setIsTypingStyle(false)
    setIsTypingDescription(true)
  }

  const descriptionAnimEnded = () => {
    setIsTypingDescription(false)
  }

  const generateNewDescription = () => {
    setDescription('')
    refreshData()
    setIsTypingStyle(true)
  }

  return (
    <div className="flex lg:flex-row-reverse lg:px-40 md:px-20 px-5 flex-col mx-auto my-auto justify-center items-center lg:mt-24">
      <div className="lg:w-2/5 w-2/5 my-auto justify-center">
        <div className="lg:w-4/5 md:w-3/5 sm:w-3/5 w-3/5 mx-auto mt-6 border-gray-200 border-2 sm:rounded-full rounded-full lg:rounded-lg hover:z-50">
          <div
            className={`${styles.figure} sm:rounded-full rounded-full lg:rounded-lg overflow-hidden hover:z-50`}
          >
            <Image
              className="w-full rounded-lg lg:rounded-lg hover:z-50"
              src="/assets/images/profile3.png"
              alt="Profile picture"
              style={{
                objectFit: 'fill',
                objectPosition: 'center',
                // transform: 'scaleX(-1)',
                filter: 'brightness(1) grayscale(100%)',
              }}
              width={500}
              height={500}
            />
            {/* <Stripes
              width="lg:w-32 md:w-0 sm:w-0"
              height="lg:h-32 md:h-0 sm:h-0"
              small={false}
              className="absolute top-12"
            /> */}
            {/* <div
              className={`${styles.gradientmask1} w-[50%] h-[60%] left-[50%] bottom-[75%] rotate-180 `}
            ></div> */}
            <div
              className={`${styles.gradientmask1} w-[50%] h-[90%] left-[45%] bottom-[15%] py-10 rounded-3xl`}
            ></div>
            {/* <div
              className={`${styles.gradientmask2} w-[35%] h-[50%] left-[20%] bottom-[10%] `}
            ></div> */}
            {/* <div
              className={`${styles.palmtree} lg:w-[520px] lg:h-[920px] lg:scale-50 lg:-translate-y-14`}
            ></div> */}
          </div>
        </div>
        <div className="hidden lg:block">
          {/* <Skills skills={profile.skills} /> */}
          <HireMe />
        </div>
      </div>
      <div className="lg:w-3/4 text-start px-5 lg:py-4 lg:my-auto">
        <h1
          className={`${vcrOsdMono.className} text-gray-200 tracking-widest lg:text-2xl md:text-xl sm:text-lg text-lg font-medium pt-1 uppercase hover:text-[#f29]`}
        >
          <span>{`Hi, I'm ${profile.name}.`}</span>
        </h1>
        <h1
          className={`${lora.className} text-gray-200 lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold py-3`}
        >
          {`ChatGPT, please write my ${profile.title} description`}
          <span
            className={`${vt323.className} ${
              isTypingStyle ? `${styles.typewriter} pointer-events-none` : ''
            } font-normal cursor-help tracking-wider ml-2 mt-2 hover:text-[#f29]`}
            onClick={search}
            style={{ '--n': completion?.style?.length } as React.CSSProperties}
            onAnimationEnd={styleAnimEnd}
          >{`${isLoading ? '' : ` ${completion?.style}`}:`}</span>
        </h1>
        <section title="header description">
          {completion?.style.includes('QR') ? (
            <>
              <div
                className={`${
                  isTypingStyle ? 'hidden' : 'container'
                } w-2/4 mx-auto my-2`}
              >
                <div
                  className="w-full"
                  style={{ background: 'white', padding: '16px' }}
                >
                  <QRCode
                    size={32}
                    style={{ height: 'auto', width: '100%' }}
                    value={description}
                  />
                </div>
                <div className="text-center">{`There's a 1/902 chance to see this style.😉`}</div>
              </div>
            </>
          ) : completion?.style.includes('PNG') ||
            completion?.style.includes('GIF') ? (
            <>
              <div
                className={`${
                  isTypingStyle ? 'hidden' : 'container'
                } lg:w-2/4 w-[28px] mx-auto my-2 justify-center items-center`}
              >
                <Image
                  src={description}
                  className="w-full"
                  alt="Image"
                  width={300}
                  height={300}
                  style={{
                    objectFit: 'fill',
                    objectPosition: 'center',
                    // transform: 'scaleX(-1)',
                  }}
                />
                <div className="text-center">{`There's a 1/902 chance to see this style.😉`}</div>
              </div>
            </>
          ) : (
            <>
              <span
                className={`${
                  isTypingDescription ? `${styles.typewriter} select-none` : ''
                } font-[consolas] tracking-widest lg:text-lg md:text-lg sm:text-lg text-base`}
                onAnimationEnd={descriptionAnimEnded}
                style={{ '--n': description?.length } as React.CSSProperties}
              >
                {description}
              </span>
            </>
          )}
        </section>
        <section
          title="Generate another response section"
          className="flex justify-center my-8"
        >
          <button
            type="button"
            hidden={isTypingDescription || isTypingStyle}
            className={`${vcrOsdMono.className} font-mono tracking-widest lg:text-xl md:text-xl sm:text-xl text-md border-gray-200 border-2 hover:border-[#f29] hover:z-50 w-2/4 h-16 text-white font-medium px-2 rounded`}
            onClick={generateNewDescription}
          >
            <span className="mb-2 py-2">Generate a new description</span>
          </button>
        </section>
      </div>
      <div
        key={'contact2'}
        id={'contact2'}
        className="lg:hidden md:flex md:flex-col md:justify-center"
      >
        <HireMe />
      </div>
    </div>
  )
}

export const Stripes = ({
  width,
  height,
  small,
  className,
}: {
  width: string
  height: string
  small: boolean
  className?: string
}) => {
  return (
    <div className={`${styles.stripeswraper} ${width} ${height} ${className}`}>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
      <div className={`${small ? styles.smallstripe : styles.stripe}`}></div>
    </div>
  )
}
