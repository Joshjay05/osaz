/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import about_img from '../../assets/profile.jpeg'
import { BsGoogle, BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'


const About = () => {
  return (
    <section className='bg-[#B05555] py-[20px] rounded-bl-xl'>
          <article className='flex items-center lg:justify-center sm:flex-col justify-center lg:gap-[10rem]'>
            <img src={about_img} alt=""className='lg:m-[60px sm:w-[30vw] lg:w-[20vw] h-auto rounded-full'/>
         <div className=' flex flex-col justify-center gap-8 sm:mt-5 lg:w-[40%]'>
            <h1 className=' mx-auto text-3xl sm:py-[20px]'>About Me</h1>
            <p className='font-light sm:text-base leading-10 sm:leading-7 text-[18px]  text-white text-center '>My name is Gillian Kandie, I work as a social media manager, and I also love working in the PR and Media field. The media is the voice of the people and hence my enthusiasm in the media industry</p>
         <a href='#' className='text-black bg-[
// eslint-disable-next-line react/no-unescaped-entities
#FFFFFF] lg:w-[14vw] border-[2px] py-[16px] px-[26] text-center bg-white rounded-[4px] lg:ml-[180px] text-[20px] sm:flex sm:justify-center sm:items-center sm:mx-[5%]'>Let's Chat</a>
          <div className='flex lg:justify-center justify-center  gap-[20px] lg:mr-8'>
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
      
          </article>
       
    </section>
  )
}

export default About
