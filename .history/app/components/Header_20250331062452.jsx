import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div initial={{ scale:0 }} whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, type:'spring', stiffness:100 }}>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
      </motion.div>
      <motion.h3 initial={{ y:-20, opacity:0 }} whileInView={{ y:0, opacity1 }}
      transition={{ duration: 0.8, type:'spring', stiffness:100 }} className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Hatem Moalla <Image src={assets.hand_icon} alt='' className='w-6'/></motion.h3>
<h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>self taught web developer based in Tunisia</h1>
<p className='max-w-2xl mx-auto font-Ovo'>I am a self taught web developer looking for new opportunities </p>
<div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
    <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
    <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My resume <Image src={assets.download_icon} alt='' className='w-4'/></a>

</div>
    </div>
  )
}

export default Header
