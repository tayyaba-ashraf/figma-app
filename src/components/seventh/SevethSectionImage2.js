import React from 'react'
import facebook from '../../SVG/facebook.svg'
import LinkedIn from '../../SVG/LinkedIn.svg'
import twitter from '../../SVG/twitter.svg'
import youtube from '../../SVG/youtube.svg'
import instagram from '../../SVG/Instagram.svg'
const SevethSectionImage2 = () => {
  return (
    <div className='SeventhSectionImage2 sm:mt-1 sm:h-16 md:mt-60 border-solid border-4  border-pink-400'>
                  <div className='flex justify-center mt-10 md:gap-52 sm:gap-16 font-h2family items-center '>
                      <div className='mt-2 md:text-sm sm:text-4xl text-Gray2 md:font-medium sm:font-semibold md:leading-6 sm:leading-9'>©2023 Yourcompany</div>
                      <div className='mt-2 ml-36 items-center text-Blue3 md:font-black sm:font-black leading-landingheight md:text-landingfontsize sm:text-6xl'>Landing</div>
                      <div className='items-center mt-1 text-center ml-44 text-white1 md:text-sm sm:text-4xl md:font-medium sm:font-semibold md:leading-6 sm:leading-seconedh2height bg-bg-blue md:w-footerpurchasebutton sm:w-uibuttonwidth2 border-solid border-2 border-indigo-500'>
                          <button>Purchase Now</button>
                      </div>
                  </div>
                  
                    <hr className='border-solid md:mt-8 sm:mt-4 md:mx-auto sm:mx-24 border-2 md:w-4/5  sm:w-sevenhrsmwidth items-center border-Gray3'></hr>
                      <div className='flex items-center md:gap-96 sm:gap-36 md:ml-2 sm:ml-0 mt-7'>
                          <ul className='flex  gap-12 text-Blue7  md:text-sm sm:text-3xl md:font-normal sm:font-medium leading-6 md:ml-32 sm:ml-24 '>
                              <li ><a href='#'>Home</a></li>
                              <li ><a href='#'>About</a></li>
                              <li ><a href='#'>Contact</a></li>
                          </ul>
                          <div className='flex gap-7 justify-end text-Gray4 ml-72'>
                            <img src={facebook} alt='facebook' className='md:w-auto sm:w-10'></img>
                            <img src={LinkedIn} alt='facebook' className='md:w-auto sm:w-10'></img>
                            <img src={twitter} alt='facebook' className='md:w-auto sm:w-10'></img>
                            <img src={youtube} alt='facebook' className='md:w-auto sm:w-10'></img>
                            <img src={instagram} alt='facebook' className='md:w-auto sm:w-10'></img>
                          </div>
                          
                      </div>
                  


            </div>
  )
}

export default SevethSectionImage2