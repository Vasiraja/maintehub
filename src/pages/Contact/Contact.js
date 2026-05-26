import React from 'react'
import "./Contact.css"

import contactCardImg from "../../assets/images/contactcardimg.jpg"
import Faqquestions from '../../components/Faqquestions/Faqquestions'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="firstcontactdiv">
                <h1>Contact</h1>
                <div className="insidecontactheader">
                    <span className="headerspan" id="headerspanid">GET IN TOUCH</span>
                    <p>MainteHub gives you complete control over your maintenance operations —
                        from job tracking to inventory and reporting —
                        all in one centralized platform.</p>
                </div>
            </div>
            <div className="contactcard">
                <div className="leftcardimg">
                    <img src={contactCardImg} alt="contact-card" />
                </div>
                <div className="rightcardimg">
                    <div className="insidecarddet">
                        <span>↳ Your Info</span>
                        <div className="firstcolumn">
                            <p>Name</p>
                            <p>Phone</p>

                            <input type="text" placeholder='First Last' />
                            <input type="text"  placeholder='Your Phone'/>

                        </div>
                        <div className="firstcolumn">
                            <p>Company</p>
                            <p>Email Address</p>

                            <input type="text" placeholder='Company Name' />
                            <input type="text"  placeholder='Email Address'/>

                        </div>
                        <div className="messagecolumn">
                            <p>Message</p>
 
                            <input type="text" placeholder='Your Message' />
 
                        </div>
                        <button>
                            SUBMIT
                        </button>




                    </div>

                </div>
            </div>
            <Faqquestions />
            <Footer/>

        </div>
    )
}

export default Contact
