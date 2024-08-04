import React, { useState } from 'react';
import whatsappIcon from '../assets/icons/whatsapp-fill.svg';
import phoneIcon from '../assets/icons/phone-line.svg';
import mailIcon from '../assets/icons/mail-line.svg';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import InstaIcon from './icons/InstaIcon';
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='fixed top-0 w-full z-50 bg-white'>
            <div className='px-3 md:px-16 lg:px-40 flex items-center justify-between py-1  bg-orange-500 text-white'>
                <div>
                    <div className='md:flex space-x-2 hidden items-center'>
                        <a href='https://facebook.com' target='_blank' rel="noreferrer">
                            <FacebookIcon height="18px" fill="#ffffff" />
                        </a>
                        <a href='https://twitter.com' target='_blank' rel="noreferrer">
                            <TwitterIcon height='18px' fill='#ffffff' />
                        </a>
                        <a href='https://linkedin.com' target='_blank' rel="noreferrer">
                            <LinkedinIcon height='18px' fill='#ffffff' />
                        </a>
                        <a href='https://instagram.com' target='_blank' rel="noreferrer">
                            <InstaIcon height='18px' fill='#ffffff' />
                        </a>
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <div className='flex space-x-1 items-center'>
                        <img src={whatsappIcon} alt="whatsapp" />
                        <img src={phoneIcon} alt="phone" />
                        <a href='tel:+91-(033) 4603 1489' target='_blank' rel="noreferrer" className='hover:text-[#bdbdbd]'>+91-(033)46031489</a>
                    </div>
                    <div className='flex space-x-1 items-center'>
                        <img src={mailIcon} alt="email" />
                        <a href='mailto:email@dcm.com' target='_blank' rel="noreferrer" className='hover:text-[#bdbdbd]'>email@dcm.com</a>
                    </div>
                </div>
            </div>
            <nav className="px-3 md:px-16 lg:px-40 py-4 shadow-lg">
                <div className="container mx-auto flex justify-between items-center text-lg">
                    <div className="text-lg font-bold">SECURITY</div>
                    <div className="hidden lg:flex space-x-7">
                        <div onClick={() => navigate('/')} className={`hover:text-orange-600 cursor-pointer ${props.page === "home" && 'text-orange-600'}`}>Home</div>
                        <div onClick={() => navigate('/about')} className={`hover:text-orange-600 cursor-pointer ${props.page === "about" && 'text-orange-600'}`}>About Us</div>
                        <div onClick={() => navigate('/our-services')} className={`hover:text-orange-600 cursor-pointer ${props.page === "our-services" && 'text-orange-600'}`}>Our Services</div>
                        <div onClick={() => navigate('/gallery')} className={`hover:text-orange-600 cursor-pointer ${props.page === "gallery" && 'text-orange-600'}`}>Gallery</div>
                        <div onClick={() => navigate('/contact-us')} className={`hover:text-orange-600 cursor-pointer ${props.page === "contact" && 'text-orange-600'}`}>Contact Us</div>
                        <div onClick={() => navigate('/our-team')} className={`hover:text-orange-600 cursor-pointer ${props.page === "our-team" && 'text-orange-600'}`}>Our Team</div>
                        <div onClick={() => navigate('/careers')} className={`hover:text-orange-600 cursor-pointer ${props.page === "careers" && 'text-orange-600'}`}>Careers</div>
                    </div>
                    <div className="px-3 lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none"
                        >
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
                >
                    <div onClick={() => navigate('/')} className="block px-4 py-2 hover:text-orange-600">Home</div>
                    <div onClick={() => navigate('/about')} className="block px-4 py-2 hover:text-orange-600">About Us</div>
                    <div onClick={() => navigate('/our-services')} className="block px-4 py-2 hover:text-orange-600">Our Services</div>
                    <div onClick={() => navigate('/gallery')} className="block px-4 py-2 hover:text-orange-600">Gallery</div>
                    <div onClick={() => navigate('/contact-us')} className="block px-4 py-2 hover:text-orange-600">Contact Us</div>
                    <div onClick={() => navigate('/our-team')} className="block px-4 py-2 hover:text-orange-600">Our Team</div>
                    <div onClick={() => navigate('/careers')} className="block px-4 py-2 hover:text-orange-600">Careers</div>
                </div>
            </nav>
        </div>
    );
}
