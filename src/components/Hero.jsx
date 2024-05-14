import React, { useRef } from 'react'
import { BackgroundCircles, Gradient } from './Design';
import { useTranslation } from 'react-i18next';
import { MdArrowDropDownCircle } from "react-icons/md";

const Hero = () => {

  const { t } = useTranslation();

  const parallaxRef = useRef(null);

  return (
    <div className='relative'>
      <div className='flex justify-center items-center z-1 h-screen flex-col' ref={parallaxRef}>
        <div className='flex flex-col gap-5 items-center z-1'>
          <h1 className='text-center text-5xl sm:text-7xl first-letter:text-color-1/80 '>
            Gaston Zappulla
          </h1> 
          <div className='flex gap-2 flex-wrap justify-center'>
          <h2 className='text-center text-2xl sm:text-4xl first-letter:text-color-1/80'>{t("SOFT_DEV")}</h2>
          <h2 className='text-center text-2xl sm:text-4xl first-letter:text-color-1/80'>{t("WEB_DEV")}</h2>
          </div>
        </div>
        <a className='absolute bottom-0' href="#about">
          <MdArrowDropDownCircle className='w-10 z-2 h-10 object-cover relative  m-4 text-color-1/70 cursor-pointer transition-all hover:scale-110 hover:text-color-1' />
        </a>
        <BackgroundCircles />
      </div>
    </div>
  )
}

export default Hero