import React from 'react'
import './About.css'
import { FaRegCirclePlay } from "react-icons/fa6";
import Aboutpic1 from '../../assets/Aboutpic1.avif'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={Aboutpic1} alt="" className='about-img' />
            <div className='play-icon' onClick={()=>{
              setPlayState(true)
            }}>
        <FaRegCirclePlay />
            </div> 
        </div>

        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Numquam consequuntur eaque dolor obcaecati corrupti? In!</p>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Beatae ex pariatur, quisquam maxime dicta mollitia aperiam ullam commodi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Id error at tenetur maxime, fugit quae dolore! Eveniet, reprehenderit!</p>
        </div>
      
    </div>
  )
}

export default About
