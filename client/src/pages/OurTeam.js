import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TeamCard from '../components/TeamCard';
import anjuImg from '../assets/images/team/anju.jpeg';
import mampiImg from '../assets/images/team/mampi.jpg';
import moonImg from '../assets/images/team/moon1.jpeg';
import kabirImg from '../assets/images/team/kabir.jpg';
import santanuImg from '../assets/images/team/santanu.jpg';
import { Fade } from 'react-awesome-reveal';
import Heading from '../components/Heading';

export default function OurTeam() {
    return (
        <div className='z-0 tracking-wide md:tracking-wide'>
            <Navbar page="our-team" />

            <div className='section px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-10 mt-[5.8rem]'>
                <Fade direction="up" triggerOnce>
                    <Heading text="MEET OUR TEAM" />
                    <h2 className='text-xl md:text-2xl text-center mb-4 md:mb-8 italic'>"Alone we can do so little; together we can do so much."</h2>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols- gap-12 mt-12">
                    {/* Managing Director */}
                    <Fade direction="up" triggerOnce>
                        <TeamCard 
                            img={anjuImg} 
                            name="MRS. ANJUMANARA BEGAM" 
                            position="MANAGING DIRECTOR"
                            description="As the Managing Director, I am deeply committed to fostering a culture of excellence and innovation within our organization. My role is to steer our company toward achieving its vision while ensuring that every team member is empowered and inspired. Together, we strive to set new standards and deliver exceptional results." 
                        />
                    </Fade>

                    {/* Directors */}
                    <Fade direction="up" triggerOnce>
                        <TeamCard 
                            img={mampiImg} 
                            name="MS. MAMPI MONDAL" 
                            position="DIRECTOR"
                            description="In my role as Director, I focus on strategic planning and driving growth initiatives. I take pride in collaborating with our talented team to bring innovative solutions to the forefront and meet our clients' needs."
                        />
                        <TeamCard 
                            img={moonImg} 
                            name="MS. MOONMOON MONDAL" 
                            position="DIRECTOR"
                            description="As a Director, I aim to contribute to shaping the company's future while upholding our core values of integrity and excellence. My goal is to help lead innovation while maintaining a strong sense of purpose."
                        />
                    </Fade>

                    {/* Operational Head & Senior Manager */}
                    <Fade direction="up" triggerOnce>
                        <TeamCard 
                            img={kabirImg} 
                            name="MR. KABIR MONDAL" 
                            position="OPERATIONAL HEAD"
                            description="As the Operational Head, my focus is on optimizing efficiency and effectiveness across all departments. I work closely with our teams to streamline processes and ensure our services exceed expectations." 
                        />
                        <TeamCard 
                            img={santanuImg} 
                            name="MR. SANTANU CHAUDHARY" 
                            position="SENIOR MANAGER ADMIN"
                            description="In my role as Senior Manager Admin, I manage daily operations, supporting staff and ensuring that everything runs smoothly. I am dedicated to fostering an organized and supportive environment for success."
                        />
                    </Fade>
                </div>
            </div>

            <Footer />
        </div>
    )
}
