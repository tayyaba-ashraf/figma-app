import React from 'react';
import Header from '../header/Header';
import IntroductionPart from '../introduction/IntroductionPart';
import SeconedSection from '../seconed/SeconedSection';
import ThirdSection from '../third/ThirdSection';
import FourthSection from '../fourth/FourthSection';
import FifthSection from '../fifth/FifthSection';
import SeventhSection from '../seventh/SeventhSection';


const LandingPage = () => {
  return (
    <div className="flex flex-col ">
      <div className='LandingPageImage1 md:mt-auto sm:mt-taybaaaaaaaaaaaaaaaaaaaaaaaaaaaa '>
        <Header/>
        <IntroductionPart/>
      </div>
        
      <SeconedSection/>
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SeventhSection />
         
      
          
    </div>
  );
};

export default LandingPage;
