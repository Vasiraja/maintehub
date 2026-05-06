import React from 'react';
import "./Navbar.css";
import companyLogo from "../../assets/images/homepage/maintehub-whitelogo.png";
import navExpand from "../../assets/images/homepage/navexpand.png";
const Navbar = () => {
    return (
        <div className='navbar'>

            <div className="navleft">

                <img src={companyLogo} alt="" />
            </div>
            <ul className="navcenter">
                <li>About Us</li>
                <li>Features <img src={navExpand} alt="navexpandbar" /> </li>
                <li>Pricing <img src={navExpand} alt="navexpandbar" />  </li>
                <li>Blogs    <img src={navExpand} alt="navexpandbar" /> </li>
                <li>Contact</li>

            </ul>
            <div className="navright">
                <p>REQUEST A DEMO</p>

            </div>

        </div>
    )
}

export default Navbar
