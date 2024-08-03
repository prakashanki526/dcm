import React from 'react';
import Slider from 'react-slick';
import Heading from './Heading';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function WhyChooseUs() {
    const data = [
        {
            title: "Experience and Expertise",
            description: "With a proven track record in the security industry, we have the knowledge and skills to handle a wide range of security challenges."
        },
        {
            title: "Customized Solutions",
            description: "We tailor our security services to meet the specific needs of each client, ensuring the highest level of protection."
        },
        {
            title: "Reliability and Trust",
            description: "Our clients trust us for our reliability, professionalism, and commitment to their safety."
        },
        {
            title: "Advanced Technology",
            description: "We leverage the latest security technologies, including state-of-the-art surveillance systems, access control, and real-time monitoring, to provide cutting-edge security solutions."
        },
        {
            title: "Highly Trained Personnel",
            description: "Our security team undergoes rigorous training and continuous education to stay ahead of emerging threats and industry standards."
        },
        {
            title: "24/7 Support",
            description: "We offer round-the-clock support and monitoring to ensure that your security needs are met at all times, day or night."
        },
        {
            title: "Comprehensive Risk Assessment",
            description: "We conduct thorough risk assessments to identify potential vulnerabilities and develop effective strategies to mitigate them."
        },
        {
            title: "Proactive Approach",
            description: "Our proactive approach to security involves constant vigilance and prompt action to prevent incidents before they occur."
        },
        {
            title: "Strong Client Relationships",
            description: "We build strong, lasting relationships with our clients, understanding their unique needs and delivering personalized security solutions."
        },
        {
            title: "Accredited and Certified",
            description: "Our company holds relevant accreditations and certifications, ensuring compliance with industry standards and regulations."
        },
        {
            title: "Community Commitment",
            description: "We are committed to contributing to the safety and well-being of the communities we serve, through both our services and community engagement initiatives."
        },
        {
            title: "Cost-Effective Solutions",
            description: "We provide high-quality security services at competitive prices, delivering exceptional value for your investment."
        },
        {
            title: "Innovative Practices",
            description: "We continuously innovate and adapt our practices to stay at the forefront of the security industry, ensuring our clients benefit from the latest advancements."
        },
        {
            title: "Client Satisfaction",
            description: "Our high client satisfaction rate is a testament to our dedication to providing outstanding service and exceeding expectations."
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='px-3 md:px-24 lg:px-40 py-4 md:py-8 lg:py-10 bg-gray-200'>
            <Heading text="Why Choose Us?" />

            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="p-4 h-60 md:h-[17rem] mb-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between transition-transform transform hover:scale-110 hover:shadow-xl duration-700">
                            <div>
                                <div className='text-2xl font-bold text-orange-600 mb-1'>{item.title}</div>
                                <div className='text-gray-700'>{item.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
