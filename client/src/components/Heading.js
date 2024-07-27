import React from 'react'

export default function Heading(props) {
  return (
    <div>
        <h1 className='text-2xl md:text-4xl text-center md:mb-4 mt-4'>{props.text}</h1>
    </div>
  )
}
