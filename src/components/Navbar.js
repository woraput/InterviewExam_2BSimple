
import React from 'react';
import Navitems from './Navitems';
import logo from '../img/libra_icon.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="header-box">
                <div className="logo-box">
                    <img src={logo} alt="icon libra" />
                </div>
                <p className="topic-text">libra tech</p>
            </div>
            <div className="search-box">
                <input className="search-bar" type="text" placeholder="search" />
            </div>
            <div className="ul-box">
                <ul>
                    <Navitems item="Home" tolink="/" ></Navitems>
                    <Navitems item="Solution" tolink="/solution" ></Navitems>
                    <Navitems item="Courses" tolink="/courses" ></Navitems>
                    <Navitems item="Jobs" tolink="/jobs"></Navitems>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
