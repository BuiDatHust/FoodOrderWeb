import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../SideBar'
import { HeroContainer,HeroBtn,HeroContent,HeroH1,HeroItem,HeroP } from './HeroElement'

const Hero = () => {
    const [isOpen, setIsOpen]= useState(false);

    const toogle= () =>{
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <Navbar toggle={toogle }/>
            <SideBar isOpen={isOpen} toggle={toogle} />
            <HeroContent>
                <HeroItem>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
            </HeroItem>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
