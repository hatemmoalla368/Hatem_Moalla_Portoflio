import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:1 }} id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.3 }} className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
      <motion.h2 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.5 }} className='text-center text-5xl font-Ovo'>About me</motion.h2>
      <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1}} transition={{ duration:0.8 }} className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div initial={{ opacity:0, sclae:0.9 }} whileInView={{ opacity:1, scale:1 }} transition={{ duration:0.6}} className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt="user" className="w-full rounded-3xl"/>
        </motion.div>
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:0.6, delay:0.8 }} className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>Self-taught developer hungry for my second professional experience. I’ve honed my skills in [e.g., React, JavaScript, CSS] through hands-on projects and relentless practice. Fast learner, detail-oriented, and passionate about building clean, functional solutions. Ready to contribute, grow, and prove my potential—let’s turn this first opportunity into something great!</p>
            <motion.ul initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.3 }} className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon,iconDark, title, description}, index)=>(
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                        <Image className='w-7' src={icon} alt={title}/>
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description}</p>
                    </li>
                ))}
            </motion.ul>
            <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
            <ul className='flex items-center gap-3 sm:gap5'>
                {toolsData.map((tool, index)=>(
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                    </li>
                ))}
            </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
