import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import guardImg from '../assets/images/guard1.png'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className='relative bg-white py-0 overflow-hidden'>
            <div className='absolute top-0 left-0 w-0 h-0 border-t-[700px] border-t-orange-500 border-r-[200px] border-r-transparent'></div>
            {/* <div className='absolute bottom-0 left-0 w-0 h-0 border-b-[700px] border-b-orange-500 border-r-[200px] border-r-transparent'></div> */}
            <div className='container mx-auto px-4'>
                <Slider {...settings}>
                    <div className=''>
                        <div className='flex justify-between items-center'>
                            <div className='p-8'>
                                <h2 className='text-6xl font-bold'>Quality Security Services</h2>
                                <h2 className='text-3xl font-bold'>A commited organisation</h2>
                                <p className='mt-4'>Ensuring the safety and security of your premises with our expert team.</p>
                            </div>

                            <div className='flex justify-end h-[28rem] border'>
                                <img src={guardImg} alt='' className='h-fit' />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex justify-between items-center'>
                            <div className='p-8'>
                                <h2 className='text-6xl font-bold'>Quality Security Services</h2>
                                <h2 className='text-3xl font-bold'>A commited organisation</h2>
                                <p className='mt-4'>Ensuring the safety and security of your premises with our expert team.</p>
                            </div>

                            <div className='flex justify-end h-[28rem]'>
                                <img src={guardImg} alt='' className='h-fit' />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex justify-between items-center'>
                            <div className='p-8'>
                                <h2 className='text-6xl font-bold'>Quality Security Services</h2>
                                <h2 className='text-3xl font-bold'>A commited organisation</h2>
                                <p className='mt-4'>Ensuring the safety and security of your premises with our expert team.</p>
                            </div>

                            <div className='flex justify-end h-[28rem] border'>
                                <img src={guardImg} alt='' className='h-fit' />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Carousel;
