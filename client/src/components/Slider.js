import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/images/intro.jpeg'

export default function Slider() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true}>
            <div className='md:h-[34rem] w-full bg-slate-300'>
                <img src={img1} alt='' />
            </div>
            <div className='md:h-[34rem] w-full bg-slate-300'>
                <img src={img1} alt='' />

            </div>
            <div className='md:h-[34rem] w-full bg-slate-300'>
                <img src={img1} alt='' />

            </div>
            <div className='md:h-[34rem] w-full bg-slate-300'>
                <img src={img1} alt='' />

            </div>
            <div className='md:h-[34rem] w-full bg-slate-300'>
                <img src={img1} alt='' />

            </div>
        </Carousel>
    )
}
