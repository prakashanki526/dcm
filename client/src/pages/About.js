import React, { useEffect } from 'react'
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
import visionImg from '../assets/images/about/OurVision.jpeg'
import missionImg from '../assets/images/about/OurMission.jpeg'
import cmImg from '../assets/images/about/cm.jpeg'
import hsImg from '../assets/images/about/hs.jpeg'
import Award from '../components/icons/Award'


export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='z-0 tracking-wide md:tracking-wide'>
            <Navbar page="about" />

            <div className='mt-[5.8rem]'>
                <div className='section px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-10 mt-[5.8rem]'>
                    <Heading text="About Us" />

                    <div className='flex flex-col space-y-6 tracking-wide text-lg overflow-hidden'>
                        <Fade direction="up" triggerOnce>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-4 lg:flex-row lg:gap-16'>
                                    <Countup icon={experienceIcon} start={0} end={23} text="Years of Experience" />
                                    <Countup icon={servicemanIcon} start={0} end={50} text="Ex- Serviceman" />
                                </div>

                                <div className=' flex flex-col gap-4 lg:flex-row lg:gap-16'>
                                    <Countup icon={clientsIcon} start={0} end={100} text="Clients in India" />
                                    <Countup icon={employeeIcon} start={0} end={5000} text="Employees" />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-6'>
                                <div className=''>
                                    <img src={hsImg} alt='' className='' />
                                </div>
                                <div className=''>
                                    <h2 className='text-3xl font-bold mb-1'>Company History</h2>
                                    <p className='text-lg text-justify'><span className='font-bold'>DCM Vigilance & Maintenance Services Pvt. Ltd.</span> was established with the mission to provide comprehensive security, housekeeping, and manpower management services to commercial and industrial sectors. From the start, we prioritized quality by training our staff, utilizing ISI-branded equipment, and employing proven chemicals. Over the years, our commitment to excellence and reliability has made us a trusted partner in safeguarding and maintaining diverse properties.</p>
                                </div>
                            </div>


                            <div className='flex flex-col md:flex-row-reverse gap-6'>
                                <div className=''>
                                    <img src={cmImg} alt='' className='' />
                                </div>
                                <div className=''>
                                    <h2 className='text-3xl font-bold mb-1'>Company Management</h2>
                                    <p className='text-lg text-justify'>Our organization is expertly managed by seasoned professionals, including retired personnel from the Air Force, Army, and other defense forces. Their extensive experience and leadership ensure the highest standards of service and discipline across all our operations. Their strategic insight and dedication drive our commitment to excellence and reliability.</p>
                                </div>
                            </div>

                            <div className=''>
                                <h2 className='text-3xl font-bold mb-1'>About us</h2>
                                <p className='text-lg text-justify'><strong>DCM Vigilance & Maintenance Services Pvt. Ltd.</strong> was established in 2001 as a partnership firm and transitioned to a Private Limited Company on 31st March 2009. We are an ISO 9001:2008 certified company, dedicated to providing top-tier security and facility services. Since our inception, we have grown to employ over 5000+ skilled professionals, expanding our reach and capabilities to meet the diverse needs of our clients.</p>

                                <p className='text-lg text-justify mt-2'><strong>DCM</strong> caters to offices, commercial establishments, and institutions that require their properties to be secured and maintained hygienically, whether on an ongoing or once-off basis. We offer a comprehensive range of tailored solutions, including security, total hygiene, cleaning, firefighting, and maintenance services such as carpentry, plumbing, and more. These services are designed to meet the specific needs of any organization, ensuring that their facilities are safe, clean, and efficiently maintained.</p>

                                <p className='text-lg text-justify mt-2'>Outstanding service and protection are at the core of our company philosophy. This commitment is upheld through:</p>

                                <ul className='list-disc ml-5'>
                                    <li className=''><strong>Careful Staff Selection and Recruitment: </strong>We meticulously select and recruit our staff to ensure they meet our high standards.</li>
                                    <li className=''><strong>Induction Training: </strong>All new staff members undergo comprehensive induction training.</li>
                                    <li className=''><strong>On-Site Supervision and Management: </strong>We provide continuous on-site supervision and management to ensure consistent service quality.</li>
                                    <li className=''><strong>Regular Communication with Clients: </strong>We maintain open and regular communication with our clients to address any needs or concerns promptly.</li>
                                    <li className=''><strong>Immediate Response to Client Queries: </strong>We ensure that client queries are addressed immediately and effectively.</li>
                                    <li className=''><strong>Inspection Programmes: </strong>Regular inspections are conducted to maintain the highest service standards.</li>
                                    <li className=''><strong>Allocation of New Equipments: </strong>We allocate new equipment at all sites as per the specific requirements of our clients.</li>
                                    <li className=''><strong>Regular Visits by Senior Management: </strong>Our senior management and area supervisors regularly visit on-site staff to provide support and ensure service quality.</li>
                                    <li className=''><strong>Adherence to Occupational Health Standards: </strong>We strictly adhere to occupational health standards to ensure a safe working environment.</li>
                                    <li className=''><strong>Competitive Rates: </strong> We offer competitive pricing without compromising on service quality.</li>
                                </ul>
                                <p className='text-lg text-justify mt-4'><strong>Distinguished Services: </strong>In addition to our core offerings, we provide a range of facility and administrative services, including manpower outsourcing, security services, housekeeping, pest control, and beverage services. Through our extensive network, we outsource skilled staff to our clients for various processes, ensuring that their facility management needs are met with the highest level of professionalism and efficiency.</p>

                                <p className='text-lg text-justify mt-2'>At DCM Vigilance & Maintenance Services Pvt. Ltd., we are committed to delivering exceptional service that exceeds our clients' expectations, ensuring their properties are secure, well-maintained, and hygienically sound.</p>
                            </div>
                        </Fade>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className='section px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-10 bg-gray-200' id='certificates'>
                    <Heading text="Certifications" />

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* Card 1 */}
                        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-110 transition-all duration-500'>
                            <div className='flex space-x-2'>
                                <Award height="2rem" />
                                <div className=''>

                                    <h3 className='text-2xl font-bold mb-2'>ISO 9001:2015</h3>
                                </div>
                            </div>
                            <p className='text-l text-gray-500 font-semibold text-center'>
                                This certification demonstrates our commitment to quality management systems that meet international standards, ensuring consistent service quality.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-110 transition-all duration-500'>
                            <div className='flex space-x-2'>
                                <Award height="2rem" />
                                <div className=''>

                                    <h3 className='text-2xl font-bold mb-2'>ISO 45001:2018</h3>
                                </div>
                            </div>
                            <p className='text-l text-gray-500 font-semibold text-center'>
                                Focused on occupational health and safety, this certification ensures that we maintain a safe work environment and reduce workplace risks.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-110 transition-all duration-500'>
                            <div className='flex space-x-2'>
                                <Award height="2rem" />
                                <div className=''>

                                    <h3 className='text-2xl font-bold mb-2'>ISO 14001:2015</h3>
                                </div>
                            </div>
                            <p className='text-l text-gray-500 font-semibold text-center'>
                                Our environmental management systems certification highlights our efforts to minimize the environmental impact of our operations.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-110 transition-all duration-500'>
                            <div className='flex space-x-2'>
                                <Award height="2rem" />
                                <div className=''>

                                    <h3 className='text-2xl font-bold mb-2'>SA 8000:2014</h3>
                                </div>
                            </div>
                            <p className='text-l text-gray-500 font-semibold text-center'>
                                SA 8000 certification reflects our dedication to ethical and socially responsible business practices, including fair labor standards.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='section px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-10'>
                    <Heading text="Our Vision" />

                    <div className='flex flex-col space-y-6 tracking-wide text-lg overflow-hidden'>
                        <Fade direction="up" triggerOnce>
                            <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
                                <img src={visionImg} className='h-80 object-cover' alt='' />
                                <div className='text-justify'>
                                    Our vision is to be the foremost provider of security and facility management services, setting industry standards through our commitment to excellence, reliability, and tailored solutions. We aim to safeguard and maintain properties with the highest levels of professionalism, ensuring safe, hygienic, and efficiently managed environments for our clients. By leveraging the expertise of our dedicated professionals and continuously evolving to meet the changing needs of the industries we serve, we strive to build enduring partnerships based on trust, quality, and innovation.
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>

                <div className='section px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-10 bg-gray-200'>
                    <Heading text="Our Mission" />

                    <div className='flex flex-col space-y-6 tracking-wide text-lg overflow-hidden'>
                        <Fade direction="up" triggerOnce>
                            <div className='flex flex-col md:flex-row-reverse gap-6 md:gap-12'>
                                <img src={missionImg} className='h-80 object-cover' alt='' />
                                <div className='text-justify'>
                                    Our mission is to continuously achieve our goals by delivering superior security and facility management services across India. We are dedicated to expanding our presence nationwide, reaching new markets, and enhancing our capabilities. Through innovation, rigorous training, and a client-focused approach, we strive to provide reliable and tailored solutions that protect and maintain our clients' properties. Our commitment is to grow steadily while upholding the highest standards of service and fostering lasting relationships built on trust and excellence.
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>

                <div className='section px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-10 bg-gray-'>
                    <Clients />
                </div>
            </div>

            <Footer />
        </div>
    )
}
