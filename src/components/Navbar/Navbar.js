import React, { useState } from 'react';
import "./Navbar.css";
import companyLogo from "../../assets/images/homepage/maintehub-whitelogo.png";
import navExpand from "../../assets/images/homepage/navexpand.png";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigate = (path) => {
        navigate(path);
        setMenuOpen(false);
    }

    return (
        <div className='navbar'>
            <div className="navleft">
                <img src={companyLogo} alt="logo" onClick={() => handleNavigate("/")} style={{ cursor: "pointer" }} />
            </div>

            <ul className={`navcenter ${menuOpen ? "open" : ""}`}>
                <li onClick={() => handleNavigate("/about")}>About Us</li>
                <li onClick={() => handleNavigate("/features")}>Features <img src={navExpand} alt="navexpandbar" /></li>
                <li>Pricing <img src={navExpand} alt="navexpandbar" /></li>
                <li onClick={() => handleNavigate("/blogs")}>Blogs <img src={navExpand} alt="navexpandbar" /></li>
                <li onClick={() => handleNavigate("/contact")}>Contact</li>
            </ul>

            <div className="navright">
                <p>REQUEST A DEMO</p>
            </div>

            <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar