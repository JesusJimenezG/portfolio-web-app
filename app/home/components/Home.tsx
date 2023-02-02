'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { OpenAIDataType, ProfileDataType } from '../../lib/types'
import styles from '../styles/hero.module.css'
import { hackRegular, vcrOsdMono, vt323 } from '../../styles/fonts'
import useSWR from 'swr'
import HireMe from '../../lib/shared/components/HireMe'
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
    }
  }, [isTypingDescription])

  const refreshData = () => {
    mutate('/api/completion/')
    setIsTypingDescription(true)
  }

  const StyleAnimEnded = () => {
    setIsTypingStyle(false)
    setIsTypingDescription(true)
  }

  const descriptionAnimEnded = () => {
    setIsTypingDescription(false)
  }

  const generateNewDescription = () => {
    refreshData()
    setIsTypingStyle(true)
  }

  return (
    <div className="flex lg:flex-row-reverse lg:px-40 md:px-20 px-5 flex-col mx-auto my-auto justify-center items-center lg:mt-24">
      <div className="lg:w-2/5 w-2/5 my-auto justify-center">
        <div className="lg:w-4/5 md:w-3/5 sm:w-3/5 w-3/5 mx-auto mt-6 border-gray-200 border-2 sm:rounded-full rounded-full lg:rounded-lg z-50">
          <div
            className={`${styles.figure} sm:rounded-full rounded-full lg:rounded-lg overflow-hidden`}
          >
            <Image
              className="w-full z-10 rounded-lg lg:rounded-lg"
              src="/assets/images/profile.png"
              alt="Profile picture"
              style={{
                objectFit: 'fill',
                objectPosition: 'center',
                // transform: 'scaleX(-1)',
                filter: 'brightness(1)',
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
              className={`${styles.gradientmask1} w-[50%] h-[100%] left-[45%] bottom-[15%] `}
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
        <h1 className="text-gray-200 lg:text-2xl md:text-xl sm:text-lg text-lg font-medium pt-1">
          <span>{`Hi, I'm ${profile.name}.`}</span>
        </h1>
        <h1 className="text-gray-200 lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold py-3">
          {`ChatGPT, please write my ${profile.title} description`}
          <span
            className={`${isTypingStyle ? styles.typewriter : ''} ${
              vt323.className
            } tracking-wider font-medium font-mono ml-2 mt-2`}
            style={{ '--n': completion?.style?.length } as React.CSSProperties}
            onAnimationEnd={StyleAnimEnded}
          >{`${isLoading ? '' : ` ${completion?.style}`}: `}</span>
        </h1>
        <section title="header description">
          {completion?.style.includes('QR') ? (
            <>
              <div
                className="w-2/4 flex mx-auto my-2"
                style={{ background: 'white', padding: '16px' }}
              >
                <QRCode
                  size={32}
                  style={{ height: 'auto', width: '100%' }}
                  value={description}
                />
              </div>
            </>
          ) : completion?.style.includes('PNG') ||
            completion?.style.includes('GIF') ? (
            <>
              <div className="lg:w-2/4 w-[28px] mx-auto my-2">
                <Image
                  src={description}
                  alt="Image"
                  width={300}
                  height={300}
                  style={{
                    objectFit: 'fill',
                    objectPosition: 'center',
                    // transform: 'scaleX(-1)',
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <span
                className={`${
                  isTypingDescription ? styles.typewriter : ''
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
            className={`${vcrOsdMono.className} font-mono tracking-widest text-xl border-gray-200 border-2  hover:border-[#f29] w-2/4 h-16 text-white font-medium px-2 rounded`}
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