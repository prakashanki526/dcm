import React from 'react'
import Navbar from '../components/Navbar'
import Location from '../components/Location'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className='z-0 tracking-wide md:tracking-widest'>
        <Navbar page="contact" />

        <div className='section px-3 md:px-24 lg:px-48 py-4 md:py-8 lg:py-10 mt-[5.8rem]'>
            <h1 className='text-2xl md:text-4xl text-center md:mb-8 mt-4'>CONTACT US</h1>
            <Location />
        </div>

        <Footer />
    </div>
  )
}
