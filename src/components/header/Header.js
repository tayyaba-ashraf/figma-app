import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Header = () => {
  const [toggle,setToggle]=useState(false)
  return (
    <div className='flex md:gap-64  md:ml-0 sm:ml-28 sm:gap-80 h2family md:w-auto sm:w-smpicturedivw sm:absolute md:sticky sm:top-12 md:top-auto '>
          {
            toggle ? <AiOutlineClose onClick={()=>setToggle(!toggle)} className=' text-4xl md:hidden flex'/>
            : <AiOutlineMenu onClick={()=>setToggle(!toggle)} className=' text-5xl md:hidden flex'/>
          }
          {/* Big screen Navbar */}
          <div className='hidden md:flex items-center ' >
              <ul className='flex gap-12 md:ml-44 sm:ml-36  text-Blue2  md:text-sm sm:text-3xl md:font-normal sm:font-medium md:leading-6 sm:leading-8'>
                  <li ><a href='#'>Home</a></li>
                  <li ><a href='#'>About</a></li>
                  <li ><a href='#'>Contact</a></li>
              </ul>
          </div>
          
         
          {/* Responsive Navbar */}
          <div className={`duration-300 fixed bg-black ${toggle ?'left-[0]' :'left-[-100%]'} top-[121px] w-full z-10 h-smheight md:hidden items-center `}>
              <ul className=' flex mt-10 flex-col ml-10  gap-16 text-white1  text-5xl font-medium leading-8'>
                  <li ><a href='#'>Home</a></li>
                  <li ><a href='#'>About</a></li>
                  <li ><a href='#'>Contact</a></li>
                  <li ><a href='#'>Services</a></li>
                  <li ><a href='#'>Products</a></li>
              </ul>
          </div>
          <div className='flex text-Blue3 font-black md:leading-landingheight sm:leading-seconedh2height md:text-landingfontsize sm:text-6xl'>Landing</div>
          
          <div className='flex items-center'>
          <button className='md:w-40 sm:w-48 text-white1 text-center bg-bg-blue mt-4 mb-4 md:text-xs sm:text-3xl md:font-medium  sm:font-semibold md:leading-buttonheight sm:leading-10'>Buy Now</button>
          </div>
          
    </div>
  )
}

export default Header

// border-solid border-2 border-indigo-600'