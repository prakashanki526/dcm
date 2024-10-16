import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Location from '../components/Location'
import Footer from '../components/Footer'
import GetInTouch from '../components/GetInTouch'

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='z-0 tracking-wide md:tracking-wide'>
            <Navbar page="contact" />

            <div className='mt-[5.8rem]'>
                    <Location />
                    <GetInTouch />
            </div>

            <Footer />
        </div>
    )
}
