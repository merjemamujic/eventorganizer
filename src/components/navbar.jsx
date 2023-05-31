import React, {useState} from "react";
import '../navbar.css';

function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");

        const navToggle = () => {
            active === "nav__menu"
            ? setActive("nav__menu nav__active")
            : setActive("nav__menu");

            //  TogglerIcon   

            toggleIcon === "nav__toggler"
            ? setToggleIcon("nav__toggler toggle")
            : setToggleIcon("nav__toggler");
        };

    return (
        <nav className="nav">
            
            <a href="index.html" className="brand">
                <div class="logo__img">
                    <img src="./images/logo2.png" class="img__fluid" />
                </div>
            </a>

            <ul className={active}>
                <li className="nav__item"><a href="index.html" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Services</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Gallery</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Our Company</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Inquiry</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact Us</a></li>
            </ul>

            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;
