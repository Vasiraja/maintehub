import React from 'react';
import "./Navbar.css";
import companyLogo from "../../assets/images/homepage/maintehub-whitelogo.png";
import navExpand from "../../assets/images/homepage/navexpand.png";
import {useNavigate} from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='navbar'>

            <div className="navleft">

                <img src={companyLogo} alt="logo" onClick={()=>navigate("/")} style={{cursor:"pointer"}} />
            </div>
            <ul className="navcenter">
                <li onClick={()=>navigate("/about")}>About Us</li>
                <li onClick={()=>navigate("/features")} >Features  <img src={navExpand} alt="navexpandbar" /> </li>
                <li>Pricing <img src={navExpand} alt="navexpandbar" />  </li>
                <li onClick={()=>navigate("/blogs")}>Blogs    <img src={navExpand} alt="navexpandbar" /> </li>
                <li onClick={()=>navigate("contact")}>Contact</li>


            </ul>
            <div className="navright">
                <p>REQUEST A DEMO</p>

            </div>

        </div>
    )
}

export default Navbar
