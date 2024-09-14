import React from 'react';

const TeamCard = (props) => {
    return (
        <div className='group bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl'>
            <div className='relative'>
                <img src={props.img} alt={props.name} className='w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500' />
            </div>

            <div className='p-6'>
                <h3 className='text-xl font-semibold text-center mb-2'>{props.name}</h3>
                <h4 className='text-lg text-orange-600 text-center mb-4'>{props.position}</h4>
                <p className='text-gray-600 text-sm leading-relaxed transition-opacity duration-300 text-center md:hidden italic'>
                    "{props.description}"
                </p>
            </div>

            {/* Description Overlay on Hover */}
            <div className='hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-all duration-500 md:flex justify-center items-center rounded-lg'>
                <p className='text-white p-4 text-center text-sm md:text-base italic'>
                    "{props.description}"
                </p>
            </div>
        </div>
    );
};

export default TeamCard;
