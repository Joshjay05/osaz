import { IoSearch } from "react-icons/io5";
import logo from '../../assets/logo.png'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5"
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

  return (
    <div className='relative w-full flex justify-between items-center h-20 lg:px-[4rem] px-6 bg-[#B74C4C6B] 
'>
       <div>
         <h1 className='font-[pattaya] lg:ml-[1] text-black'>
          {/* Uamesha Ramanay */}
          <img src={logo} alt="" className=' sm:h-auto sm:w-[60vw] font-[400] text-[48px] leading-[66.61px] sm:text-[18px] md:text-[22px]'/>
         </h1>
       </div>
       <ul className='hidden lg:flex mr-[20px] text-white items-center gap-[4rem] text-[20px]'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li className='hidden md:flex text-[20px]' >
         <IoSearch className=' font-bold  text-white  text-[26px]'/>
       </li> 
       </ul>
       {/* Small screen */}
			<div
				className="lg:hidden inline-block cursor-pointer z-30"
				onClick={toggleMenu}>
				{showMenu ? (
					<IoCloseCircleOutline className="h-4 w-4 z-30" />
				) : (
					<GiHamburgerMenu className="h-4 w-4 z-30" />
				)}
			</div>
			<ul
				className={
					showMenu
						? "flex flex-col justify-center p-12 absolute top-[5rem] left-0 bg-slate-100  transition-all h-[50vh] w-auto duration-500 z-30"
						: "hidden"
				}>
				<article className="flex flex-col gap-5">
					<a href="/">About Us</a>
					<a href="/">Our products</a>
					<a href="/">Delivery</a>
				</article>
			</ul>

       
    </div>
  )
}

export default Navbar
