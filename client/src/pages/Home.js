import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import { motion } from 'framer-motion';
import ArrowRight from '../components/icons/ArrowRight';
import { Slide, Fade } from "react-awesome-reveal";
import intoImg from '../assets/images/intro.jpeg'
import Footer from '../components/Footer';
import Service from '../components/Service';
import Location from '../components/Location';


export default function Home() {
    return (
        <div className='z-0 tracking-wide md:tracking-wider'>
            <Navbar page="home" />
            <div className='mt-[5.8rem]'>
                {/* <Slider /> */}
                <div className='h-80 md:h-[38rem] w-full bg-hero bg-cover bg-center'>
                    <div className='h-full w-full bg-black opacity-60 flex items-center justify-center flex-col'>
                        <div className='flex flex-col justify-center items-center tracking-widest'>
                            <motion.div animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 2, delay: 1 }} initial={{ y: -100, opacity: 0 }} className=' text-white font-bold transition-all leading-tight relative text-[3rem] md:text-[4rem]'>
                                DCM
                            </motion.div>
                            <motion.div animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 2, delay: 3 }} initial={{ y: 100, opacity: 0 }} className='relative text-white transition-all md:text-[2rem]'>Always for your needs

                            </motion.div>
                        </div>
                        <motion.div animate={{ y: 0 }} transition={{ type: "spring", bounce: 0.2, delay: 5 }} initial={{ y: 500 }} className='hidden lg:flex justify-cente items-center border border-white hover:border-orange-600 text-white pl-6 py-2 cursor-pointer hover:bg-orange-600 mt-8 w-44 group z-50'>
                            <div className='flex justify-center items-center'>Get In Touch</div>
                            <div className='flex justify-center items-center ml-2 transition-all duration-400 group-hover:ml-4'><ArrowRight width="22px" fill="white" /></div>
                        </motion.div>
                    </div>

                </div>
            </div>
            <div className='section px-3 md:px-24 lg:px-48 py-4 md:py-8 lg:py-10'>
            <Fade direction="up" triggerOnce>
                <div className='flex flex-col-reverse md:flex-row gap-4 md:gap-8'>
                    <div className='w-full md:w-[50%]'>
                        <img src={intoImg} alt='Intro image' />
                    </div>
                    <div className='w-full md:w-[50%] text-lg text-justify'>
                        <p>Established in 2001  as partnership firm and switched over to Pvt. Ltd. Co. on 31.03.2009 . DCM Vigilance & Maintenance Services Pvt. Ltd is an ISO 9001:2008 certified company for providing Security and Facility services.</p>
                        <br></br>
                        <p>DCM caters for offices, commercial establishments, institutions who require their properties to be protected through Security arrangement & hygienically maintained on an ongoing or once-off basis. Since 2001 DCM has expanded to over 2500 employees, providing Security, total hygiene and cleaning solutions that can be tailored to suit any organization’s cleaning requirements.</p>
                    </div>

                </div>
                </Fade>
            </div>
            <div className='section px-3 md:px-24 lg:px-48 py-4 md:py-8 lg:py-10'>
                <div className=''>
                    <Slider />
                </div>
            </div>
            <Service />

            <Location />

            <Footer />
        </div>
    )
}
