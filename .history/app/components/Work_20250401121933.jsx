import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
       <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
       <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>
       <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my web development portofilio! Explore a collection of projects shawcasing my expertise in front-end and back-end development</p>
       <div className='grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-6 my-10 gap-5'>
        {workData.map((project, index)=>(
            <div className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={index} style={{ backgroundImage: `url(${project.bgImage})` }}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                   <a href={project.link} target="_blank" rel="noopener noreferrer"> <Image src={assets.send_icon} alt='send icon' className='w-5'/></a>
                </div>
                </div>
            </div>

        ))}
       </div>
       <a target="_blank" href="https://github.com/hatemmoalla368?tab=repositories" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'>Show more <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4'/></a>
    </div>
  )
}

export default Work
