import React, { useRef, useState } from 'react'
import './Testimonals.css'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import user1 from '../../assets/user1.webp'
import user2 from '../../assets/user2.webp'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.webp'


const Testimonals = () => {
     const slider = useRef();
     let tx = 0;

  const slideForward =()=>{
          if(tx > -50){
            tx -= 25;
          }
          slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward =()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    
  }
  return (
    <div className='testimonals '>
     <div onClick={slideForward} className="next-btn">
     <GrNext  />
     </div>
     <div  onClick={slideBackward} className="back-btn">
     < GrPrevious /> 
     </div>
     <div className="slider">
         <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4}  alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Repellat dolore dolorem sunt incidunt quae!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Repellat dolore dolorem sunt incidunt quae!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Repellat dolore dolorem sunt incidunt quae!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Repellat dolore dolorem sunt incidunt quae!
              </p>
            </div>
          </li>
         </ul>
     </div>
    </div>
  )
}

export default Testimonals
