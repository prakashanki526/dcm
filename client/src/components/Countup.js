import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Countup = ({ icon, start = 0, end, text }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.1, // Trigger when 10% of the component is in view
    });

    return (
        <div ref={ref}>
            {inView && (
                // <CountUp start={0} end={end} duration={duration} prefix={prefix} suffix={suffix} />
                <CountUp start={start} end={end} delay={0} duration={2.5}>
                    {({ countUpRef }) => (
                        <div className='text-3xl flex gap-4'>
                            <div className='flex items-center justify-center'>
                                <img src={icon} alt='' className='h-10' />
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <div className=''>
                                    <span ref={countUpRef} />+

                                </div>
                                <div className='text-lg text-gray-600 text-left'>{text}</div>
                            </div>
                        </div>
                    )}
                </CountUp>
            )}
        </div>
    );
};

export default Countup;
