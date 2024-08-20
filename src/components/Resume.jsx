import React from 'react'
import resumeBackground from "../assets/resumeBackground.svg"
import cv from "../assets/cv.png"

const Resume = () => {
  return (
<div id='resume'
  className='relative w-full min-h-screen' 
  style={{
    backgroundImage: `url(${resumeBackground})`,
    backgroundSize: 'cover', // Ensures the background covers the entire area
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Keeps the background fixed during scroll
    height: '50vh', // Keeps the container height to viewport height
    overflow: 'hidden' // Clips the overflowing content
  }}
>
  <div
    className='absolute inset-0 flex items-center justify-center z-10'
  >
    <div
      className='border-8 border-dotted backdrop-blur-md border-orange-500 rounded-full w-72 h-72 flex items-center justify-center transition-transform transform hover:scale-150'
    >
      <a href="hashmeet_singh_saini_resume.pdf" target="_balnk" className='flex items-center justify-center'>
        <img
          src={cv}
          alt="download resume"
          className='w-48 h-48'
        />
      </a>
    </div>
  </div>
</div>


  )
}

export default Resume