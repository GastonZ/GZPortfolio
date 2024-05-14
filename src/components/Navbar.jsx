import React, { useEffect, useState } from 'react';
import { cyberpunk, punk1 } from '../assets';
import GlitchBtn from './GlitchBtn';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../assets/i18n';

const Navbar = () => {

    const [active, setActive] = useState(false);
    const { t } = useTranslation();

    const [language, setLenguage] = useState('en');

    const switchLen = (leng) => {
        setLenguage(leng === 'en' ? 'es' : 'en');
        i18n.changeLanguage(leng === 'en' ? 'es' : 'en');
    }

    return (
        <div className='fixed top-0 left-0 w-full z-50'>
            <div className='hidden md:flex justify-between p-4'>
                <div className='z-50'>
                    <img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} src={punk1} alt="logo" className='w-10 h-10 cursor-pointer' />
                </div>
                <ul className='hidden md:flex p-4 justify-center md:gap-10 glass-bg fixed top-0 left-0 w-full z-40'>
                    <li className='uppercase text-sm cursor-pointer'>
                        <a href="#">
                            <GlitchBtn text={t("SERVICES")} />
                        </a>
                    </li>
                    <li className='uppercase text-sm cursor-pointer'>
                        <a href="#">
                            <GlitchBtn text={t("WORK")} />
                        </a>
                    </li>
                    <li className='uppercase text-sm cursor-pointer'>
                        <a href="#">
                            <GlitchBtn text={t("PROJECTS")} />
                        </a>
                    </li>
                    <li className='uppercase text-sm cursor-pointer'>
                        <a href="#">
                            <GlitchBtn text={t("INTERESTS")} />
                        </a>
                    </li>
                </ul>
                <div className="container-switch z-50">
                    <input onClick={() => switchLen(language)} hidden id="check" name="check" type="checkbox" />
                    <label className="toggle" htmlFor="check">
                        <div className="toggle__circle"></div>
                    </label>
                    <div className="toggle-text pl-1">
                        <span className={`${language === 'es' ? 'text-color-1' : '' } transition-all`}>ES</span>
                        <span className={`${language === 'en' ? 'text-color-1' : '' } transition-all`}>EN</span>
                    </div>
                </div>
            </div>
            <div>
                <motion.img onClick={() => { setActive(!active), window.scrollTo({ top: 0, behavior: 'smooth' }) }} className='flex md:hidden fixed right-0 m-4 h-10 w-10 rotate-animate cursor-pointer z-50 brightness-150 hover:brightness-200 transition-all' src={punk1} alt="" />
                <motion.div initial={{ scale: 0 }} animate={active ? { scale: [0, 50, 100, 150, 200], transition: { duration: 3 } } : { scale: [200, 150, 100, 50, 0], transition: { duration: 0.5 } }}
                    exit={{ scale: 0 }} className='flex md:hidden h-10 w-10 bg-n-8 opacity-95 absolute right-0 m-4 rounded-full'>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -0 }}
                animate={active ? { opacity: 1, y: 200, transition: { duration: 1 } } : { opacity: 0, y: -50, transition: { duration: 0.5 } }}
                className='block md:hidden z-[999]'>
                <ul className={`flex flex-col transition-all justify-center items-center h-full gap-10 w-full`}>
                    <li onClick={() => setActive(!active)} className='uppercase text-sm cursor-pointer'>
                        <a href="#">
                            <GlitchBtn text={t("SERVICES")} />
                        </a>
                    </li>
                    <li onClick={() => setActive(!active)} className='uppercase text-sm cursor-pointer'>
                        <a href="#">
                            <GlitchBtn text={t("WORK")} />
                        </a>
                    </li>
                    <li onClick={() => setActive(!active)} className='uppercase text-sm cursor-pointer'>
                        <a href="#">
                            <GlitchBtn text={t("PROJECTS")} />
                        </a>
                    </li>
                    <li onClick={() => setActive(!active)} className='uppercase text-sm cursor-pointer'>
                        <a href="#">
                            <GlitchBtn text={t("INTERESTS")} />
                        </a>
                    </li>
                </ul>
                <div className="container-switch z-50 grid place-content-center mt-4">
                    <div onClick={() => switchLen(language)} className="toggle-text pl-1 cursor-pointer">
                        <span className={`${language === 'es' ? 'text-color-1' : '' } transition-all`}>ES</span>
                        <span className={`${language === 'en' ? 'text-color-1' : '' } transition-all`}>EN</span>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Navbar