import React from 'react'

const IntroductionPart = () => {
  return (
      <div className='md:w-full sm:w-smwidth2 font-h2family  md:ml-24 sm:ml-8 md:mt-28 sm:mt-3  md:h-auto sm:h-smheight3 sm:absolute md:sticky sm:top-40  '>
          <h2 className='text-Blue1 border-solid border-2 border-indigo-600 md:w-mediumscreenwidth md:text-buttonfontsize sm:text-6xl sm:w-smintroh2width md:mx-0 sm:mx-20 not-italic md:font-semibold sm:font-bold leading-smintropline  tracking-h2letter '>Introduce Your Product Quickly & Effectively</h2>
          <div className='border-solid border-2 border-indigo-600 md:text-2xl sm:text-5xl md:font-normal sm:font-medium md:leading-7 sm:leading-smintropline md:w-mediumscreenwidth sm:w-smintropwidth text-Blue2 mt-4 md:mx-0 sm:mx-20'>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis,
                  sem. Nulla consequat massa quis enim.
              </p>
          </div>
          <div className='flex md:leading-purchaseheight sm:leading-10 md:text-base sm:text-3xl font-h2family font-medium mt-10 md:ml-0 sm:ml-20'>
            <button className='md:w-uibuttonwidth sm:w-seconedh5width text-white1 bg-bg-blue mr-2'>
              Purchase UI Kit
            </button>
            <button className='md:w-uibuttonwidth sm:w-seconedh5width text-Blue4 md:ml-2 sm:ml-5 border-solid border-2 border-Blue4 '>
              Learn More
            </button>
          </div>

      </div>
  )
}

// border-solid border-2 border-indigo-600'

export default IntroductionPart