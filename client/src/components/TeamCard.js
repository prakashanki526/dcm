import React from 'react';

const TeamCard = (props) => {
    return (
        <div className='group bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-500 flex flex-col md:flex-row hover:shadow-2xl m-auto'>
            <div className='h-80 w-ful'>
                <img src={props.img} alt={props.name} className='h-full object-cover m-auto' />
            </div>
            <div className='h-full flex flex-col items-center justify-center w-fit'>

                <div className='p-6'>
                    <h3 className='text-xl font-semibold text-center mb-2'>{props.name}</h3>

                    <h4 className='text-lg text-orange-600 text-center mb-4'>{props.position}</h4>
                    <p className='text-gray-600 text-lg leading-relaxed transition-opacity duration-300 text-justify italic'>
                        "{props.description}"
                    </p>
                </div>

                {/* Description Overlay on Hover */}
                {/* <div className='hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-all duration-500 md:flex justify-center items-center rounded-lg'>
                <p className='text-white p-4 text-center text-sm md:text-base italic'>
                    "{props.description}"
                </p>
            </div> */}

            </div>
        </div>
    );
};

export default TeamCard;
