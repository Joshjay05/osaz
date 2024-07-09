import React from 'react'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";
// `$bg-{url()}`

const MyClient = () => {
  
  return (
    <div className= 'flex flex-col justify-center items-center gap-[4rem] my-[6rem]  '>
      
      <HiOutlineArrowSmallRight className='ml-[90%] h-12 w-12' />
      <h2 className='items-center flex'>WHAT MY CLIENTS ARE SAYING</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptatum nihil vitae quis eveniet ad dignissimos eos consectetur ea voluptates maiores, minus nulla nostrum, accusamus officia incidunt corporis eius sunt.</p>
      <HiArrowSmallLeft className='mr-[80%] h-12 w-12' />
    </div>
  )
}

export default MyClient
