import {FaBars, FaTimes} from 'react-icons/fa';
import {useRef} from 'react';
import React from 'react';
import Link from 'react-router-dom'

function Nav(){
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <div>
            <a id = "nav_logo" href = "/Portfolio_Website/home">Liam Mazure</a>
            <nav ref = {navRef}>
                <Link to = "/Portfolio_Website/home">Home</Link>
                <Link to = "/Portfolio_Website/aboutme">About Liam</Link>
                <Link to = "/Portfolio_Website/projects">Projects</Link>
                <Link to = "/Portfolio_Website/resume">Resume</Link>
                <button className = "nav-btn nav-close-btn" onClick = {showNavBar}>
                    <FaTimes />
                </button>
            </nav>
                <button className = "nav-btn" onClick = {showNavBar}>
                    <FaBars />
                </button>
        </div>
    );

}

export default Nav;