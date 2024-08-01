import React, { useEffect, useState } from 'react';
import guardImg1 from '../assets/images/guard1.png'
import guardImg2 from '../assets/images/guard2.png'
import guardImg3 from '../assets/images/guard3.png'

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const images = [img1, img2, img3, img4, img5, img6];

    const slides = [
        {
            title: 'Quality Security Services',
            subtitle: 'Ensuring the safety and security of your premises with our expert team.',
            image: guardImg1
        },
        {
            title: 'Professional Maintenance',
            subtitle: 'Providing top-notch maintenance services for commercial and residential properties.',
            image: guardImg2
        },
        {
            title: 'Customer Satisfaction',
            subtitle: 'Committed to delivering exceptional services tailored to your needs.',
            image: guardImg3
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full" data-carousel="static">
            {/* <div className="relative h-56 overflow-hidden rounded-lg md:h-[32rem]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute block w-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={image}
                            className="w-full h-full object-cover"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div> */}

            <div className="relative h-[16rem] overflow-hidden rounded-lg md:h-[32rem]">
                {slides.map((slide, index) => (
                    <div className={`absolute block w-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`} key={index}>
                        <div className='absolute top-0 left-0 w-0 h-0 border-t-[500px] md:border-t-[900px] border-t-orange-500 border-r-[200px] border-r-transparent'></div>
                    <div className='flex justify-between items-center'>
                        <div className='p-6 md:px-16 z-10 md:w-[60%] flex justify-center flex-col'>
                            <h2 className='text-3xl md:text-5xl font-bold'>{slide.title}</h2>
                            <div className='text-xl md:text-2xl font-semibold text-gray-600 mt-1'>{slide.subtitle}</div>
                            {/* <p className='mt-4 text-lg md:text-xl'>Ensuring the safety and security of your premises with our expert team.</p> */}
                        </div>
    
                        <div className='md:flex justify-center h-[28rem] hidden px-14 w-[40%]'>
                            <img src={slide.image} alt='' className='' />
                        </div>
                    </div>
                </div>
                ))}
            </div>


            <div className="absolute z-10 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-400' : 'bg-gray-300'
                            }`}
                        aria-current={index === currentIndex}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            <button
                type="button"
                className="absolute top-0 left-0 z-10 flex items-center justify-center h-full md:px-1 cursor-pointer group focus:outline-none"
                onClick={() =>
                    setCurrentIndex(
                        (prevIndex) =>
                            (prevIndex - 1 + slides.length) % slides.length
                    )
                }
            >
                <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300/40 group-hover:bg-gray-300/60 focus:ring-4 focus:ring-white -ml-3 md:ml-0">
                    <svg
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-10 flex items-center justify-center h-full md:px-1 cursor-pointer group focus:outline-none"
                onClick={() =>
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
                }
            >
                <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 -ml-3 md:ml-0 rounded-full bg-gray-300/70 group-hover:bg-gray-300/100 focus:ring-4 focus:ring-white">
                    <svg
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}
