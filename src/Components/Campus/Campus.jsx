import React from 'react'
import './Campus.css'
import { FaArrowRight } from "react-icons/fa";
import gallerypic1 from '../../assets/gallerypic1.jpg'
import gallerypic2 from '../../assets/gallerypic2.jpg'
import gallerypic3 from '../../assets/gallerypic3.jpg'
import gallerypic4 from '../../assets/gallery4.jpg'

const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={gallerypic1} alt="" />
            <img src={gallerypic2} alt="" />
            <img src={gallerypic3} alt="" />
            <img src={gallerypic4} alt="" />
        </div>
        <button className='btn dark-btn1'>See More Here <span><FaArrowRight /></span> </button>
    </div>
  )
}

export default Campus
