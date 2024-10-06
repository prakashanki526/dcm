import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TeamCard from '../components/TeamCard';
import anjuImg from '../assets/images/team/anju.jpeg';
import mampiImg from '../assets/images/team/mampi.jpg';
import moonImg from '../assets/images/team/moon1.jpeg';
import kabirImg from '../assets/images/team/kabir.jpeg';
import santanuImg from '../assets/images/team/santanu.jpeg';
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
                            description="I set the strategic direction for our company, ensuring we consistently deliver cutting-edge security services. My role is to empower our team to exceed client expectations and adapt to changing security needs."
                            count={0}
                        />
                    </Fade>

                    {/* Directors */}
                    <Fade direction="up" triggerOnce>
                        <TeamCard
                            img={mampiImg}
                            name="MS. MAMPI MONDAL"
                            position="DIRECTOR (INNOVATION & DEVELOPMENT)"
                            description="I focus on driving innovation and developing new ideas to keep our services ahead of the curve. My mission is to ensure we are always prepared for future challenges."
                            count={1}
                        />
                        <TeamCard
                            img={moonImg}
                            name="MS. MOONMOON MONDAL"
                            count={2}
                            position="DIRECTOR (FINANCE & ADMINISTRATION)"
                            description="I oversee all financial operations and administrative processes to ensure efficiency and compliance. My role is to provide a solid foundation that supports both our team and our clients."
                        />
                    </Fade>

                    {/* Operational Head & Senior Manager */}
                    <Fade direction="up" triggerOnce>
                        <TeamCard
                            img={kabirImg}
                            count={3}
                            name="MR. KABIR MONDAL"
                            position="OPERATIONAL HEAD"
                            description="I manage on-ground operations and build strong client relationships to provide effective security solutions. My goal is to ensure every client receives responsive and tailored support."
                        />
                        <TeamCard
                            img={santanuImg}
                            name="MR. SANTANU CHAUDHARY"
                            count={4}
                            position="SENIOR MANAGER ADMIN"
                            description="I take care of the logistical and administrative support to keep our operations seamless. My focus is on maintaining the backbone of our team, enabling them to perform at their best."
                        />
                    </Fade>
                </div>
            </div>

            <Footer />
        </div>
    )
}
