import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Heading from './Heading'
import BankIcon from './icons/BankIcon'
import ServiceCard1 from './ServiceCard1'
import sgImg from '../assets/images/services/security-guard.jpg'
import hkImg from '../assets/images/services/house-keeping.jpg'
import FireIcon from './icons/FireIcon'
import LogisticIcon from './icons/LogisticIcon'
import CorporateIcon from './icons/CorporateIcon'
import TotalSec from './icons/TotalSec'
import EventIcon from './icons/EventIcon'
import DealingIcon from './icons/DealingIcon'
import SchoolIcon from './icons/SchoolIcon'
import MouseIcon from './icons/MouseIcon'
import ManagementIcon from './icons/ManagementIcon'

export default function Service() {
    return (
        <div>
            <div className='section px-3 md:px-24 lg:px-48 py-4 md:py-8 lg:py-10'>
                <Fade direction="up" triggerOnce>
                    <Heading text="SERVICES WE OFFER" />
                </Fade>
                <Fade direction="up" triggerOnce>
                    <p className='text-xl text-cente mb-4 md:mb-8 text-justify'>Our company provides a wide range of services to meet the needs of each sector in a dedicated and quality manner with expert on-site assistance.

                    </p>
                </Fade>
                <Fade direction="up" triggerOnce>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
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

                    </div>
                </Fade>
            </div>

            <div className='section px-3 md:px-24 lg:px-48 py-4 md:py-8 lg:py-10'>
            <Fade direction="up" triggerOnce>

                <Heading text="SOME OF OUR SERVICES" />
                </Fade>

                <div className='mt-4 md:mt-0 flex flex-col gap-6'>
                <Fade direction="up" triggerOnce>

                    <div className='flex flex-col lg:flex-row gap-4 bg-orange-600 rounded-xl w-full p-4 md:p-6'>
                        <img src={sgImg} className='rounded-lg' alt='' />
                        <div className='text-white text-xl'>
                            <div className='text-2xl mb-2 font-bold'>SECURITY GUARD SERVICES</div>
                            <div className=''>
                                <p>Our professionals are trained to undertake the following work:</p>
                                <ul className='list-disc ml-5'>
                                    <li>On taking over the responsibility of providing security arrangements we formulate the mechanism and duty assignment of security personnel in consultation with the Client.</li>
                                    <li>Review the security arrangement from time to time and advise the Client for further streamlining the security system.</li>
                                    <li>Carry out surprise check in day & night  on the guards so deployed  in order to ensure that the guards are doing their duties.</li>
                                    <li>Gate control of Personnel/Vehicle/ Material  having concept of security relationship with coworkers and superiors.</li>
                                    <li>Use of Fire fighting Devices</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </Fade>

                <Fade direction="up" triggerOnce>

                    <div className='flex flex-col lg:flex-row-reverse gap-4 bg-orange-600 rounded-xl w-full p-4 md:p-6'>
                        <img src={hkImg} className='rounded-lg' alt='' />
                        <div className='text-white text-xl'>
                            <div className='text-2xl mb-2 font-bold'>HOUSE KEEPING SERVICES</div>
                            <div className=''>
                                <p>
                                    Our professionals are trained to undertake the following work:
                                </p>
                                <ul className='list-disc ml-5'>
                                    <li>Keeping the entire premises clean.</li>
                                    <li>Maintaining & enhancing the beauty of office area, walkways, lawns, plantings and other aspect of the premises.</li>
                                    <li>Maintenance & cleanliness of rest rooms.</li>
                                    <li>Maintenance of lobby, stairs and corridors.</li>
                                    <li>Cleaning of panel posters, painting,
                                        light fittings, furniture & fixtures</li>
                                    <li>Adequate supervision of all activities.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>

        </div>
    )
}
