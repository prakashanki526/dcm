import React from 'react';
import Slider from 'react-slick';
import Heading from './Heading';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function WhyChooseUs() {
    const data = [
        {
            title: "Proven Track Record",
            description: "With over two decades of experience in the security and facility management industry, DCM Vigilance & Maintenance Services Pvt. Ltd. has established itself as a trusted name. Our commitment to quality and reliability has made us a preferred partner for commercial and industrial sectors across India."
        },
        {
            title: "Expert Leadership",
            description: " Our management team includes highly experienced professionals, many of whom are retired from the Air Force, Army, and other defense forces. Their leadership brings unmatched discipline, strategic insight, and operational excellence to every project we undertake."
        },
        {
            title: "Tailored Solutions",
            description: " We understand that every client’s needs are unique. That’s why we offer customized solutions ranging from security and housekeeping to firefighting, pest control, and maintenance services like carpentry and plumbing. Whether it's ongoing services or one-off projects, we adapt to meet your specific requirements."
        },
        {
            title: "Commitment to Quality",
            description: "As an ISO 9001:2008 certified company, we prioritize quality in everything we do. Our staff undergoes rigorous selection, induction training, and continuous supervision to ensure they meet our high standards, while regular inspections guarantee that our service quality never wavers."
        },
        {
            title: "Reliability and Trust",
            description: "Our clients trust us for our reliability, professionalism, and commitment to their safety."
        },
        {
            title: "Advanced Equipment and Methods",
            description: "We utilize ISI-branded equipment and proven chemicals to ensure that we deliver superior results. Our commitment to innovation and safety allows us to maintain hygienic, secure, and efficient environments for our clients."
        },
        {
            title: "Highly Trained Personnel",
            description: "Our security team undergoes rigorous training and continuous education to stay ahead of emerging threats and industry standards."
        },
        {
            title: "Comprehensive Support",
            description: "We maintain open lines of communication with our clients, ensuring that any issues are addressed immediately. Our senior management and area supervisors conduct regular on-site visits, providing hands-on support and ensuring that service standards are consistently met."
        },
        {
            title: "Nationwide Reach and Expanding Network",
            description: "Employing over 5000+ skilled professionals, we serve a wide range of clients across India, from offices to large commercial establishments. Our expanding presence ensures that we can meet the growing demands of various sectors nationwide."
        },
        {
            title: "Safety and Compliance",
            description: "We strictly adhere to occupational health standards, ensuring a safe working environment for both our staff and clients. Our commitment to safety is embedded in all our processes."
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
            description: " We provide competitive rates without compromising on the quality of our services. Our cost-effective solutions ensure that you get the best value while maintaining high standards of security and facility management."
        },
        {
            title: "Innovative Practices",
            description: "We continuously innovate and adapt our practices to stay at the forefront of the security industry, ensuring our clients benefit from the latest advancements."
        },
        {
            title: "Diverse Service Offerings",
            description: "Beyond security and cleaning services, we offer a range of additional facility management solutions such as manpower outsourcing, pest control, and beverage services. This diverse portfolio makes us a one-stop solution for all your facility management needs."
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
        <div className='px-3 md:px-16 lg:px-40 py-8 md:py-8 lg:py-10 bg-gray-200'>
            <Heading text="Why Choose Us?" />

            <div className='mt-8 text-center text-lg font-[500]'>
                By choosing DCM Vigilance & Maintenance Services Pvt. Ltd., you are selecting a partner who is dedicated to protecting and maintaining your property with professionalism, efficiency, and the highest standards of service.
            </div>

            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="p-4 h-80 md:h-[20rem] mb-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between transition-transform transform hover:scale-110 hover:shadow-xl duration-700">
                            <div>
                                <div className='text-2xl font-bold text-[#990011FF] mb-1'>{item.title}</div>
                                <div className='text-gray-700 text-justify'>{item.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
