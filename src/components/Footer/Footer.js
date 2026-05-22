import React from 'react'
import "./Footer.css"
const Footer = () => {
    const date = new Date();

    const currentYear = date.getFullYear();
    return (
        <div className='footer'>
            <div className="footerpoints">
                <ul className="footerfirstgroup">
                    <li>Home</li>
                    <li>Works</li>
                    <li>About us</li>
                    <li>Culture</li>

                </ul>
                <ul className="footerfirstgroup">
                    <li>Careers</li>
                    <li>Services</li>
                    <li>Services Details</li>
                    <li>Team</li>

                </ul>
                <ul className="footerfirstgroup">
                    <li>Contact</li>
                    <li>News</li>
                    <li>News Details</li>
                    <li>Culture</li>

                </ul>
                <ul className="footerfirstgroup">
                    <li>Youtube</li>
                    <li>Vimeo</li>
                    <li>Tik Tok</li>
                    <li>Instagram</li>

                </ul>
            </div>
            <div className="footerdescription">
                <p>&copy;  {currentYear} MAINTEHUB. All rights reserved.</p>
                <div className="footerdescription-addon">
                    <p>Privacy Policy</p>
                <p>Terms of Service</p>
                </div>
                
            </div>
            <h1>MainteHub</h1>


        </div>
    )
}

export default Footer
