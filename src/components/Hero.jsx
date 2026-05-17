import React from 'react'
import "./Hero.css"
import hand_icon from "../assets/hand_icon1.jpg"
import { GoChevronRight } from "react-icons/go";
import insan from "../assets/ash.jpg"
const Hero = () => {
  return (
    <div className='hero'>
    <div className='hero-left'>
<h2>Best Deals !  Best Prices !</h2>
    

<div className='hero-hand-icon'>
    <p>New 👋</p>
    
</div>

<p>Collections</p>
<p>for everyone</p>
 <div className='hero-latest-btn'>
    <div>Latest Collection</div>
<GoChevronRight size={30} />
 </div>
 </div>
 
    <div className='hero-right'>

    <img src={insan} alt='' width="350px"  height="400px"/>

    </div>
</div>
  )
}

export default Hero