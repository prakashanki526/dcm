import React, { useState } from 'react'
import Heading from './Heading'
import { Slide } from 'react-awesome-reveal'
import img1 from '../assets/images/slider/img1.jpg';
import img2 from '../assets/images/slider/img2.jpeg';
import img3 from '../assets/images/slider/img3.jpeg';
import img4 from '../assets/images/slider/img4.jpeg';
import img5 from '../assets/images/slider/img5.jpeg';
import img6 from '../assets/images/slider/img6.jpeg';
// import { motion } from 'framer-motion';
const images = require.context('../assets/aimages', true);
const imageList = images.keys().map(image => images(image));

export default function PhotoGallery() {
    const [isFocused, setIsFocused] = useState(false);

    function handleFocus() {
        setIsFocused(!isFocused);
    }

    return (
        <div className=''>
            <Heading text="GALLERY" />

            <div className='w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap items-center justify-between'
            >
                {imageList.map((image, index)=>
                     <Slide direction="up" duration={1500} triggerOnce>
                     <div className='group w-full relative my-2 shadow-md hover:scale-105 transition-all duration-700' onMouseEnter={handleFocus} onMouseLeave={handleFocus}>
                         <img src={image} alt='image1' className='h-full w-full'></img>
                     </div>
                 </Slide>
                )}
                {/* <Slide direction="right" duration={1500} triggerOnce>
                    <div className='group w-full relative my-2 shadow-md hover:scale-105 transition-all duration-700' onMouseEnter={handleFocus} onMouseLeave={handleFocus}>
                        <img src={img1} alt='image1' className='h-full w-full'></img>
                    </div>
                </Slide>
                <Slide direction="left" duration={1500} triggerOnce>
                    <div className='group w-full relative my-2 shadow-md hover:scale-105 transition-all duration-700' onMouseEnter={handleFocus} onMouseLeave={handleFocus}>
                        <img src={img2} alt='image2' className='h-full w-full'></img>
                    </div>
                </Slide>
                <Slide direction="right" duration={1500} triggerOnce>
                    <div className='group w-full relative my-2 shadow-md hover:scale-105 transition-all duration-700' onMouseEnter={handleFocus} onMouseLeave={handleFocus}>
                        <img src={img3} alt='image3' className='h-full w-full'></img>
                    </div>
                </Slide>
                <Slide direction="left" duration={1500} triggerOnce>
                    <div className='group w-full relative my-2 shadow-md hover:scale-105 transition-all duration-700' onMouseEnter={handleFocus} onMouseLeave={handleFocus}>
                        <img src={img4} alt='image4' className='h-full w-full'></img>
                    </div>
                </Slide>
                <Slide direction="right" duration={1500} triggerOnce>
                    <div className='group w-full relative my-2 shadow-md hover:scale-105 transition-all duration-700' onMouseEnter={handleFocus} onMouseLeave={handleFocus}>
                        <img src={img5} alt='image5' className='h-full w-full'></img>
                    </div>
                </Slide>
                <Slide direction="left" duration={1500} triggerOnce>
                    <div className='group w-full relative my-2 shadow-md hover:scale-105 transition-all duration-700' onMouseEnter={handleFocus} onMouseLeave={handleFocus}>
                        <img src={img6} alt='image6' className='h-full w-full'></img>
                    </div>
                </Slide> */}
            </div>
        </div>
    )
}
