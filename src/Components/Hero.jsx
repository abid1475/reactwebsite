import React from 'react'
import './Hero.css'
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='hero container'>
       <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className='btn'>Explore More <span><FaLongArrowAltRight /></span></button>
       </div>
    </div>
  )
}

export default Hero
