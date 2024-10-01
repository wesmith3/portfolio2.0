import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full opacity-50'
        />
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Looking for a  <span className='text-orange'>Full Stack Developer</span> with technical expertise & strong interpersonal skills?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out and let&apos;s discuss how I can help your team.
        </p>
        <a href='mailto:wesmith314@gmail.com'>
          <MagicButton 
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2024 Wesley Smith
        </p>
      </div>
    </footer>
  )
}

export default Footer
