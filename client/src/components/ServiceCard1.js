import React from 'react'

export default function ServiceCard1(props) {
  return (
    <div className='flex flex-col justify-center rounded-lg shadow-lg items-center h-60 transition-all duration-500 border-orange-600 p-6 group hover:bg-orange-600 gap-2 hover:scale-110'>
        {props.children}
        <div className='text-orange-600 text-lg font-medium group-hover:text-white text-center'>
            {props.service}
        </div>
    </div>
  )
}
