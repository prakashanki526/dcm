import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
    return (
        <Carousel>
            <div className='h-72 md:h-[28rem] w-full bg-slate-300'>
                <p className="">Legend 1</p>
            </div>
            <div className='h-72 md:h-[28rem] w-full bg-slate-300'>
                <p className="">Legend 2</p>
            </div>
            <div className='h-72 md:h-[28rem] w-full bg-slate-300'>
                <p className="">Legend 3</p>
            </div>
        </Carousel>
    )
}
