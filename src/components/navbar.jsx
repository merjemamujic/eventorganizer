import React, { Children, useState } from "react";
import '../navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

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

            <Link to="index.html" className="brand">
                <div class="logo__img">
                    <img src="./images/logo2.png" class="img__fluid" />
                </div>
            </Link>

            <ul className={active}>
                <li className="nav__item"><Link to="/" className="active">Home</Link></li>
                {/* <li className="nav__item"><a to="/services" className="nav__link">Services</a></li>
                 */}
                <CustomLink to="/services">Services</CustomLink>
                <CustomLink to="/gallery">Gallery</CustomLink>
                <CustomLink to="/ourcompany">OurCompany</CustomLink>
                <CustomLink to="/inquiry">Inquiry</CustomLink>
                <CustomLink to="/contactus">ContactUs</CustomLink>
                {/* <li className="nav__item"><Link to="/gallery" className="nav__link">Gallery</Link></li>
                <li className="nav__item"><Link to="/ourcompany" className="nav__link">Our Company</Link></li>
                <li className="nav__item"><Link to="/inquiry" className="nav__link">Inquiry</Link></li>
                <li className="nav__item"><Link to="/contactus" className="nav__link">Contact Us</Link></li> */}
            </ul>

            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>

    )
}

export default Navbar;
