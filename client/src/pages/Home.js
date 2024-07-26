import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import { motion } from 'framer-motion';
import ArrowRight from '../components/icons/ArrowRight';

export default function Home() {
    return (
        <div className='z-0 tracking-wide md:tracking-widest'>
            <Navbar />
            <div className='mt-[5.8rem]'>
                {/* <Slider /> */}
                <div className='h-80 md:h-[34rem] w-full bg-hero bg-cover bg-center'>
                    <div className='h-full w-full bg-black opacity-60 flex items-center justify-center flex-col'>
                        <div className='flex flex-col justify-center items-center tracking-widest'>
                            <motion.div animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 2, delay: 1 }} initial={{ y: -100, opacity: 0 }} className=' text-white font-bold transition-all leading-tight relative text-[3rem] md:text-[4rem]'>
                                    CRM
                            </motion.div>
                            <motion.div animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 2, delay: 3 }} initial={{ y: 100, opacity: 0 }} className='relative text-white transition-all md:text-[2rem]'>Always for your needs
                        
                            </motion.div>
                        </div>
                        <motion.div animate={{ y: 0 }} transition={{ type: "spring", bounce: 0.2, delay: 5 }} initial={{ y: 500 }} className='hidden lg:flex justify-cente items-center border border-white hover:border-[#1ba6f7] text-white pl-6 py-2 cursor-pointer hover:bg-[#1ba6f7] mt-8 w-44 group'>
                            <div className='flex justify-center items-center'>Get In Touch</div>
                            <div className='flex justify-center items-center ml-2 transition-all group-hover:ml-4'><ArrowRight width="22px" fill="white" /></div>
                        </motion.div>
                    </div>

                </div>
            </div>
            <div className='h-96'></div>
        </div>
    )
}
