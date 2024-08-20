import React from 'react'
import resumeBackground from "../assets/resumeBackground.svg"
import cv from "../assets/cv.png"

const Resume = () => {
  return (
<div id='resume'
  className='relative w-full h-screen max-h-full overflow-hidden bg-fixed' 
  style={{
    backgroundImage: `url(${resumeBackground})`,
    backgroundSize: 'cover', // Adjust to 'contain' for better visibility on small screens
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
>
  <div
    className='absolute inset-0 flex items-center justify-center z-10'
  >
    <div
      className='border-8 border-dotted backdrop-blur-md border-orange-500 rounded-full w-48 h-48 md:w-72 md:h-72 flex items-center justify-center transition-transform transform hover:scale-150'
    >
      <a href="hashmeet_singh_saini_resume.pdf" target="_blank" className='flex items-center justify-center'>
        <img
          src={cv}
          alt="download resume"
          className='w-24 h-24 md:w-48 md:h-48'
        />
      </a>
    </div>
  </div>
</div>



  )
}

export default Resume