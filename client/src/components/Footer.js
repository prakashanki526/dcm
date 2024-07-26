import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import InstaIcon from './icons/InstaIcon'
import LinkedinIcon from './icons/LinkedinIcon'
import TwitterIcon from './icons/TwitterIcon'
import FacebookIcon from './icons/FacebookIcon'


export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center w-full py-4 px-3 md:px-24 lg:px-48 bg-white'>


                <div className='w-full mb-8 border-b-2 hidden lg:block'></div>

                <div className='flex flex-col lg:flex-row items-center gap-10 w-full'>
                    <div className='flex flex-1 lg:flex flex-col lg:flex-row items-center'>
                        <div className='flex flex-col items-center gap-3'>
                            <Fade direction='up' delay={1} triggerOnce>
                                <h1 className='text-2xl tracking-wide text-left px-4'>STAY CONNECTED</h1>
                            </Fade>

                            <div className='flex space-x-1 md:space-x-3 socail-m'>

                                <Fade direction='up' delay={1} triggerOnce>
                                    <a href='https://www.facebook.com/FinessseInteractiveSolution' target='_blank' className='flex'>
                                        <div className='h-8 w-9 cursor-pointer'>
                                            <FacebookIcon height="30px" fill="#606060" />
                                        </div>
                                        {/* Like Us */}
                                    </a>
                                    <a href='https://twitter.com/finessseim' target='_blank' className='flex'>
                                        <div className='h-8 w-9 cursor-pointer'>
                                            <TwitterIcon height="30px" fill="#606060" />
                                        </div>
                                        {/* Follow Us */}
                                    </a>
                                    <a href='https://www.linkedin.com/company/1568398/' target='_blank' className='flex'>
                                        <div className='h-8 w-9 cursor-pointer'>
                                            <LinkedinIcon height="30px" fill="#606060" />
                                        </div>
                                        {/* Join Us */}
                                    </a>
                                    <a href='https://www.instagram.com/finessseinteractive/' target='_blank' className='flex'>
                                        <div className='h-8 w-9 cursor-pointer'>
                                            <InstaIcon height="30px" fill="#606060" />
                                        </div>
                                        {/* Follow Us */}
                                    </a>
                                </Fade>
                            </div>
                            <div className='text-[#1ba6f7] text-md font-bold px-4 hidden lg:block'>DCM Vigilance & Maintenance Services Pvt. Ltd.</div>
                        </div>
                    </div>

                    <div className='flex flex-1 flex-col items-center lg:items-end w-full gap-3'>
                        <Fade direction='up' triggerOnce>
                            <div className='text-[#1ba6f7] text-sm font-bold md:hidden'>Finessse Interactive Solutions Pvt. Ltd.</div>

                            <div className='text-center md:text-right'>
                                <span className='text-[#1ba6f7] text-sm'>Send Mail: </span><a href="mailto:deepak@finessse.digital">deepak@finessse.digital</a> | <a href="mailto:info@finessse.digital">info@finessse.digital</a>
                            </div>

                            <div className=''>
                                <span className='text-[#1ba6f7] text-sm'>Call Us: </span><a href='tel:+91 9810619956'>+91- 9810619956</a>
                            </div>

                            <div className='text-sm my-4 text-gray-500 text-center'>
                                © 2024 DCM Vigilance & Maintenance Services Pvt. Ltd
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
  )
}
