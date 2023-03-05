import React from "react";
import '../component/style.css';
import { FaInstagramSquare, FaYoutubeSquare, FaFacebookSquare} from "react-icons/fa";
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
const Navbar = () =>
{
    const [showIcon, setshowIcon] = useState(false);
    return (
        <>
        <nav className="main_nav">
        {/* Logo Part */}
        <div className="logo">
            <h2><span>P</span>RAJAKTA<span>C</span>HIDDARWAR</h2>
        </div>
        {/* Menu Part */}
        <div className= {showIcon ? "menu-link mobile-menu" : "menu-link"}>
        {/* <div className={`navbar-collapse collapse`}></div> */}
            <ul>
                <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/about" >About Us</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/service" >Services</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/contact" >Contact Us</NavLink></li>
            </ul>
        </div>
        {/* Nav Icons  Social Icons*/}
        <div className="social_media">

        
            <ul className="social_media_desktops">
                <li>
                <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM&t=572s" target="_Thapa">
                {/* <faYoutubeSquare className="youtube"/> */}
               <FaYoutubeSquare className="youtube" />
                </a></li>
                <li><a href="https://www.facebook.com" target="_Thapa">
                <FaFacebookSquare className="facebook"/></a></li>
                <li><a href="https://www.instagram.com" target="_Thapa">
                <FaInstagramSquare className="instagram"/></a> </li>
                <div className="hamburger-menu">
                <a href="#" onClick={()=>setshowIcon(!showIcon)}>
                    <GiHamburgerMenu/>
                </a>
            </div>
            </ul>
            {/* Hamburger Menu */}
            
        </div>
        
        </nav>
       {/* Main section
       <section className="hero_section">
        <p>Welcome React</p>
       </section> */}

        </>
    )
}

export default Navbar;