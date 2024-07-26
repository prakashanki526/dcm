import React from 'react';
import {Fade} from "react-awesome-reveal";
const TeamCard = (props) => {
    return (
        // <Fade triggerOnce delay={0.8}>
        <div className={`group w-fit h-full my-2 lg:mx-2 cursor-pointer shadow-xl relative md:hover:scale-110 transition-all duration-500`}>
            <img src={props.img} alt={props.name} className='h-full'></img>

            <div className={`absolute flex bottom-0 w-full bg-[#1ba6f7] text-white py-1 justify-center items-center opacity-80`}>
                <div className='flex flex-col justify-center items-center tracking-wider'>
                    <div className='text-xl md:text-2xl text-center'>{props.name}</div>
                    <div className='text-sm md:text-lg text-center'>{props.position}</div>
                </div>
            </div>
        </div>
        // </Fade>
    );
};

export default TeamCard;