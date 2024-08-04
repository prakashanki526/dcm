import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import { motion } from 'framer-motion';
import ArrowRight from '../components/icons/ArrowRight';
import { Fade } from "react-awesome-reveal";
import intoImg from '../assets/images/intro.jpeg';
import Footer from '../components/Footer';
// import Service from '../components/Service';
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
import totalSecImg from '../assets/images/services/total-security.jpg'
import facilityImg from '../assets/images/services/facility-management.jpg'
import fairImg from '../assets/images/services/fair-dealing.jpg'
import qualifiedProfImg from '../assets/images/services/qualified.png'
import bankImg from '../assets/images/services/bank.jpg'
import fireImg from '../assets/images/services/fire.jpg'
import eventImg from '../assets/images/services/event.jpg'
import corporateImg from '../assets/images/services/corporate.jpg'
import logisticsImg from '../assets/images/services/logistics.jpg'
import pestImg from '../assets/images/services/pest.jpg'
import Heading from '../components/Heading';


const services = [
    {
        service: "Total Security Solutions",
        description: "Providing comprehensive security services to ensure safety and protection. Our team of experts assesses your specific needs and implements robust security measures tailored to your environment. We leverage advanced technology and highly trained personnel to safeguard your assets and personnel around the clock.",
        image: totalSecImg
    },
    {
        service: "Providing Facility Management",
        description: "Offering complete facility management services for efficient operations. Our comprehensive solutions include maintenance, housekeeping, and logistical support, ensuring your facilities are always in optimal condition. Our goal is to create a safe, clean, and functional environment for your business operations.",
        image: facilityImg
    },
    {
        service: "Good Faith and Fair Dealing",
        description: "Maintaining trust and integrity in all our dealings. We prioritize ethical practices and transparency in every interaction with our clients and partners. Our commitment to good faith and fair dealing ensures that we build strong, lasting relationships based on mutual respect and trust.",
        image: fairImg
    },
    {
        service: "Highly Qualified Professionals",
        description: "Employing highly skilled and trained professionals. Our team consists of experts with extensive experience and specialized training in their respective fields. We invest in continuous education and professional development to ensure our staff stays ahead of industry standards and emerging threats.",
        image: qualifiedProfImg
    },
    {
        service: "Banks & ATM Security",
        description: "Ensuring the security of banks and ATMs with specialized services. Our security solutions are designed to protect financial institutions from a wide range of threats, including theft, vandalism, and fraud. We deploy advanced surveillance systems and security protocols to safeguard your assets and provide peace of mind.",
        image: bankImg
    },
    {
        service: "Fire Control and Evacuation",
        description: "Implementing fire control measures and evacuation plans. Our comprehensive fire safety services include risk assessments, installation of fire detection and suppression systems, and regular drills. We ensure that your premises are equipped to handle fire emergencies efficiently and that all occupants are trained in proper evacuation procedures.",
        image: fireImg
    },
    {
        service: "Event Security Management",
        description: "Managing security for events to ensure safety and order. We provide tailored security solutions for events of all sizes, from small gatherings to large-scale public events. Our team ensures crowd control, access management, and emergency response planning to create a secure environment for all attendees.",
        image: eventImg
    },
    {
        service: "Corporate Security",
        description: "Providing security services tailored to corporate needs. We understand the unique security challenges faced by businesses and offer customized solutions to protect your corporate assets, personnel, and reputation. Our services include access control, surveillance, and threat assessment, ensuring a secure business environment.",
        image: corporateImg
    },
    {
        service: "Logistic Services",
        description: "Offering reliable logistic services to meet your needs. Our logistic solutions are designed to optimize the flow of goods and services within your organization. We provide efficient transportation, warehousing, and distribution services, ensuring timely and secure delivery of your products and materials.",
        image: logisticsImg
    }
    // {
    //     service: "Pest and Rodent Control",
    //     description: "Providing effective pest and rodent control solutions. Our pest management services include thorough inspections, customized treatment plans, and preventive measures to keep your premises pest-free. We use safe and environmentally friendly methods to eliminate infestations and protect your property from future threats.",
    //     image: pestImg
    // }
];




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
            <div className='section px-3 md:px-24 lg:px-40 py-4 md:py-8 lg:py-10 overflow-hidden bg-gray-200'>
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
            <div className='section px-3 md:px-24 lg:px-40 py-4 md:py-8 lg:py-10 overflow-hidden'>
                <div className=''>
                    <Slider />
                </div>
            </div>
            <div className='section px-3 md:px-24 lg:px-40 py-4 md:py-8 lg:py-10 bg-gray-200'>
                <Fade direction="up" triggerOnce>
                    <Heading text="SERVICES WE OFFER" />
                </Fade>
                <Fade direction="up" triggerOnce>
                    <p className='text-xl text-cente mb-4 md:mb-8 text-justify'>Our company provides a wide range of services to meet the needs of each sector in a dedicated and quality manner with expert on-site assistance.

                    </p>
                </Fade>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {services.map((service, index) => (
                <Fade direction="up" triggerOnce>

                        <div className='flex flex-col p-4 space-y-4 shadow-lg rounded-lg bg-white'>
                            <div className=''>
                                <img src={service.image} alt={service.service} className='h-52 w-full rounded-lg' />
                            </div>
                            <div className=''>
                                <div className='font-semibold text-xl text-orange-600'>{service.service}</div>
                                <div className='text-justify h-24 overflow-auto'>
                                    {service.description}

                                </div>
                                <Cta navigateTo="our-services" />
                            </div>
                        </div>
                        </Fade>
                    )
                    )}
                </div>
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
