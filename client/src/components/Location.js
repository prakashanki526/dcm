import React from 'react'
import locationIcon from '../assets/icons/map-pin-line.png'
import Heading from './Heading'
import { Fade } from 'react-awesome-reveal'

export default function Location() {
    return (
        <div className='section px-3 md:px-24 lg:px-48 py-4 md:py-8 lg:py-10'>
            <Fade direction="up" triggerOnce>
                <Heading text="CONTACT US" />
            </Fade>

            <Fade direction="up" triggerOnce>


            <div className='flex flex-col md:flex-row w-full justify-center mt-2 md:mt-8'>
                <div className='w-full md:w-[50%] aspect-square flex flex-col justify-center items-center box-border md:justify-start md:items-start'>
                    <div className='flex'>
                        <div className=''>
                            <div className='flex flex-col items-center lg:items-baseline justify-center md:items-start'>
                                <div className='font-bold text-2xl'>KOLKATA</div>
                                <div className='font-bold text-center text-orange-600'>DCM Vigilance & Maintenance Services Pvt.Ltd.</div>
                                <div className='text-center'>Kaikhali Chiriamore, P.O. & P.S Airport, Kolkata - 700052</div>
                            </div>

                            <div className='flex flex-col items-center justify-center my-2 space-y-2 lg:space-y-0 md:flex-row lg:items-start md:justify-between'>
                                <div className='flex flex-col justify-center items-center md:items-start'>
                                    <div className='font-bold text-2xl'>Call</div>
                                    {/* <div className='font-bold'>Name</div> */}
                                    <div>+91-(033) 4603 1489</div>
                                </div>
                                <div className='flex flex-col justify-center items-center md:items-start'>
                                    <div className='font-bold text-2xl'>Email Us</div>
                                    <div>abc@aejbj.digital</div>
                                    <div>info@fekajb.digital</div>

                                    <div className='mt-2 flex justify-center items-center cursor-pointer'>
                                        <a href='https://maps.app.goo.gl/qucSXaQTPwCKnCaq7' target="_blank" rel="noreferrer" className='flex'>
                                            <img src={locationIcon} alt='location' className='mr-2'></img>
                                            Directions
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[50%] aspect-square'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.510998763963!2d88.43596267507964!3d22.634728779447503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e3572bc3115%3A0xa0b904b1425499b0!2sDCM%20Vigilance%20%26%20Maintenance%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1722006574210!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='h-full w-full' title='map'></iframe>
                </div>

            </div>
            </Fade>
        </div>
    )
}
