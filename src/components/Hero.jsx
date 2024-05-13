import React, { useRef } from 'react'
import { BackgroundCircles } from './Design';
import { cyberpunk, punk3 } from '../assets';
import { useTranslation } from 'react-i18next';
import { MdArrowDropDownCircle } from "react-icons/md";

const Hero = () => {

  const { t } = useTranslation();

  const parallaxRef = useRef(null);

  return (
    <div className='flex justify-center items-center h-screen flex-col gap-' ref={parallaxRef}>
      <div className='flex flex-col gap-5 items-center'>
        <h1>
          Gaston Zappulla
        </h1>
        <h2>{t("SOFT_DEV")}{t("WEB_DEV")}</h2>
      </div>
        <a className='absolute bottom-0 z-40' href="#about">
          <MdArrowDropDownCircle className='w-10 h-10 object-cover relative  m-4 text-color-1/70 cursor-pointer transition-all hover:scale-110 hover:text-color-1'/>
        </a>
      <BackgroundCircles />
    </div>
  )
}

export default Hero