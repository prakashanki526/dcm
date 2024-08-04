import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import { Fade } from 'react-awesome-reveal';

const jobList = [
    {
        role: 'Security Officer',
        description: 'Responsible for the safety and security of the premises.'
    },
    {
        role: 'Facility Manager',
        description: 'Oversee the maintenance and smooth operation of facilities.'
    },
    {
        role: 'HR Manager',
        description: 'Manage HR functions including recruitment, training, and employee relations.'
    }
];

export default function Careers() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const targetDivRef = useRef(null);

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setShowForm(true);
        // ref.current?.scrollIntoView({ behavior: 'smooth' })
        // if (targetDivRef.current) {
        //     const targetPosition = targetDivRef.current.getBoundingClientRect().top + window.scrollY;
        //     window.scrollTo({
        //         top: targetPosition - 100,
        //         behavior: 'smooth',
        //     });
        // }

        if (targetDivRef.current) {
            const targetPosition = targetDivRef.current.getBoundingClientRect().top + window.scrollY;
            setTimeout(() => {
              window.scrollTo({
                top: targetPosition - 100,
                behavior: 'smooth',
              });
            }, 0);
          }
    };

    return (
        <div className='z-0 tracking-wide md:tracking-wide'>
            <div id='navbar'>

                <Navbar page="careers" />
            </div>

            <div className='mt-[5.8rem] bg-gray-200'>
                <div className='section px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-10 overflow-hidden'>
                    {/* <div className='px-3 md:px-16 lg:px-48 py-4 md:py-8 lg:py-10'> */}
                    <Heading text="Careers" />
                <Fade direction="up" triggerOnce>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobList.map((job, index) => (
                            
                            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-orange-600 mb-2">{job.role}</h3>
                                <p className="text-gray-700 mb-4">{job.description}</p>
                                <button
                                    onClick={() => handleApplyClick(job)}
                                    className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 cursor-pointer inline-block text-sm my-2"
                                >
                                    Apply
                                </button>
                            </div>
                        ))}
                    </div>
                    </Fade>

                    {showForm && (
                        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg" ref={targetDivRef}>
                            <h3 className="text-2xl font-semibold text-center mb-4">Apply for <span className='font-bold text-orange-600'>{selectedJob.role}</span></h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-700">Name</label>
                                    <input type="text" className="w-full p-2 border-0 focus:outline-none rounded bg-gray-100" />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Email</label>
                                    <input type="email" className="w-full p-2 border-0 focus:outline-none rounded bg-gray-100" />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Contact</label>
                                    <input type="text" className="w-full p-2 border-0 focus:outline-none rounded bg-gray-100" />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Resume</label>
                                    <input type="file" accept="application/pdf" className="w-full p-2 border-0 focus:outline-none rounded bg-gray-100" />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="text-white bg-orange-500 hover:bg-orange-600 px-6 py-3 cursor-pointer inline-block text-sm my-2">Submit</button>
                                </div>
                            </form>
                        </div>
                    )}
                    {/* </div> */}
                </div>

            </div>

            <Footer />
        </div>


    );
}
