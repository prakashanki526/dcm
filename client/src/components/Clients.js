import React from 'react'
import Heading from './Heading'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../pages/about.css'
import wbpdclLogo from '../assets/logos/WBPDCL.png'
import tvsLogo from '../assets/logos/TVS.png'
import wbpcbLogo from '../assets/logos/wbpcb.jpg'
import ctcLogo from '../assets/logos/ctc.jpeg'
import cstcLogo from '../assets/logos/cstc.jpeg'
import webelLogo from '../assets/logos/webel.png'
import hidcoLogo from '../assets/logos/hidco.jpg'
import yesBankLogo from '../assets/logos/yes-bank.png'
import hdfcLogo from '../assets/logos/HDFC.png'
import idbiLogo from '../assets/logos/idbi.png'
import hdbLogo from '../assets/logos/HDB.png'
import aliahLogo from '../assets/logos/aliah.jpg'
import rvnlLogo from '../assets/logos/rvnl.png'
import pheLogo from '../assets/logos/phe.jpg'
import pwdLogo from '../assets/logos/pwd.jpg'
import sebiLogo from '../assets/logos/sebi.jpg'
import calcuttaUniversityLogo from '../assets/logos/calcutta-university.png'
import nouLogo from '../assets/logos/nou.png'
import csirLogo from '../assets/logos/csir.png'






const cs = [
    {
        logo: wbpcbLogo,
        name: "WBPDCL"
    },
    {
        logo: tvsLogo,
        name: "TVS"
    },
    {
        logo: wbpcbLogo,
        name: "WB POLLUTION CONTROL BOARD"
    },
    {
        logo: ctcLogo,
        name: "CTC"
    },
    {
        logo: cstcLogo,
        name: "CSTC"
    },
    {
        logo: webelLogo,
        name: "WEBEL"
    },
    {
        logo: hidcoLogo,
        name: "HIDCO"
    },
    {
        logo: yesBankLogo,
        name: "YES BANK"
    },
    {
        logo: hdfcLogo,
        name: "HDFC"
    },
    {
        logo: idbiLogo,
        name: "IDBI"
    },
    {
        logo: hdbLogo,
        name: "HDB"
    },
    {
        logo: aliahLogo,
        name: "ALIAH UNIVERSITY"
    },
    {
        logo: rvnlLogo,
        name: "RVNL"
    },
    {
        logo: pheLogo,
        name: "PHE"
    },
    {
        logo: pwdLogo,
        name: "PWD"
    },
    {
        logo: sebiLogo,
        name: "SEBI"
    },
    {
        logo: calcuttaUniversityLogo,
        name: "CALCUTTA UNIVERSITY"
    },
    {
        logo: nouLogo,
        name: "NETAJI OPEN UNIVERSITY"
    },
    {
        logo: csirLogo,
        name: "CSIR"
    },
]

const clients = [
    "Banks – National & Private Sector",
    "Corporate Offices",
    "Government Offices – Central & States High-rise Buildings",
    "Hospitals and Nursing Homes",
    "Industrial Units",
    "Jewelers Stores",
    "Museums",
    "Hotels",
    "Malls",
    "Project Areas",
    "Residential Complexes",
    "Educational Institutions",
    "Warehouses",
    "Telecommunication Sectors",
    "IT Sectors",
    "Insurance Units",
    "Manufacturing Units",
    "Power Plants",
    "Toll Plazas",
    "Media & Printing Houses",
    "Oil, Gas & Pharmaceuticals",
    "Companies",
    "Retail Stores"
];

export default function Clients() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div>
            <Heading text="Our Clients" />

            <Slider {...settings} className='client-slider mt-16 clients'>
                {cs.map((client, index) => (
                    <div key={index} className='client-slide flex items-center justify-center'>
                        <div className='h-24'>
                            <img src={client.logo} className='h-full w-fit m-auto' alt='' />
                        </div>
                        <div className='flex items-center justify-center text-center font-bold rounded-lg p-4'>
                            {client.name}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
