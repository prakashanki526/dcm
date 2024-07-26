import React, { useState } from 'react'
import whatsappIcon from '../assets/icons/whatsapp-fill.svg'
import phoneIcon from '../assets/icons/phone-line.svg'
import mailIcon from '../assets/icons/mail-line.svg'
import FacebookIcon from './icons/FacebookIcon'
import TwitterIcon from './icons/TwitterIcon'
import LinkedinIcon from './icons/LinkedinIcon'
import InstaIcon from './icons/InstaIcon'



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='fixed top-0 w-full z-10 bg-white'>
            <div className='px-3 md:px-24 lg:px-48 flex items-center justify-between py-1'>
                <div>
                    <div className='md:flex space-x-2 text-black hidden items-center'>
                        <a href='#' target='_blank'>
                            <FacebookIcon height="18px" fill="#bdbdbd" />
                        </a>

                        <a href='#' target='_blank'>
                            <TwitterIcon height='18px' fill='#bdbdbd' />
                        </a>
                        <a href='#' target='_blank'>
                            <LinkedinIcon height='18px' fill='#bdbdbd' />
                        </a>
                        <a href='#' target='_blank'>
                            <InstaIcon height='18px' fill='#bdbdbd' />
                        </a>
                    </div>
                </div>

                <div className='flex space-x-4'>
                    <div className='flex space-x-1 text-black items-center'>
                        <img src={whatsappIcon} alt="whatsapp"></img>
                        <img src={phoneIcon} alt="phone"></img>
                        <a href='tel:+91 9810619956' target='_blank' className='hover:text-[#1ba6f7]'>+91- 9810619956</a>
                    </div>
                    <div className='flex space-x-1 text-black items-center'>
                        <img src={mailIcon} alt="email"></img>
                        <a href='mailto:info@finessse.digital' target='_blank' className='hover:text-[#1ba6f7]'>info@finessse.digital</a>
                    </div>

                </div>
            </div>
            <nav className="px-3 md:px-24 lg:px-48 py-4 shadow-lg">
                <div className="container mx-auto flex justify-between items-center text-lg">
                    <div className="text-lg font-bold">SECURITY</div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="hover:text-[#1ba6f7]">Home</a>
                        <a href="#" className="hover:text-[#1ba6f7]">About</a>
                        <a href="#" className="hover:text-[#1ba6f7]">Services</a>
                        <a href="#" className="hover:text-[#1ba6f7]">Contact</a>
                    </div>
                    <div className="px-3 md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
                >
                    <a href="#" className="block px-4 py-2 hover:text-[#1ba6f7]">Home</a>
                    <a href="#" className="block px-4 py-2 hover:text-[#1ba6f7]">About</a>
                    <a href="#" className="block px-4 py-2 hover:text-[#1ba6f7]">Services</a>
                    <a href="#" className="block px-4 py-2 hover:text-[#1ba6f7]">Contact</a>
                </div>
            </nav>
        </div>
    )
}
