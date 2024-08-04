import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import { motion } from 'framer-motion';
import ArrowRight from '../components/icons/ArrowRight';
import { Fade } from "react-awesome-reveal";
import intoImg from '../assets/images/intro.jpeg';
import Footer from '../components/Footer';
import Service from '../components/Service';
import Location from '../components/Location';
import GetInTouch from '../components/GetInTouch';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';
import Clients from '../components/Clients';
import Countup from '../components/Countup';
import experienceIcon from '../assets/icons/experience.png'
import clientsIcon from '../assets/icons/clients.png'
import servicemanIcon from '../assets/icons/serviceman.png'
import employeeIcon from '../assets/icons/employees.png'




export default function Home() {
    const ref = useRef();

    return (
        <div className='z-0 tracking-wide md:tracking-wide'>
            <Navbar page="home" />
            <div className='mt-[5.8rem]'>
                <div className='h-80 md:h-[38rem] w-full bg-hero bg-cover bg-center overflow-hidden'>
                    <div className='h-full w-full bg-black opacity-60 flex items-center justify-center flex-col'>
                        <div className='flex flex-col justify-center items-center tracking-widest'>
                            <motion.div animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 1, delay: 0.7 }} initial={{ y: -100, opacity: 0 }} className='text-white font-bold transition-all leading-tight relative text-[3rem] md:text-[4rem]'>
                                DCM
                            </motion.div>
                            <motion.div animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 1, delay: 1.5 }} initial={{ y: 100, opacity: 0 }} className='relative text-white transition-all md:text-[2rem]'>
                                Always for your needs
                            </motion.div>
                        </div>
                        <motion.div animate={{ y: 0 }} transition={{ type: "spring", bounce: 0.2, delay: 2.5 }} initial={{ y: 500 }} className='flex justify-center items-center border border-white hover:border-orange-600 text-white pl-6 py-2 cursor-pointer hover:bg-orange-600 mt-8 w-44 group z-50' onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}>
                            <div className='flex justify-center items-center'>Contact Us</div>
                            <div className='flex justify-center items-center ml-2 transition-all duration-400 group-hover:ml-4'>
                                <ArrowRight width="22px" fill="white" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='section px-3 md:px-24 lg:px-40 py-4 md:py-8 lg:py-10 overflow-hidden'>
                <Fade direction="up" triggerOnce>
                    <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
                        <div className='w-full md:w-[50%]'>
                            <img src={intoImg} className='rounded-md h-full' alt='' />
                        </div>
                        <div className='w-full md:w-[50%] text-lg text-justify'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-4'>
                                    <Countup icon={experienceIcon} start={0} end={3} text="Years of Experience" />
                                    <Countup icon={servicemanIcon} start={0} end={700} text="Ex- Serviceman" />
                                </div>

                                <div className=' flex flex-col gap-4'>
                                    <Countup icon={clientsIcon} start={0} end={100} text="Clients in India" />
                                    <Countup icon={employeeIcon} start={0} end={1500} text="Employees" />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <p>Established in 2001 as partnership firm and switched over to Pvt. Ltd. Co. on 31.03.2009. DCM Vigilance & Maintenance Services Pvt. Ltd is an ISO 9001:2008 certified company for providing Security and Facility services.</p>
                                {/* <br /> */}
                                <p className='mt-2'>DCM caters for offices, commercial establishments, institutions who require their properties to be protected through Security arrangement & hygienically maintained on an ongoing...</p>
                                <Cta navigateTo="about" />

                            </div>

                        </div>
                    </div>
                </Fade>
            </div>
            <div className='section px-3 md:px-24 lg:px-40 py-4 md:py-8 lg:py-10 overflow-hidden bg-gray-200'>
                <div className=''>
                    <Slider />
                </div>
            </div>
            <div className=''>
                <Service />

            </div>




            <div ref={ref}>
                <Location />
                <div className='section px-3 md:px-24 lg:px-40 py-4 md:py-8 lg:py-10 bg-gray-200'>
                    <Clients />
                </div>
                <GetInTouch />
            </div>
            <Testimonials />
            <Footer />
        </div>
    );
}
