import React from "react";
import '../navbar.css';

function Navbar() {
    return (
        <nav className="nav">
            <a href="index.html" className="brand">
                <div class="logo__img">
                    <img src="./images/logo1.png" class="img__fluid" />
                </div>
            </a>
            <ul className="nav__menu">
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        Home  |
                    </a>
                </li>
                <li className="nav__item"><a href="#" className="nav__link">Services</a> | </li>
                <li className="nav__item"><a href="#" className="nav__link">Gallery</a> | </li>
                <li className="nav__item"><a href="#" className="nav__link">Our Company</a> | </li>
                <li className="nav__item"><a href="#" className="nav__link">Inquiry</a> | </li>
                <li className="nav__item"><a href="#" className="nav__link">Contact Us</a></li>
            </ul>
            <div className="nav__toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;
