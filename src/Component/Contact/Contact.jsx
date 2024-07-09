import React from 'react'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className='grid lg:grid-cols-2   border-[#B74C4C6B] lg:border-[38px] sm:border-[8px]'>
      
      <article className='flex sm:items-center flex-col gap-8 text-left justify-center  leading-[2.5rem] lg:px-[27%] lg:border-[30px] sm:border-[12px] border-[#B74C4C6B]  py-[20px]'>
          
      <HiOutlineArrowSmallRight className=' border-black p-1 h-12 w-12 border-[1px] text-black rounded-[50%] lg:ml-[650px] sm:ml-[70%] my-[40px]'/>
        {/* <div> */}
          <div className='flex gap-10'>
            <h3 className='text-[25px]'>services package</h3>
          </div>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati minima perspiciatis sed eum est praesentium voluptate aliquam? Perferendis itaque quos a totam in quas esse atque recusandae expedita labore!</p>
        {/* </div> */}

        <a href="/ " className='px-[10px] py-[16px] lg:w-[12vw] bg-[#B74C4C6B] text-black font-semibold rounded-[10px] text-[22px] text-center mt-[30px] mb-[50px]'>
        Contact me </a>
      </article>

      <article className='flex sm:items-center flex-col gap-8 text-left justify-center  leading-[2.5rem] lg:px-[27%] lg:border-[30px] sm:border-[12px] border-[#B74C4C6B] py-[20px] '>
        {/* <div> */}
          

            <HiOutlineArrowSmallRight className=' border-black p-1 h-12 w-12 border-[1px] text-black rounded-[50%] lg:ml-[650px] sm:ml-[70%] my-[40px]'/>
          {/* </div> */}
        {/* <div> */}
          <div className='flex gap-10'>
            <h3 className='text-[25px]'>services package</h3>
          </div>
         <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati minima perspiciatis sed eum est praesentium voluptate aliquam? Perferendis itaque quos a totam in quas esse atque recusandae expedita labore!</p>
        {/* </div> */}

        <a href="/ " className='px-[10px] py-[16px] lg:w-[12vw] bg-[#B74C4C6B] text-black font-semibold rounded-[10px] text-[22px] text-center mt-[30px] mb-[50px]'>
        Contact me </a>
      </article>
    </section>
    
  )
}

export default Contact
