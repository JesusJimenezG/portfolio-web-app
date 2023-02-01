'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { OpenAIDataType, ProfileDataType } from '../../../types'
import styles from './hero.module.css'
import {
  anodyne,
  firaMono,
  hackRegular,
  monoidRegular,
  vcrOsdMono,
  vt323,
} from '../../styles/fonts'
import useSWR from 'swr'
import HireMe from '../contact/HireMe'
import { Skills } from './Skills'

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())

import React from 'react'

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

export const Home = ({
  profile,
}: {
  openAIDescription: OpenAIDataType
  profile: ProfileDataType
}) => {
  const { data, isLoading, error } = useSWR('/api/completion/', fetcher)

  const completion = data?.results

  const [isTypingDescription, setIsTypingDescription] = useState(true)

  const refreshData = () => {
    // console.log('data at event handler: ', data)
    if (data) {
      // console.log('data: ', data.results)
      setIsTypingDescription(true)
    }
  }

  const descriptionTypewriterEnded = () => {
    // console.log('typewriter ended')
    setIsTypingDescription(false)
  }
  const generateNewDescription = () => {
    refreshData()
  }
  // Enhance with Neumorpic UI the following code:
  return (
    <div className="flex lg:flex-row-reverse lg:px-40 md:px-20 sm:px-10 flex-col mx-auto my-auto justify-center items-center lg:mt-24">
      <div className="lg:w-2/5 w-2/5 my-auto justify-center">
        <div className="lg:w-4/5 md:w-3/5 sm:w-3/5 w-3/5 mx-auto mt-6 border-gray-200 border-2 sm:rounded-full rounded-full lg:rounded-lg">
          <div
            className={`${styles.figure} sm:rounded-full rounded-full lg:rounded-lg`}
          >
            <Image
              className="shadow-lg z-50 sm:rounded-full rounded-full lg:rounded-none"
              src="/images/profile.png"
              alt="Profile picture"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                // transform: 'scaleX(-1)',
                filter: 'brightness(1.1)',
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
            <div
              className={`${styles.gradientmask} lg:w-2/4 h-full w-2/4 left-2/4 lg:bottom-[18%] bottom-[45%]`}
            ></div>
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
      <div className="lg:w-3/4 text-start px-2 lg:py-4 lg:my-auto">
        <h1 className="text-gray-200 lg:text-2xl md:text-xl sm:text-lg text-lg font-medium pt-1">
          <span>{`Hi, I'm ${profile.name}.`}</span>
        </h1>
        <h1 className="text-gray-200 lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold py-3">
          {`ChatGPT, please write my ${profile.title} description`}
          <span
            className={`${vt323.className} tracking-wider font-medium font-mono ml-2 mt-2`}
          >{`${isLoading ? '' : ` ${completion?.style}`}: `}</span>
        </h1>
        <section title="header description">
          <span
            className={`${isTypingDescription ? styles.typewriter : ''} ${
              hackRegular.className
            } font-mono antialiased tracking-widest md:text-lg sm:text-lg text-base`}
            onAnimationEnd={descriptionTypewriterEnded}
            style={{ '--n': completion?.text?.length } as React.CSSProperties}
          >
            {completion?.text}
          </span>
        </section>
        <section
          title="Generate another response section"
          className="flex justify-center my-8"
        >
          <button
            type="button"
            hidden={isTypingDescription}
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
