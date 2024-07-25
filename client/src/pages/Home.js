import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

export default function Home() {
    return (
        <div className='z-0'>
            <Navbar />
            <div className='mt-[5.8rem]'>
                <Slider />
            </div>
            <div className='h-96'></div>
        </div>
    )
}
