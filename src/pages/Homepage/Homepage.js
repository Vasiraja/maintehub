import React, { useState } from 'react'
import "./Homepage.css";
import homePageCover from "../../assets/images/homepage/homepagecover.jpg"
import LogoLight from "../../assets/images/maintehub-whitelogo light.png";

import whatWeDoFirst from "../../assets/images/homepage/whatwedo/whatwedofirstimg.jpg";
import whatWeDoSecond from "../../assets/images/homepage/whatwedo/whatwedosecondimg.jpg";
import whatWeDoThird from "../../assets/images/homepage/whatwedo/whatwedothirdimg.jpg";
import whatWeDoForth from "../../assets/images/homepage/whatwedo/whatwedoforthimg.jpg";
import whatWeDoFifth from "../../assets/images/homepage/whatwedo/whatwedofifthimg.jpg";
import whatWeDoSixth from "../../assets/images/homepage/whatwedo/whatwedosixthimg.jpg";
import ceoImg from "../../assets/images/ceo.jpg";
import Featuredarticles from '../../components/Featuredarticles/Featuredarticles';
import Footer from '../../components/Footer/Footer';
import Faqquestions from '../../components/Faqquestions/Faqquestions';

const whatWeDoData = [
    {
        id: 1,
        img: whatWeDoFirst,
        alt: "job work management",
        title: "Job & Work Order Management",
        description: "Manage all maintenance jobs in one place. Create, assign, and track work orders easily. Know who is doing what and when it will be completed."
    },
    {
        id: 2,
        img: whatWeDoSecond,
        alt: "asset management",
        title: "Asset Management",
        description: "Keep track of all your assets and equipment. Store service history, condition reports, and maintenance schedules. Increase asset life and reduce breakdowns."
    },
    {
        id: 3,
        img: whatWeDoThird,
        alt: "employee supplier management",
        title: "Employee & Supplier Management",
        description: "Manage your staff and vendors from one system. Assign responsibilities clearly and track performance. Improve communication and accountability."
    },
    {
        id: 4,
        img: whatWeDoForth,
        alt: "checklist task scheduling",
        title: "Checklist & Task Scheduling",
        description: "Create daily, weekly, or monthly checklists. Make sure no task is missed. Standardize operations across all sites."
    },
    {
        id: 5,
        img: whatWeDoFifth,
        alt: "inventory stock control",
        title: "Inventory & Stock Control",
        description: "Monitor spare parts and materials in real time. Avoid stock shortages or over-ordering. Track usage and manage costs better."
    },
    {
        id: 6,
        img: whatWeDoSixth,
        alt: "reporting analytics",
        title: "Reporting & Analytics",
        description: "Get clear reports on jobs, costs, and performance. See what is working and where to improve. Make better decisions with real data."
    }
];
const processData = [
    {
        id: 1,
        title: "Assessment & Audit",
        description: "We begin by understanding your facility, systems, and operational challenges. Through detailed site assessments and consultations, we identify gaps, risks, and improvement opportunities."
    },
    {
        id: 2,
        title: "Monitoring & Optimization",
        description: "Using modern tools and tracking systems, we monitor performance, analyze data, and continuously improve maintenance outcomes for better uptime and reduced costs."
    },
    {
        id: 3,
        title: "Strategic Planning",
        description: "We design a customized maintenance strategy tailored to your infrastructure, budget, and long-term goals."
    },
    {
        id: 4,
        title: "Quality Assurance",
        description: "Every service undergoes strict quality checks to ensure compliance with safety standards and industry best practices."
    },
    {
        id: 5,
        title: "Implementation",
        description: "Our skilled technicians execute preventive, corrective, and emergency maintenance with precision and safety."
    },
    {
        id: 6,
        title: "Ongoing Support & Reporting",
        description: "We provide transparent reporting, regular updates, and dedicated support."
    }
];
const faqs = [
    {
        id: 1,
        question: "What is Maintehub?",
        answer: "Maintehub is a platform designed to streamline maintenance operations and help teams manage tasks efficiently.",
    },
    {
        id: 2,
        question: "What services does Maintehub offer?",
        answer: "Simply sign up for an account, set up your workspace, and invite your team members to begin collaborating.",
    },
    {
        id: 3,
        question: "How can Maintehub help my business?",
        answer: "Simply sign up for an account, set up your workspace, and invite your team members to begin collaborating.",
    },
    {
        id: 4,
        question: "How do I get started with Maintehub?",
        answer: "Simply sign up for an account, set up your workspace, and invite your team members to begin collaborating.",
    },
];

const Homepage = () => {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };
    return (
        <div className='homepage'>
            <div className="covercontainer">
                <img src={homePageCover} alt="" />
                <div className="coverheaderblock">
                    <p>
                        <span style={{ fontWeight: "300" }}>SMART</span> <br />
                        <span style={{ fontWeight: "400" }}>MAINTENANCE</span>
                        <span style={{ fontWeight: "600" }}> MADE</span> <br />
                        <span style={{ fontWeight: "300" }}>SIMPLE</span>
                    </p>
                    <p className='coverdescription'>
                        MainteHub helps businesses manage assets, jobs, staff, and facilities from one easy platform.
                    </p>
                    <div className="coverblockbuttons">
                        <button>REQUEST A DEMO</button>
                        <button>TALK TO US</button>
                    </div>
                </div>
                <div className="mirrorcoverblock">
                    <p>Simple Maintenance. Better Operations.</p>
                    <p>
                        MainteHub helps factories, facilities, hotels, and offices{" "}
                        <span style={{ fontWeight: "500" }}>stay organized and efficient.</span>
                    </p>
                </div>
            </div>

            <div className="whatwedo">
                <div className="whatwedoheader">What we Do</div>
                <div className="whatwedowhole">
                    {whatWeDoData.map((item) => (
                        <div className="firstblock" key={item.id}>
                            <img src={item.img} alt={item.alt} />
                            <div className="firstblockinside">
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                                <p>View Details</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="ourprocess">
                <img src={LogoLight} alt="coverimg" />
                <p id="processglobalheader">Our Process</p>
                <div className="processblocks">
                    {processData.map((item) => (
                        <div className="processblockheader" key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>


            </div>
            <div className="aboutceoblock">
                <img src={ceoImg} alt="ceoimg" />
                <div className="ceoblockright">
                    <p id="rightblockheader">“We built MainteHub to simplify maintenance for growing businesses.”</p>
                    <p>Many companies in Uganda still manage maintenance using paper, phone calls,
                        and scattered spreadsheets. We saw how this caused delays,
                        confusion, and unnecessary costs.</p>
                    <p>That's why we created MainteHub —
                        one simple system to manage jobs, assets, staff, and inventory in one place.
                        Our goal is clear:
                        Reduce manual work. Improve efficiency. Help businesses stay in control..</p>

                    <div className="ceoblockfooter">
                        <p style={{ color: "rgba(122, 122, 122, 1)" }} > <span style={{ color: "rgba(0, 0, 0, 1)" }}>Sophy</span> <br />    Founder & CEO, MainteHub</p>
                    </div>
                </div>

            </div>
            <Faqquestions />
            <Featuredarticles />
            <Footer />



        </div>
    )
}

export default Homepage