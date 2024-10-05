import React from 'react'

export default function ServiceCard1(props) {
  return (
    <div className='flex flex-col justify-center rounded-lg shadow-lg items-center h-60 transition-all bg-white duration-500 border-[#990011FF] p-6 group hover:bg-gradient-to-r from-orange-400 to-[#990011FF] gap-2 hover:scale-110'>
        {props.children}
        <div className='text-[#990011FF] text-lg font-medium group-hover:text-white text-center'>
            {props.service}
        </div>
    </div>
  )
}
