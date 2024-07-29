import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import { PiGithubLogoThin } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const[sticky, setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY>570 ? setSticky(true) : setSticky(false);
    })
  },[]);
  
  const[mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu =()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
  <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <div className="logo">
      <PiGithubLogoThin />
      </div>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link> </li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}> Program </Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}> About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonals' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact</Link></li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
      <IoMdMenu />
      </div>
    </nav>
  )
}

export default Navbar
