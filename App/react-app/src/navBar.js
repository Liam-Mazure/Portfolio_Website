import {FaBars, FaTimes} from 'react-icons/fa';
import {useRef} from 'react';
import React from 'react';

function Nav(){
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <div>
            <a id = "nav_logo" href = "/Portfolio_Website/home">Liam Mazure</a>
            <nav ref = {navRef}>
                <a href = "/Portfolio_Website/home">Home</a>
                <a href = "/Portfolio_Website/aboutme">About Liam</a>
                <a href = "/Portfolio_Website/projects">Projects</a>
                <a href = "/Portfolio_Website/resume">Resume</a>
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