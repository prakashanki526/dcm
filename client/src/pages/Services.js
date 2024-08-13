import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Service from '../components/Service'


export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='z-0 tracking-wide md:tracking-wide'>
      <Navbar page="our-services" />

      <div className='mt-[5.8rem]'>
        <Service />
      </div>

      <Footer />
    </div>
  )
}
