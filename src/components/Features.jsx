import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { animateWithGsap } from '../utils/animations';
import {explore1Img, explore2Img, exploreVideo} from '../utils'
import { useRef } from 'react';

const Features = () => {
    const videoRef = useRef(null);
    useGSAP( ( ) => {
        gsap.to("#exploreVideo", {
            scrollTrigger: {
              trigger: "#exploreVideo",
              toggleActions: 'play pause reverse restart',
              start: '-10% bottom',
              onComlete: () => {
                videoRef.current.play();
              }
            }
          })
        animateWithGsap('#features_title', {y: 0, opacity: 1});
        animateWithGsap('.g-grow', {scale: 1, opacity: 1, ease: 'power1'}, {scrub: 5.5});
        animateWithGsap('.g-text', {y: 0, opacity: 1, ease: 'power2.inOut', duration: 1});
    },[]);

  return (
    <section className="Features h-full common-padding bg-zinc realtive overflow-hidden">
        <div className="screen-max-width">
            <div className="mb-12 w-full">
                <h1 id='features_title' className='section-heading'>Explore the full story.</h1>
            </div>
        </div>
        <div className="flex flex-col jusitfy-center items-center overflow-hidden">
            <div className="mt-32 mb-24 pl-24">
                <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone.</h2>
                <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in Titanium.</h2>
            </div>
            <div className="flex-center flex-col sm:px-10">
                <div className='relative h-[50vh] w-full flex items-center'>
                    <video playInline id='exploreVideo' className='h-full w-full object-cover object-center' preload='none' muted autoPlay ref={videoRef} >
                        <source src={exploreVideo} type='video/mp4'/>
                    </video>
                </div>
                <div className="flex flex-col w-full relative">
                    <div className="feature-video-container">
                        <div className="overflow-hidden flex-1 h-[50vh] ">
                            <img src={explore1Img} alt="titanium 1" className='feature-video g-grow'/>
                        </div>
                        <div className="overflow-hidden flex-1 h-[50vh] ">
                            <img src={explore2Img} alt="titanium 2" className='feature-video g-grow'/>
                        </div>
                    </div>
                    <div className="feature-text-container">
                        <div className="flex-1 flex-center g-text">
                            <p className="feature-text g-text">iPhone 15 Pro is {' '}
                            <span className='text-white'>the first iPhone to feature aerospace grade Titanium design</span>,
                                using the same alloy that spacecrafts use for mission to Mars.
                            </p>
                        </div>
                        <div className="flex-1 flex-center g-text">
                            <p className="feature-text g-text">
                                Titanium has one of the best strenght-to-weigth ratios of any metal, making this our{' '}
                                <span className='text-white'>lightest pro models ever</span>,
                                You will feel the difference the moment you pick it up.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features