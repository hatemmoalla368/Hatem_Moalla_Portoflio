import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isdarkmode, setIsdarkmode}) => {
    const [isscroll, setIsscroll] = useState(false)
    const sidemenuref = useRef()
    const openmenu = ()=>{
        sidemenuref.current.style.transform = 'translateX(-16rem)'
    }
    const closemenu = ()=>{
        sidemenuref.current.style.transform = 'translateX(16rem)'
    }
    useEffect(()=>{
window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        setIsscroll(true)

    }else{
        setIsscroll(false)

    }
})
    },[])
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isscroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
            <Image alt='' src={assets.logo} className='w-28 cursor-pointer mr-14' />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isscroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About me</a></li>
            <li><a className='font-Ovo' href="#services">Services</a></li>
            <li><a className='font-Ovo' href="#work">My Work</a></li>
            <li><a className='font-Ovo' href="#contact">Contact me</a></li>

        </ul>
        <div className='flex items-center gap-4'>
            <button onClick={()}>
                <Image src={assets.moon_icon} alt='' className='w-6'/>
            </button>
            <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo' href="#contact"> Contact <Image src={assets.arrow_icon} className='w-3' alt='' /></a>
            <button className='block md:hidden ml-3' onClick={openmenu}>
                <Image src={assets.menu_black} alt='' className='w-6'/>
            </button>
            <ul ref={sidemenuref} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                <div className='absolute right-6 top-6' onClick={closemenu}>
                    <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
                </div>
            <li><a className='font-Ovo' onClick={closemenu} href="#top">Home</a></li>
            <li><a className='font-Ovo' onClick={closemenu} href="#about">About me</a></li>
            <li><a className='font-Ovo' onClick={closemenu} href="#services">Services</a></li>
            <li><a className='font-Ovo' onClick={closemenu} href="#work">My Work</a></li>
            <li><a className='font-Ovo' onClick={closemenu} href="#contact">Contact me</a></li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
