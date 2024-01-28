import React from 'react'

import SevethSectionImage2 from './SevethSectionImage2'
// border-solid border-4 border-pink-400
const SeventhSection = () => {
  return (
    <div className='items-center SeventhSectionImage border-2 border-red-950 '>
        <div className='font-h2family mt-40'>
            <h1 className='mx-auto text-Blue1 text-center md:text-4xl sm:text-6xl md:font-medium  sm:font-semibold md:leading-seconedh2height sm:leading-smintropline  md:w-sevenh1width sm:w-sevenh1width2'>A Price To Suit Everyone</h1>
            <div className='text-center text-Blue5 md:text-base sm:text-5xl md:font-normal sm:font-medium md:leading-seconedpheight sm:leading-smintropline md:w-sevenh1width sm:w-sevenh1width3 mx-auto md:mt-auto sm:mt-5 '>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                     Aenean commodo ligula eget dolor. Aenean massa.
                     Cum sociis natoque penatibus et magnis dis parturient montes, 
                     nascetur ridiculus 
                </p>
            </div>

            <div className='mx-auto  text-center items-center '>
                <h2 className=' mt-8 text-Blue6 md:text-buttonfontsize sm:text-8xl md:font-medium sm:font-semibold md:leading-sevenh1height sm:leading-seven40height md:tracking-h2letter sm:tracking-tracking40'>$40</h2>
                <div className=' text-Blue3  md:text-base sm:text-4xl md:font-normal sm:font-medium md:leading-seconedpheight sm:leading-10 md:mt-auto sm:mt-8'>UI Design Kit</div>
            </div>

            <div className='mx-auto text-center items-center mt-8'>
                <div className=' md:text-sm sm:text-4xl text-Gray1 md:leading-6 sm:leading-9 md:font-normal sm:font-medium'>See, One price. Simple.</div>
                <div className='items-center md:mt-auto sm:mt-3 mx-auto text-white1 md:text-sm  sm:text-4xl font-medium md:leading-6 sm:leading-10 bg-bg-blue md:w-purchasebuttonwidth sm:w-sevendivwidth border-solid border-2 border-indigo-500'>
                      <button>Purchase Now</button>
                </div>

            </div>
            {/* <div className='SeventhSectionImage2 mt-40'>
                  <div className='flex justify-center mt-10 gap-52 font-h2family items-center '>
                      <div className='mt-2 text-sm text-Gray2 font-medium leading-6'>©2023 Yourcompany</div>
                      <div className='mt-2 ml-36 items-center text-Blue3 font-black leading-landingheight text-landingfontsize'>Landing</div>
                      <div className='items-center mt-1 text-center ml-44 text-white1 text-sm font-medium leading-6 bg-bg-blue w-footerpurchasebutton border-solid border-2 border-indigo-500'>
                          <button>Purchase Now</button>
                      </div>
                  </div>
                  
                    <hr className='border-solid mt-8 mx-auto border-1 w-4/5 items-center border-Gray3'></hr>
                      <div className='flex items-center gap-96 ml-2 mt-7'>
                          <ul className='flex  gap-12 text-Blue7  text-sm font-normal leading-6 ml-32 '>
                              <li ><a href='#'>Home</a></li>
                              <li ><a href='#'>About</a></li>
                              <li ><a href='#'>Contact</a></li>
                          </ul>
                          <div className='flex gap-7 justify-end text-Gray4 ml-72'>
                            <img src={facebook} alt='facebook'></img>
                            <img src={LinkedIn} alt='facebook'></img>
                            <img src={twitter} alt='facebook'></img>
                            <img src={youtube} alt='facebook'></img>
                            <img src={instagram} alt='facebook'></img>
                          </div>
                          
                      </div>
                  


            </div> */}
            <SevethSectionImage2 />
            
                

            
        </div>

    </div>
  )
}

export default SeventhSection