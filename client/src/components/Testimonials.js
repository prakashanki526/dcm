import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Heading from './Heading';

const testimonials = [
    {
        quote: "DCM Vigilance & Maintenance Services Pvt. Ltd. has provided exceptional service to our company. Their professionalism and attention to detail are unmatched.",
        name: "John Doe",
        position: "CEO, Example Corp"
    },
    {
        quote: "We have been very impressed with the quality of service provided by DCM. Their team is efficient, reliable, and trustworthy.",
        name: "Jane Smith",
        position: "Manager, Another Company"
    },
    {
        quote: "DCM's commitment to excellence is evident in every interaction we have had with them. They have exceeded our expectations time and time again.",
        name: "Michael Brown",
        position: "Director, Business Co"
    }
];

export default function Testimonials() {
    return (
        <div className="section px-3 md:px-24 lg:px-48 py-4 md:py-8 lg:py-10 bg-gray-100">
            <Fade direction="up" triggerOnce>
                <Heading text="Testimonials" />
                <div className="flex flex-col md:flex-row md:space-x-4">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full md:w-1/3 bg-white p-6 rounded-md shadow-md mb-4 md:mb-0">
                            <p className="italic text-lg">"{testimonial.quote}"</p>
                            <div className="mt-4 text-right">
                                <p className="font-bold">{testimonial.name}</p>
                                <p className="text-sm text-gray-600">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    );
}
