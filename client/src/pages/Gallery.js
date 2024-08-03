import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PhotoGallery from '../components/PhotoGallery'

export default function Gallery() {
  return (
    <div className='z-0 tracking-wide md:tracking-widest'>
            <Navbar page="gallery" />

            <div className='mt-[5.8rem]'>
            <div className='section px-3 md:px-24 lg:px-48 py-4 md:py-8 lg:py-10 overflow-hidden'>
                <div className=''>
                    <PhotoGallery />
                </div>
            </div>
                    
            </div>

            <Footer />
        </div>
  )
}
