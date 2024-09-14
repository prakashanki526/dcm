import React from 'react';
import locationIcon from '../assets/icons/map-pin-line.png';
// import phoneIcon from '../assets/icons/phone-icon.png'; // Example icons, you can replace with your own.
// import emailIcon from '../assets/icons/email-icon.png'; 
import Heading from './Heading';
import { Fade } from 'react-awesome-reveal';

const branches = [
    {
        branch: "PATNA, BIHAR",
        address: "HOUSE NO. 233, WARD NO. 13, ABDUL SHAKUR MARKET, MARSHAL BAZAR, BI.GUNJ, NEAR POLICE CHAWKI, P.O. & P.S. DANAPUR, DIST. PATNA - 801503, BIHAR",
    },
    {
        branch: "JAMSHEDPUR, JHARKHAND",
        address: "HOUSE NO. H/7, RAMDEV BAGAN, NEAR BACK SIDE OF GOLMURI CHURCH, P.O. & P.S. - GOLMURI, DIST. EAST SINGHBHUM, JAMSHEDPUR, JHARKHAND, PIN - 831003",
    },
    {
        branch: "PURI, ODISHA",
        address: "HOUSE NO. 1836, PARA NO. 2001, PARANOLIA SAHI, P.O. - HARACHANDISAHI, P.S. - TOWN THANA, DIST - PURI, PIN - 752001, ODISHA",
    },
    {
        branch: "BENACHITY, DURGAPUR",
        address: "2/24 SRINAGAR PALLY, BENACHITY, P.O. - DURGAPUR, DIST- BURDWAN, DURGAPUR - 713213",
    },
    {
        branch: "AGARTALA, TRIPURA",
        address: "NORTH JOYNAGAR, OPPOSITE TO FRUIT CANNING CENTRE, NEAR TO 79 RATION SHOP, P.O. - AGARTALA, WEST TRIPURA, PIN 799001",
    },
    {
        branch: "GUWAHATI, ASSAM",
        address: "KATAHBARI, P.O. & P.S. - GARCHUK, GUWAHATI - 781035, ASSAM",
    },
    {
        branch: "GANGTOK, SIKKIM",
        address: "SYARI GANGTOK, 14, DEORALI UPPPER SYARI WARD",
    },
];

export default function Location() {
    return (
        <div className='section px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-10 overflow-hidden'>
            <Fade direction="up" triggerOnce>
                <Heading text="CONTACT US" />
            </Fade>

            {/* Head Office Section */}
            <Fade direction="up" triggerOnce>
                <div className='flex flex-col md:flex-row w-full justify-center mt-2 md:mt-8'>
                    <div className='w-full md:w-[50%] aspect-square flex flex-col justify-center items-center box-border md:justify-start md:items-start'>
                        <div className='text-center md:text-left'>
                            <h2 className='font-bold text-3xl mb-2'>HEAD OFFICE</h2>
                            <div className='font-semibold text-lg text-orange-600 mb-2'>DCM Vigilance & Maintenance Services Pvt.Ltd.</div>
                            <div className='text-base'>Kaikhali, Chiriamore, P.O. & P.S Airport, Kolkata - 700136</div>

                            <div className='mt-4'>
                                <div className='flex flex-col md:flex-row md:justify-between'>
                                <div className='flex flex-col items-center md:items-start justify-center mb-2'>
                                    {/* <img src={phoneIcon} alt='phone' className='mr-2 w-5 h-5' /> */}
                                    <div className='font-bold'>Call Us : </div>
                                    <div>+91-(033) 4603 1489</div>
                                </div>
                                <div className='flex flex-col items-center md:items-start justify-center'>
                                    {/* <img src={emailIcon} alt='email' className='mr-2 w-5 h-5' /> */}
                                    <div className='font-bold'>Email Us</div>

                                    <div>abc@aejbj.digital</div>
                                    <div>info@fekajb.digital</div>
                                </div>
                                </div>

                                <div className='mt-4 flex items-center justify-center md:justify-start'>
                                    <a href='https://maps.app.goo.gl/qucSXaQTPwCKnCaq7' target="_blank" rel="noreferrer" className='flex items-center text-orange-600'>
                                        <img src={locationIcon} alt='location' className='mr-2 w-5 h-5' />
                                        Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className='w-full md:w-[50%] aspect-square mt-8 md:mt-0'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.510998763963!2d88.43596267507964!3d22.634728779447503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e3572bc3115%3A0xa0b904b1425499b0!2sDCM%20Vigilance%20%26%20Maintenance%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1722006574210!5m2!1sen!2sin" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade" 
                            className='h-full w-full' 
                            title='map'>
                        </iframe>
                    </div>
                </div>
            </Fade>

            {/* Branch Offices Section */}
            <div className='mt-12'>
                <Fade direction="up" triggerOnce>
                    <h2 className='font-bold text-3xl mb-8 text-center'>BRANCH OFFICES</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {branches.map((branch, index) => (
                            <div key={index} className="border p-6 shadow-md rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
                                <h3 className="font-bold text-xl mb-2 text-orange-600">{branch.branch}</h3>
                                <p className="text-gray-700">{branch.address}</p>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </div>
    );
}
