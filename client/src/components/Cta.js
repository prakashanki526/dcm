import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cta(props) {
    const navigate = useNavigate();
  return (
    <div className='text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 cursor-pointer inline-block text-sm my-4 w-fit' onClick={()=>navigate(`/${props.navigateTo}`)}>
        Read More
    </div>
  )
}
