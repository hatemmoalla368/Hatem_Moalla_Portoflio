import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div>
        <Image src={assets.logo} alt='' className='w-36 mx-auto'
      </div>
    </div>
  )
}

export default Footer
