import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './componenets/Header';
import Hero from './componenets/Hero';
import FeatureSection from './componenets/FeatureSection';
import CallToAction from './componenets/CallToAction';
import image1 from '/src/assets/image1.png';
import image2 from "/src/assets/image2.png";
import image3 from "/src/assets/image3.png";
import Calendly from './componenets/Calendly';
import Footer from './componenets/Footer';

const Content = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const handleJoinWait = () => {
    navigate('/customerform');
  };
  const handleJoinMentor = () => {
    navigate('/mentor');
  };

  return (
    <div className='font-poppins bg-white text-black '>
      <Header isVisible={isVisible} />
      <Hero isVisible={isVisible} handleJoinWait={handleJoinWait} handleJoinMentor={handleJoinMentor} />
      <section className='space-y-16 md:space-y-24 lg:space-y-36 px-4 md:px-6'>
        <FeatureSection
          imageSrc={image1}
          title={<>
          At Your Fingertips: <br /> Experts in Every Field
          </>}
          description={
            <>
              Want to start learning coding , dive into freelancing, or eager to acquire new skills? Work faster with a Expert who will offer advice and guidance tailored to your ambitions. Unlock your potential with Flux.
            </>
          }
        />
        <FeatureSection
          imageSrc={image2}
          title="Affordable and Answers Personalized to You!"
          description={
            <>
              Why settle for generic solutions when you can get personalized guidance from Flux experts tailored to your unique needs—all at an affordable cost! Stop sifting through vague information online and connect with seasoned professionals who understand your situation and provide specific advice.
            </>
          }
          imageRight
        />
      </section>
      <div className='px-4 md:px-6'>
        <CallToAction handleJoinWait={handleJoinWait} />
        <FeatureSection
            imageSrc={image3}
            title={<>
              Get to Know Flux <br />
              Book a Call with the Founders!

              </>}
            description={
              <>
                Curious about our mission and how Flux is transforming student learning? Connect with our founders for an exclusive look into our vision! <br /> <br />
                Ask questions, share your thoughts, and learn how you can be part of our journey. <br /> <br />
                Ready to join us? Book your call now! 
              </>
            }
            imageRight
          />
      </div>
      
        <div className='flex justify-center my-8'><Calendly/></div>
      
      <Footer></Footer>
    </div>
  );
};

export default Content;