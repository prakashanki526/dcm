import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import getInTouchImg from '../assets/images/get-in-touch2.png';
import { postQuery } from '../api/discover';
import toast, { Toaster } from 'react-hot-toast';

export default function GetInTouch() {
    const [queryData, setQueryData] = useState({
        name: "",
        email: "",
        contact: "",
        query: ""
    });

    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if(queryData.contact.length !== 10){
            toast.error('Invalid contact no.')
            return;
        }
        
        setLoading(true);
        const res = await postQuery(queryData);
        if (res.success) {
            toast.success("Query sent");
            setQueryData({
                name: "",
                email: "",
                contact: "",
                query: ""
            });
        } else {
            toast.error("Failed to send query. Please try again.");
        }
        setLoading(false);
    }

    return (
        <div className="section px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-10">
            <Toaster />
            <div className="flex flex-col items-center">
                <div className='flex flex-col-reverse md:flex-row gap-4 md:justify-between w-full'>
                    <form className="w-full max-w-lg md:w-[50%]" onSubmit={handleSubmit}>
                        <Fade cascade damping={0.2} triggerOnce className='flex flex-wrap -mx-3 mb-6'>
                            <div className="w-full px-3 mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Your Name" value={queryData.name} onChange={(e) => setQueryData({ ...queryData, [e.target.name]: e.target.value })} required />
                            </div>
                            <div className="w-full px-3 mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="email" placeholder="Your Email" value={queryData.email} onChange={(e) => setQueryData({ ...queryData, [e.target.name]: e.target.value })} required />
                            </div>
                            <div className="w-full px-3 mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="mobile">
                                    Mobile No
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="contact" type="tel" placeholder="Your Mobile No" value={queryData.contact} onChange={(e) => setQueryData({ ...queryData, [e.target.name]: e.target.value })} required />
                            </div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                                    Your Query
                                </label>
                                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" name="query" placeholder="Write Your Query" value={queryData.query} onChange={(e) => setQueryData({ ...queryData, [e.target.name]: e.target.value })} required rows={4}></textarea>
                            </div>
                            <div className="w-full px-3">
                                <button className="w-full bg-[#990011FF] hover:opacity-90 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={loading}>
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </Fade>
                    </form>
                    <div className='flex items-center justify-center md:w-[50%]'>
                        <img src={getInTouchImg} alt='Get in touch' />
                    </div>
                </div>
            </div>
        </div>
    );
}
