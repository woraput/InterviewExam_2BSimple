
import React from 'react';
import Navitems from './Navitems';
import logo from '../img/libra_icon.png';

const Footer = () => {
    return (
        <footer className="navbar-footer">
            <div className="header-box-footer">
                <div className="logo-box">
                    <img src={logo} alt="icon libra" />
                </div>
                <p className="topic-text">libra tech</p>
            </div>
            <div className="ul-box-footer">
                <ul>
                    <Navitems item="Home" tolink="/" ></Navitems>
                    <Navitems item="Solution" tolink="/solution" ></Navitems>
                    <Navitems item="Courses" tolink="/courses" ></Navitems>
                    <Navitems item="Jobs" tolink="/jobs"></Navitems>
                </ul>
            </div>
            <div className="quote-box">
                <p>© LIBRA TECH, Inc. 2020. We love our users!</p>
            </div>
        </footer>
    )
}

export default Footer
