import React from 'react'
import './Program.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.jpg'
import program3 from '../../assets/program3.webp'
import { FaUserGraduate } from "react-icons/fa";
import { SlGraduation } from "react-icons/sl";
import { LiaUserGraduateSolid } from "react-icons/lia";

const Program = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
            <div className="img">
        <FaUserGraduate />
            </div>
            <p>Graduation Degree</p>
            </div>
      </div>
      <div className="program">
        <img src={program2} alt="" />
      <div className='caption'>
        <div className="img">
        <SlGraduation />
        </div>
        <p>Master Degree</p>
      </div>
      </div>
         <div className="program">
        <img className='longimg' src={program3} alt="" />
         <div className='caption'>
            <div className="img">
        <LiaUserGraduateSolid />
            </div>
        <p>Post Graduation</p>
        </div>
         </div>
      </div>
  )
}

export default Program
