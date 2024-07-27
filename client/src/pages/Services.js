import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Service from '../components/Service'


export default function Services() {
  return (
    <div className='z-0 tracking-wide md:tracking-widest'>
            <Navbar page="our-services" />

            <div className='mt-[5.8rem]'>
                <Service />
            </div>

            <Footer />
        </div>
  )
}
