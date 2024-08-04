import React from 'react'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import Footer from '../components/Footer'
import { Fade } from 'react-awesome-reveal'
import Clients from '../components/Clients'
import Countup from '../components/Countup';
import experienceIcon from '../assets/icons/experience.png'
import clientsIcon from '../assets/icons/clients.png'
import servicemanIcon from '../assets/icons/serviceman.png'
import employeeIcon from '../assets/icons/employees.png'


export default function About() {


    return (
        <div className='z-0 tracking-wide md:tracking-wide'>
            <Navbar page="about" />

            <div className='mt-[5.8rem]'>
                <div className='section px-3 md:px-24 lg:px-40 py-4 md:py-8 lg:py-10 mt-[5.8rem]'>
                    <Heading text="About Us" />

                    <div className='flex flex-col space-y-6 tracking-wide text-lg overflow-hidden'>
                        <Fade direction="up" triggerOnce>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-4 lg:flex-row lg:gap-16'>
                                    <Countup icon={experienceIcon} start={0} end={3} text="Years of Experience" />
                                    <Countup icon={servicemanIcon} start={0} end={700} text="Ex- Serviceman" />
                                </div>

                                <div className=' flex flex-col gap-4 lg:flex-row lg:gap-16'>
                                    <Countup icon={clientsIcon} start={0} end={100} text="Clients in India" />
                                    <Countup icon={employeeIcon} start={0} end={1500} text="Employees" />
                                </div>
                            </div>
                            <div className=''>
                                <h2 className='text-3xl font-bold mb-1'>Company History</h2>
                                <p className='text-lg text-justify'>DCM Vigilance & Maintenance Services Pvt. Ltd aims to provide complete commercial & industrial Security, in addition to House keeping & Manpower Management Services. This is delivered through the use of well trained and supervised staff, ISI branded equipments and proven chemicals.</p>
                            </div>

                            <div className=''>
                                <h2 className='text-3xl font-bold mb-1'>Company Profile</h2>
                                <p className='text-lg text-justify'><strong>Established in 2001</strong> as partnership firm and switched over to Pvt. Ltd. Co. on 31.03.2009 . DCM Vigilance & Maintenance Services Pvt. Ltd is an ISO 9001:2008 certified company for providing Security and Facility services.</p>
                                <p className='text-lg text-justify mt-2'>DCM caters for offices, commercial establishments, institutions who require their properties to be protected through Security arrangement & hygienically maintained on an ongoing or once-off basis. Since 2001 DCM has expanded to over 2500 employees, providing Security, total hygiene and cleaning solutions that can be tailored to suit any organization’s cleaning requirements.</p>
                                <p className='text-lg text-justify mt-2'>Outstanding service and Protection is at the forefront of our company philosophy .This is maintained through:</p>

                                <ul className='list-disc ml-5'>
                                    <li className=''>Careful staff selection and recruitment.</li>
                                    <li className=''>Induction training.</li>
                                    <li className=''>On-site supervision and management.</li>
                                    <li className=''>Regular communication with clients.</li>
                                    <li className=''>Immediate response to client queries.</li>
                                    <li className=''>Inspection programmes.</li>
                                    <li className=''>Allocation of new equipments at all sites as per requirement of clients.</li>
                                    <li className=''>Regular visits by senior management and area supervisors to on-site staff.</li>
                                    <li className=''>Adherence to the Occupational Health.</li>
                                    <li className=''>Competitive rates.</li>
                                </ul>
                                <p className='text-lg text-justify mt-2'>Distinguished services that we offer facility and administrative services which include manpower outsourcing, security service, house keeping, pest control & beverage services. We are to outsource the staff to our clients for various processes including housekeeping, security services and other related facility services through our wild network.</p>
                            </div>

                            <div className=''>
                                <h2 className='text-3xl font-bold mb-1'>Company Management</h2>
                                <p className='text-lg text-justify'>The affairs of our Organization are well managed by the experienced personnel retired from Air Force, Army and other defense forces.</p>
                            </div>
                        </Fade>
                    </div>
                </div>

                <div className='section px-3 md:px-24 lg:px-40 py-4 md:py-8 lg:py-10 bg-gray-200'>
                    <Clients />
                </div>
            </div>

            <Footer />
        </div>
    )
}
