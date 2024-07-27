import React, { useState } from 'react'
import whatsappIcon from '../assets/icons/whatsapp-fill.svg'
import phoneIcon from '../assets/icons/phone-line.svg'
import mailIcon from '../assets/icons/mail-line.svg'
import FacebookIcon from './icons/FacebookIcon'
import TwitterIcon from './icons/TwitterIcon'
import LinkedinIcon from './icons/LinkedinIcon'
import InstaIcon from './icons/InstaIcon'
import { useNavigate } from 'react-router-dom'



export default function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='fixed top-0 w-full z-10 bg-white'>
            <div className='px-3 md:px-24 lg:px-48 flex items-center justify-between py-1 bg-orange-600 text-white'>
                <div>
                    <div className='md:flex space-x-2 hidden items-center'>
                        <a href='#' target='_blank'>
                            <FacebookIcon height="18px" fill="#ffffff" />
                        </a>

                        <a href='#' target='_blank'>
                            <TwitterIcon height='18px' fill='#ffffff' />
                        </a>
                        <a href='#' target='_blank'>
                            <LinkedinIcon height='18px' fill='#ffffff' />
                        </a>
                        <a href='#' target='_blank'>
                            <InstaIcon height='18px' fill='#ffffff' />
                        </a>
                    </div>
                </div>

                <div className='flex space-x-4'>
                    <div className='flex space-x-1 items-center'>
                        <img src={whatsappIcon} alt="whatsapp"></img>
                        <img src={phoneIcon} alt="phone"></img>
                        <a href='tel:+91-(033) 4603 1489' target='_blank' className='hover:text-[#bdbdbd]'>+91-(033)46031489</a>
                    </div>
                    <div className='flex space-x-1 items-center'>
                        <img src={mailIcon} alt="email"></img>
                        <a href='mailto:email@dcm.com' target='_blank' className='hover:text-[#bdbdbd]'>email@dcm.com</a>
                    </div>

                </div>
            </div>
            <nav className="px-3 md:px-24 lg:px-48 py-4 shadow-lg">
                <div className="container mx-auto flex justify-between items-center text-lg">
                    <div className="text-lg font-bold">SECURITY</div>
                    <div className="hidden md:flex space-x-8">
                        <a onClick={()=>navigate('/')} className={`hover:text-orange-600 cursor-pointer ${props.page === "home" && 'text-orange-600'}`}>Home</a>
                        <a onClick={()=>navigate('/')} className={`hover:text-orange-600 cursor-pointer ${props.page === "hme" && 'text-orange-600'}`}>About</a>
                        <a onClick={()=>navigate('/our-services')} className={`hover:text-orange-600 cursor-pointer ${props.page === "our-services" && 'text-orange-600'}`}>Our Services</a>
                        <a onClick={()=>navigate('/contact-us')} className={`hover:text-orange-600 cursor-pointer ${props.page === "contact" && 'text-orange-600'}`}>Contact Us</a>
                        <a onClick={()=>navigate('/our-team')} className={`hover:text-orange-600 cursor-pointer ${props.page === "our-team" && 'text-orange-600'}`}>Our Team</a>
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
                    <a onClick={()=>navigate('/')} className="block px-4 py-2 hover:text-orange-600">Home</a>
                    <a onClick={()=>navigate('/')} className="block px-4 py-2 hover:text-orange-600">About</a>
                    <a onClick={()=>navigate('/our-services')} className="block px-4 py-2 hover:text-orange-600">Our Services</a>
                    <a onClick={()=>navigate('/contact-us')} className="block px-4 py-2 hover:text-orange-600">Contact Us</a>
                    <a onClick={()=>navigate('/our-team')} className="block px-4 py-2 hover:text-orange-600">Contact Us</a>
                </div>
            </nav>
        </div>
    )
}
