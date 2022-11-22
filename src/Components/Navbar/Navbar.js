import React from "react";
import "./Navbar.css"
import {Link, NavLink} from "react-router-dom";

function Navbar() {
    return(

        <div className="navbarContainer">
            <div className="navbar">
                <Link to="MainPage" className='logo docoFont'>
                2022 PORTPOLIO
                </Link>

                <div className='links'>
                <NavLink to="MainPage">Home</NavLink>
                <NavLink to="About">About</NavLink>
                <NavLink to="Profile">Profile Platform</NavLink>
                <NavLink to="Contact">Contact</NavLink>
                </div>

                <Link to="Contact" className='name docoFont'>
                JINAH CHAE
                </Link>
            </div>
        </div>

    );
}


export default Navbar;