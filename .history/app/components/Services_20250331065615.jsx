import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

import { motion } from "motion/react"



const Services = () => {
  return (
    <motion.div  id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My services</h2>
      <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-6 my-10">
        {serviceData.map(({icon,title,description,link}, index)=>(
            <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                <div className="text-4xl text-gray-800 mb-4">
    {icon}  {/* Example: <FaMobileAlt /> */}
  </div>
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5'>
                    {description}
                </p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
                </a>

            </div>
        ))}

      </div>
    </motion.div>
  )
}

export default Services
