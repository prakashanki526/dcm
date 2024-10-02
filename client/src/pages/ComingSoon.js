import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';


export default function ComingSoon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [ timer, setTimer] = useState(5);

  const interval = setInterval(() => {
      setTimer(timer - 1);
  }, 1000);
  
  useEffect(()=>{
    setTimeout(function() { navigate('/'); }, 5000);
},[])



  return (
    <div className='z-0 tracking-wide md:tracking-wide'>
      <Navbar page="" />

      <div className='mt-[5.8rem] text-4xl flex flex-col items-center justify-center h-[40vh]'>
        {/* <Service /> */}
         <div className=''>Coming Soon</div>
         <div className='text-xl'>Redirecting to homepage in {timer} seconds</div>
      </div>

      <Footer />
    </div>
  )
}
