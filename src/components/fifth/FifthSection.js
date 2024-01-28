import React from 'react'
import LandingPageImage5 from '../../SVG/LandingPage5.svg'

const FifthSection = () => {
  return (
    <div className='flex sm:flex-col md:flex-row md:w-auto sm:w-smwidth md:h-auto sm:h-smheight font-h2family mt-24 md:ml-36 sm:ml-12 '>

        
        <div className='flex-shrink-0 mb-16  md:w-auto sm:w-smpicturedivw md:h-auto sm:h-smpicturedivh2'>
              <img src={LandingPageImage5} alt='image5' className='md:w-auto md:h-auto md:ml-auto sm:w-smpicwidth sm:ml-6'></img>
        </div>
        <div className='md:w-auto md:h-auto sm:w-smdatadivwidth sm:h-smdatadivheight md:mt-16 sm:mt-2  md:ml-64 sm:ml-16'>
            <h2 className='text-Blue1 md:w-thirdh2width sm:w-smdatah2width md:text-4xl sm:text-8xl md:font-medium sm:font-semibold  leading-seconedh2height md:ml-auto sm:ml-6'>Light, Fast & Powerful</h2>
            <div className=' text-Blue5 md:w-thirdh2width sm:w-smdatapwidth md:text-base sm:text-5xl md:font-normal sm:font-medium md:mt-auto sm:mt-4 md:ml-auto sm:ml-6 md:leading-seconedpheight sm:leading-sevenh1height'>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                      Donec quam felis,ultricies nec, pellentesque eu,
                      pretium quis, sem. Nulla consequat massa quis enim.
                </p>
            </div>
            <div className='mt-5  md:ml-0 sm:ml-6 md:w-purchase1buttonwidth sm:w-smdatapurchase1buttonwidth  text-center text-white1 md:text-sm sm:text-4xl font-medium  md:leading-6 sm:leading-10 bg-bg-blue'>
                <button>Purchase Now</button>
            </div>

        </div>
 </div>
  )
}

export default FifthSection