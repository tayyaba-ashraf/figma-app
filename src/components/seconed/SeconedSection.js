import React from 'react'
import LandingPageImage2 from '../../SVG/LandingPage2.svg'
import Icon1 from '../../SVG/Icon1.svg'
// border-solid border-4 border-pink-400
const SeconedSection = () => {
  return (
    <div className='flex sm:flex-col md:flex-row md:w-auto sm:w-smwidth md:h-auto sm:h-smheight2 font-h2family  md:ml-32 sm:ml-12 '>
        
            <div className='mt-12 md:w-auto md:h-auto sm:w-smdatadivwidth sm:h-smdatadivheight2 md:ml-auto   sm:ml-16'>
               <h2 className='text-Blue1 md:w-seconedh2width sm:w-smdatah2width md:text-4xl sm:text-8xl md:font-medium sm:font-semibold leading-seconedh2height md:ml-10 sm:ml-1 '>Light, Fast & Powerful</h2>
              <div className= ' text-Blue5 md:w-seconedh2width sm:w-smdatapwidth md:text-base sm:text-5xl md:font-normal sm:font-medium md:leading-seconedpheight sm:leading-sevenh1height md:mt-auto sm:mt-4 md:ml-10 sm:ml-3'>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                      Donec quam felis,ultricies nec, pellentesque eu,
                      pretium quis, sem. Nulla consequat massa quis enim.
                  </p>
              </div>
              <div className=' flex mt-16  md:h-auto sm:h-smdatadivheight3 md:ml-10 sm:ml-2'>
                      <div className=''>
                          <img className='flex-shrink-0 md:w-auto sm:w-28 ' src={Icon1}></img>
                          <h5 className=' mt-2 w-seconedh5width md:text-base sm:text-3xl font-medium leading-seconedpheight text-Blue1'>Title Goes Here</h5>
                         <div  className=' md:w-2/3  sm:w-thirdh2width '>
                          <p className='mt-1 md:text-xs sm:text-2xl md:font-normal  sm:font-medium leading-seconedp2height text-Gray1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. 
                          </p>
                          </div>

                      </div>

                      <div className='mr-11 md:ml-auto sm:ml-10'>
                          <img className='ml-0 md:w-auto sm:w-28 'src={Icon1}></img>
                          <h5 className=' mt-2 w-seconedh5width md:text-base sm:text-3xl font-medium leading-seconedpheight text-Blue1'>Title Goes Here</h5>
                          <div  className=' md:w-2/3  sm:w-thirdh2width '>
                          <p className='mt-1 md:text-xs sm:text-2xl md:font-normal  sm:font-medium leading-seconedp2height text-Gray1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. 
                          </p>
                          </div>
                      </div>
              </div>
            </div>
            <div className='flex-shrink-0 mr-24   md:w-auto sm:w-smpicturedivw md:h-auto sm:h-smdatadivheight4'>
              <img src={LandingPageImage2} alt='image2' className='md:w-auto md:h-auto sm:h-smpicheight2 md:ml-auto sm:ml-16 sm:w-smpicwidth2  '></img>
            </div>
                  
               
                  

        
        
    </div>
  )
}

// border-solid border-2 border-yellow-600
export default SeconedSection