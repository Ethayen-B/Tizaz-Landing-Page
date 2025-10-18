import React from 'react'
import { SlideUp } from '../animation/animate'
import { animate, m, motion } from 'framer-motion'
import { IoIosArrowRoundForward } from 'react-icons/io'

const CallToAction = () => {
  return (
        <div className="mt-10 mb-5">
           <div className="container mx-auto px-10 grid grid-cols-1 align-middle md:grid-cols-2 min-h-[570px]">
                       <div className='flex flex-col justify-center py-14 md:py-0 relative z-20'>
                           <div className='text-center md:text-left space-y-10 lg:max-w-[550px]'>
                               <motion.h1 variants={SlideUp(0.6)} initial="initial" animate="animate" className='text-3xl lg:text-5xl font-bold !leading-snug'>Simplify Your Restaurant Operations With <span className='text-secondary'>Tizaz</span></motion.h1>
                               <div className='flex justify-center md:justify-start'>
                                   <motion.button variants={SlideUp(0.8)} initial="initial" animate="animate" className='primary-btn flex items-center gap-2 group'>
                                       Get Started free
                                       <IoIosArrowRoundForward className='text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300'/>
                                   </motion.button>
                               </div>
                           </div>
                       </div>
                   </div>   
        </div>
  )
}

export default CallToAction

// Start managing your restaurant smarter today!