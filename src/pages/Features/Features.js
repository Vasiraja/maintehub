import React from 'react'
import "./Features.css";

import FeaturesBanner from "../../assets/images/Features Page/featurebanner.jpg"
import firstFeatureIcon from "../../assets/images/Features Page/featurespoint1.png"
import secondFeatureIcon from "../../assets/images/Features Page/featurespoint2.png"
import thirdFeatureIcon from "../../assets/images/Features Page/featurespoint3.png"
import forthFeatureIcon from "../../assets/images/Features Page/featurespoint4.png"
import fifthFeatureIcon from "../../assets/images/Features Page/featurespoint5.png"
import sixthFeatureIcon from "../../assets/images/Features Page/featurespoint6.png"
import Featuredarticles from '../../components/Featuredarticles/Featuredarticles';
import Footer from '../../components/Footer/Footer';



const Features = () => {
    return (
        <div className='features'>
            <div className="features-banner">
                <img src={FeaturesBanner} alt="" />
            </div>
            <div className="service-features">
                <span className="headerspan" style={{ marginBottom: "2rem" }}>services</span>
                <div className="header-features">
                    <h1>Powerful Features Built for Smarter Maintenance</h1>
                    <p>MainteHub gives you complete control over your maintenance
                        operations — from job tracking to inventory and reporting —
                        all in one centralized platform.</p>
 
                </div>


            </div>
            <div className="services-points">
                <div className="individual-services-points">
                    <p>Job Management</p>
                    <img src={firstFeatureIcon} alt="firstfeatureIcon" />
                    <p id="features-description">Create, assign, and track work orders in real time.
                        Stay on top of every task from start to completion.</p>
                </div>
                <div className="individual-services-points">
                    <p>Employee Management</p>
                    <img src={secondFeatureIcon} alt="firstfeatureIcon" />
                    <p id="features-description"> Assign responsibilities clearly and track team productivity with full accountability.</p>
                </div>
                <div className="individual-services-points">
                    <p>Supplier Management</p>
                    <img src={thirdFeatureIcon} alt="firstfeatureIcon" />
                    <p id="features-description">Manage vendor details, contracts, and service records from one organized platform.</p>
                </div>
                <div className="individual-services-points">
                    <p>Checklist Management</p>
                    <img src={forthFeatureIcon} alt="firstfeatureIcon" />
                    <p id="features-description"> Standardize inspections and maintenance processes to ensure consistency and reduce errors.</p>
                </div>
                <div className="individual-services-points">
                    <p>Inventory Control</p>
                    <img src={fifthFeatureIcon} alt="firstfeatureIcon" />
                    <p id="features-description">Track spare parts, monitor stock levels, and prevent costly shortages or overstocking.</p>
                </div>
                <div className="individual-services-points">
                    <p>Reporting & Analytics</p>
                    <img src={sixthFeatureIcon} alt="firstfeatureIcon" />
                    <p id="features-description">Access real-time insights on maintenance performance, downtime, and operational costs.</p>
                </div>
            </div>
            <Featuredarticles />
            <Footer/>





        </div>
    )
}

export default Features
