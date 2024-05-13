import React, { useState } from 'react';
import { cyberpunk, punk1 } from '../assets';
import GlitchBtn from './GlitchBtn';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const [active, setActive] = useState(false);
    const { t } = useTranslation();

    return (
        <div className='absolute w-full'>
            <div className='hidden md:block'>
                <ul className='hidden md:flex p-4 justify-center md:gap-20 glass-bg fixed top-0 left-0 w-full z-50'>
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
            </div>
            <div>
                <motion.img onClick={() => {setActive(!active), window.scrollTo({ top: 0, behavior: 'smooth' })}} className='flex md:hidden fixed right-0 m-4 h-10 w-10 rotate-animate cursor-pointer z-50 brightness-150 hover:brightness-200 transition-all' src={punk1} alt="" />
                <motion.div initial={{ scale: 0 }} animate={active ? { scale: [0, 50, 100, 150, 200], transition: { duration: 3 } } : { scale: [200, 150, 100, 50, 0], transition: { duration: 0.5 } }}
                    exit={{ scale: 0 }} className='flex md:hidden h-10 w-10 bg-n-8 opacity-85 absolute right-0 m-4 rounded-full'>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -0 }}
                animate={active ? { opacity: 1, y: 200, transition: { duration: 1 } } : { opacity: 0, y: -50, transition: { duration: 0.5 } }}
                className='block md:hidden'>
                <ul className={`flex flex-col transition-all justify-center items-center h-full gap-10 w-full z-40`}>
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
            </motion.div>
        </div>
    )
}

export default Navbar