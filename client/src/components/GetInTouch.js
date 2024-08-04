import React from 'react';
import { Fade } from 'react-awesome-reveal';
import getInTouchImg from '../assets/images/get-in-touch.png'

export default function GetInTouch() {
    return (
        <div className="section px-3 md:px-24 lg:px-40 py-4 md:py-8 lg:py-10">
            <div className="flex flex-col items-center">
                {/* <h2 className="text-3xl font-bold mb-6">Get in Touch</h2> */}
                <div className='flex flex-col-reverse md:flex-row gap-4 md:justify-between w-full'>
                <form className="w-full max-w-lg md:w-[50%]">
                    {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
                <Fade cascade damping={0.2} triggerOnce className='flex flex-wrap -mx-3 mb-6'>

                        <div className="w-full px-3 mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Your Name" />
                        </div>
                        <div className="w-full px-3 mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Your Email" />
                        </div>
                        <div className="w-full px-3 mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="mobile">
                                Mobile No
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="mobile" type="tel" placeholder="Your Mobile No" />
                        </div>
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                                Your Query
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" id="message" placeholder="Write Your Query" rows={4}></textarea>
                        </div>
                        <div className="w-full px-3">
                            <button className="w-full  bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Submit
                            </button>
                        </div>
                        </Fade>
                    {/* </div> */}
                </form>
                <div className=' flex items-center justify-center md:w-[50%]'>
                    <img src={getInTouchImg} alt='' />
                </div>
                    
                </div>
            </div>
        </div>
    );
}
