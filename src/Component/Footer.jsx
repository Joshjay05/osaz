// import React from 'react'
import { BsGoogle, BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='sm:p-1 flex items-center justify-center bg-[#B74C4C6B]  text-center tracking-[3px] leading-[20px] py-[16px] gap-4  lg:gap-12'>
        <p className='lg:text-[30px] sm:text-base font-bold'>   follow me @ BELLAANDRV
            </p> 
    
       <div className='flex lg:text-[20px] sm:gap-4  lg:gap-[50px] text-center  py-[16px] lg:px-[26px]'>

       <a href=''>
              <BsGoogle/>
            </a>
            <a href=''>
              <FaFacebook/>
              </a>
              <a href=''>
              <BsInstagram/>
              </a>
              <a href=''>
              <BsTwitterX/>
              </a>
       </div>
    </div>
  )
}

export default Footer