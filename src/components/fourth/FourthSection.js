import React from 'react'
import LandingPageImage4 from '../../SVG/LandingPage4.svg'

const FourthSection = () => {
  return (
    <div className='flex sm:flex-col md:flex-row font-h2family md:w-auto sm:w-smwidth  md:h-auto sm:h-smheight mt-24 md:ml-36 sm:ml-12 '>

        
    <div className='flex-shrink-0 mb-16  md:w-auto sm:w-smpicturedivw md:h-auto sm:h-smpicturedivh2'>
        <img src={LandingPageImage4} alt='image2' className='md:w-auto md:h-auto md:ml-auto sm:w-smpicwidth sm:ml-16'></img>
    </div>
    <div className='md:w-auto md:h-auto sm:w-smdatadivwidth sm:h-smdatadivheight md:mt-16 md:ml-36 sm:mt-5 sm:ml-16 '>
        <h2 className='text-Blue1 md:w-thirdh2width sm:w-smdatah2width md:text-4xl sm:text-8xl md:font-medium sm:font-semibold leading-seconedh2height md:ml-auto sm:ml-6'>Light, Fast & Powerful</h2>
        <div className=' text-Blue5 md:w-thirdh2width sm:w-smdatapwidth md:text-base sm:text-5xl md:font-normal sm:font-medium md:leading-seconedpheight sm:leading-sevenh1height md:mt-auto sm:mt-4 md:ml-auto sm:ml-6'>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Donec quam felis,ultricies nec, pellentesque eu,Donec quam felis,ultricies nec, pellentesque eu,
                  pretium quis, sem. Nulla consequat massa quis enim.
            </p>
        </div>

    </div>






</div>
  )
}

export default FourthSection