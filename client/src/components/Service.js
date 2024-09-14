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
import pantryImg from '../assets/images/services/pantry.jpg'
import repairImg from '../assets/images/services/repair.jpg'
import cleaningImg from '../assets/images/services/cleaning.jpg'
import gardeningImg from '../assets/images/services/gardening.jpg'
// import Cta from './Cta'


const services = [
    {
        service: "Total Security Solutions",
        description: "Providing comprehensive security services to ensure safety and protection. Our team of experts assesses your specific needs and implements robust security measures tailored to your environment. We leverage advanced technology and highly trained personnel to safeguard your assets and personnel around the clock.",
        image: totalSecImg
    },
    {
        service: "Integrated Facility Management System",
        description: "Offering complete facility management services for efficient operations. Our comprehensive solutions include maintenance, housekeeping, and logistical support, ensuring your facilities are always in optimal condition. Our goal is to create a safe, clean, and functional environment for your business operations.",
        image: facilityImg
    },
    {
        service: "Manpower outsourcing and payroll",
        description: "Our company specializes in manpower outsourcing and payroll services, providing businesses with efficient workforce solutions. We handle staffing, and payroll management, ensuring compliance and accuracy. With our expertise, businesses can focus on growth, offering flexibility and cost-effective solutions tailored to their specific requirements.",
        image: fairImg
    },
    {
        service: "Repair and maintenance",
        description: "We provide reliable repair and maintenance services to keep your equipment and facilities running smoothly. Our skilled technicians handle routine maintenance and urgent repairs, minimizing downtime and ensuring efficiency, so your business can operate without interruptions. Trust us for cost-effective solutions.",
        image: repairImg
    },
    {
        service: "Electronic security",
        description: "We specialize in electronic security solutions, offering advanced systems to protect your business. From CCTV surveillance to access control and alarm systems, our cutting-edge technology ensures the safety of your premises. Rely on us for customized, secure, and reliable protection solutions.",
        image: bankImg
    },
    {
        service: "Fire Control and Evacuation",
        description: "Implementing fire control measures and evacuation plans. Our comprehensive fire safety services include risk assessments, installation of fire detection and suppression systems, and regular drills. We ensure that your premises are equipped to handle fire emergencies efficiently and that all occupants are trained in proper evacuation procedures.",
        image: fireImg
    },
    {
        service: "Deep cleaning & pest control",
        description: "Our company offers deep cleaning and pest control services to maintain a spotless and hygienic environment. From thorough cleaning of hard-to-reach areas to effective pest elimination, we ensure a safe, healthy, and pest-free space for your home or business.",
        image: cleaningImg
    },
    {
        service: "Pantry",
        description: "We provide pantry services to ensure a well-stocked and organized kitchen space for your office or business. From inventory management to regular restocking of supplies, our services create a seamless and efficient pantry experience, keeping your team refreshed and satisfied.",
        image: pantryImg
    },
    {
        service: "Logistic and Transportation Services",
        description: "Offering reliable logistic services to meet your needs. Our logistic solutions are designed to optimize the flow of goods and services within your organization. We provide efficient transportation, warehousing, and distribution services, ensuring timely and secure delivery of your products and materials.",
        image: logisticsImg
    },
    {
        service: "Gardening",
        description: "We offer professional gardening services, including landscaping, lawn care, and plant maintenance. Our skilled team helps create and maintain beautiful outdoor spaces, ensuring healthy plants, vibrant lawns, and aesthetically pleasing environments for your home or business. Trust us to bring nature closer to you.",
        image: gardeningImg
    }
];


export default function Service() {
    return (
        <div>
            <div className='section px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-10 bg-gray-200'>
                {/* <Fade direction="up" triggerOnce> */}
                    <Heading text="SERVICES WE OFFER" />
                {/* </Fade> */}
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
                                <div className='md:h-60 overflow-scroll'>
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
