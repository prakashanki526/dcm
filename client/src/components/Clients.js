import React from 'react'
import Heading from './Heading'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../pages/about.css'

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
                {clients.map((client, index) => (
                    <div key={index} className='client-slide flex items-center justify-center'>
                        <div className='shadow-lg bg-gray-50 flex items-center justify-center text-center font-bold rounded-lg p-4 h-32'>
                            {client}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
