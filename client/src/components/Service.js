import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Heading from './Heading'
// import BankIcon from './icons/BankIcon'
// import ServiceCard1 from './ServiceCard1'
// import sgImg from '../assets/images/services/security-guard.jpg'
// import hkImg from '../assets/images/services/house-keeping.jpg'
// import FireIcon from './icons/FireIcon'
// import LogisticIcon from './icons/LogisticIcon'
// import CorporateIcon from './icons/CorporateIcon'
// import TotalSec from './icons/TotalSec'
// import EventIcon from './icons/EventIcon'
// import DealingIcon from './icons/DealingIcon'
// import SchoolIcon from './icons/SchoolIcon'
// import MouseIcon from './icons/MouseIcon'
// import ManagementIcon from './icons/ManagementIcon'
import WhyChooseUs from './WhyChooseUs'
import totalSecImg from '../assets/images/services/total-security.jpg'
import facilityImg from '../assets/images/services/facility-management.jpg'
import fairImg from '../assets/images/services/fair-dealing.jpg'
import qualifiedProfImg from '../assets/images/services/qualified.png'
import bankImg from '../assets/images/services/bank.jpg'
import fireImg from '../assets/images/services/fire.jpg'
import eventImg from '../assets/images/services/event.jpg'
import corporateImg from '../assets/images/services/corporate.jpg'
import logisticsImg from '../assets/images/services/logistics.jpg'
// import pestImg from '../assets/images/services/pest.jpg'
// import Cta from './Cta'


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


export default function Service() {
    return (
        <div>
            <div className='section px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-10 bg-gray-200'>
                <Fade direction="up" triggerOnce>
                    <Heading text="SERVICES WE OFFER" />
                </Fade>
                <Fade direction="up" triggerOnce>
                    <p className='text-xl text-cente mb-4 md:mb-8 text-justify'>Our company provides a wide range of services to meet the needs of each sector in a dedicated and quality manner with expert on-site assistance.

                    </p>
                </Fade>
                {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                    <Fade cascade damping={0.2} triggerOnce>
                        <ServiceCard1 service="Total Security Solutions" >{<TotalSec height="54px" />}</ServiceCard1>
                        <ServiceCard1 service="Providing Facility Management  " >{<ManagementIcon height="54px" />}</ServiceCard1>
                        <ServiceCard1 service="Good Faith and Fair Dealing" >{<DealingIcon height="54px" />}</ServiceCard1>
                        <ServiceCard1 service="Highly Qualified Professionals" >{<SchoolIcon height="54px" />}</ServiceCard1>
                        <ServiceCard1 service="Banks & ATM Security" >{<BankIcon height="54px" />}</ServiceCard1>
                        <ServiceCard1 service="Fire Control and Evacuation" >{<FireIcon height="54px" />}</ServiceCard1>
                        <ServiceCard1 service="Event Security Management" >{<EventIcon height="54px" />}</ServiceCard1>
                        <ServiceCard1 service="Corporate Security" >{<CorporateIcon height="54px" />}</ServiceCard1>
                        <ServiceCard1 service="Logistic Services" >{<LogisticIcon height="54px" />}</ServiceCard1>
                        <ServiceCard1 service="Pest and Rodent Control" >{<MouseIcon height="54px" />}</ServiceCard1>

                    </Fade>
                </div> */}


                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {services.map((service, index) => (
                <Fade direction="up" triggerOnce>
                            <div className='flex flex-col p-4 space-y-4 shadow-lg rounded-lg bg-white'>
                                <div className=''>
                                    <img src={service.image} alt={service.service} className='h-52 w-full rounded-lg' />
                                </div>
                                <div className=''>
                                    <div className='font-semibold text-xl text-orange-600'>{service.service}</div>
                                    <div className='text-justify'>
                                        {service.description}

                                    </div>
                                    {/* <Cta navigateTo="our-services" /> */}
                                </div>
                            </div>
                        </Fade>
                        )
                        )}
                    </div>
            </div>

            <WhyChooseUs />

        </div>
    )
}
