import React from 'react'
import LandingPageImage3 from '../../SVG/LandingPage3.svg'
// border-solid border-4 border-pink-400
const ThirdSection = () => {
  return (
    <div className= 'flex sm:flex-col sm:h-smheight sm:w-smwidth sm:ml-12 md:flex-row md:w-auto md:h-auto  font-h2family mt-24 md:ml-36 '>

        
        <div className='flex-shrink-0 mb-16  md:w-auto md:h-auto sm:w-smpicturedivw sm:h-smpicturedivh '>
            <img src={LandingPageImage3} alt='image2' className='md:w-auto md:h-auto md:ml-auto sm:w-smpicwidth sm:ml-16'/>
        </div>
        <div className='md:w-auto md:h-auto md:mt-16 md:ml-48   sm:w-smdatadivwidth sm:h-smdatadivheight sm:mt-5 sm:ml-16'>
            <h2 className='text-Blue1 md:w-thirdh2width sm:w-smdatah2width md:text-4xl sm:text-8xl md:font-medium sm:font-semibold leading-seconedh2height md:ml-auto sm:ml-6'>Light, Fast & Powerful</h2>
            <div className=' text-Blue5 md:w-thirdh2width sm:w-smdatapwidth md:text-base sm:text-5xl md:font-normal sm:font-medium md:leading-seconedpheight sm:leading-sevenh1height md:mt-auto sm:mt-4 md:ml-auto sm:ml-6'>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                      Donec quam felis,ultricies nec, pellentesque eu, Donec quam felis,ultricies nec, pellentesque eu,
                      pretium quis, sem. Nulla consequat massa quis enim.pretium quis, sem. Nulla consequat massa quis enim.
                      
                      
                </p>
            </div>

        </div>






    </div>
  )
}

export default ThirdSection