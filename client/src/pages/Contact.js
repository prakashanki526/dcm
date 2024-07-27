import React from 'react'
import Navbar from '../components/Navbar'
import Location from '../components/Location'
import Footer from '../components/Footer'

export default function Contact() {
    return (
        <div className='z-0 tracking-wide md:tracking-widest'>
            <Navbar page="contact" />

            <div className='mt-[5.8rem]'>
                
                    <Location />
            </div>

            <Footer />
        </div>
    )
}
