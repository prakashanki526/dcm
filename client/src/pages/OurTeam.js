import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TeamCard from '../components/TeamCard'
import anjuImg from '../assets/images/team/anju.jpg'
import mampiImg from '../assets/images/team/mampi.jpg'
import moonImg from '../assets/images/team/moon.jpg'
import kabirImg from '../assets/images/team/kabir.jpg'
import santanuImg from '../assets/images/team/santanu.jpg'
import asisImg from '../assets/images/team/asis.jpg'
import { Fade } from 'react-awesome-reveal'
import Heading from '../components/Heading'

export default function OurTeam() {
    return (
        <div className='z-0 tracking-wide md:tracking-wide'>
            <Navbar page="our-team" />

            <div className='section px-3 md:px-24 lg:px-40 py-4 md:py-8 lg:py-10 mt-[5.8rem]'>
                <Fade direction="up" triggerOnce>

                    {/* <h1 className='text-2xl md:text-4xl text-center md:mb-4 mt-4'>MEET OUR TEAM</h1> */}
                    <Heading text="MEET OUR TEAM" />
                    <h2 className='text-xl md:text-2xl text-center mb-4 md:mb-8 italic'>"Alone we can do so little; together we can do so much."</h2>
                </Fade>

                <Fade direction="up" triggerOnce>
                    <div className='md:h-[32rem] flex justify-center'>

                        <TeamCard img={anjuImg} name="MRS. ANJUMANARA BEGAM" position="MANAGING DIRECTOR" />
                    </div>
                </Fade>
                <Fade direction="up" triggerOnce>

                    <div className='md:h-[30rem] flex justify-center flex-col md:flex-row mt-12 gap-12'>
                        <TeamCard img={mampiImg} name="MS. MAMPI MONDAL" position="DIRECTOR" />
                        <TeamCard img={moonImg} name="MS. MOONMOON MONDAL" position="DIRECTOR" />
                    </div>
                </Fade>
                <Fade direction="up" triggerOnce>

                    <div className='md:h-[28rem] flex justify-center flex-col md:flex-row mt-12 gap-12'>
                        <TeamCard img={kabirImg} name="MR. KABIR MONDAL" position="OPERATIONAL HEAD" />
                        <TeamCard img={asisImg} name="MS. MOONMOON MONDAL" position="ASISTANT MANAGER ADMIN" />
                        <TeamCard img={santanuImg} name="MR. SANTANU CHAUDHARY" position="SENIOR MANAGER ADMIN" />
                    </div>
                </Fade>
            </div>

            <Footer />
        </div>
    )
}
