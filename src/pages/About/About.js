import React, { useEffect } from 'react'
import "./About.css";
import aboutBanner from "../../assets/images/homepage/about/aboutbanner.jpg";
import storyBanner from "../../assets/images/homepage/about/storyimg.jpg";
import statsBanner from "../../assets/images/statsbanner.jpg";
import founderone from "../../assets/images/ceo.jpg"
import foundertwo from "../../assets/images/ceo2.jpg"

const About = () => {

    useEffect(() => {
        const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className='about'>
            <div className="aboutblock-header">
                <div className="aboutblock-header-left reveal">
                    <span className='headerspan'>ABOUT</span>
                    <p>MainteHub is a smart maintenance management platform built to
                        help businesses manage their daily operations better.
                        We focus on simplicity, clarity, and real-world use.</p>
                </div>
                <p className="aboutblock-header-right reveal reveal-delay-2">
                    To simplify maintenance through digital tools.
                </p>
            </div>

            <div className="aboutblock-banner reveal">
                <img src={aboutBanner} alt="aboutbanner" />
            </div>

            <div className="storyblock">
                <div className="storyblock-left reveal-left">
                    <span className="headerspan">
                        OUR STORY
                    </span>
                    <div className="storyblock-question">
                        <p>MainteHub was built to simplify maintenance for growing businesses.</p>
                        <p>We saw companies struggling with paper records, missed tasks, and unclear processes. As operations expanded, managing assets and jobs became more difficult.</p>
                        <p>So we created a simple digital platform that brings everything into one place jobs, assets, staff, and inventory.</p>
                        <p>Our goal is clear: make maintenance organized, efficient, and easy to manage.</p>
                    </div>
                </div>
                <div className="storyblock-right reveal-right">
                    <img src={storyBanner} alt="storybanner" />
                </div>
            </div>

            <div className="statsblock">
                <span className="headerspan reveal">OUT STATS</span>
                <h3 className="reveal reveal-delay-1">The Foundation Of Our Success</h3>
                <div className="statsblock-group">
                    <div className="achievements-stats">
                        <div className="reveal reveal-delay-1">
                            <h6>13</h6>
                            <p>ACTIVE USERS</p>
                        </div>
                        <div className="reveal reveal-delay-2">
                            <h6>200+</h6>
                            <p>ASSETS MANAGED</p>
                        </div>
                        <div className="reveal reveal-delay-3">
                            <h6>6</h6>
                            <p>WORK ORDERS PROCESSED</p>
                        </div>
                        <div className="reveal reveal-delay-4">
                            <h6>47%</h6>
                            <p>IMPROVEMENT IN EFFICIENCY</p>
                        </div>
                    </div>
                    <img src={statsBanner} alt="statsbanner" className="reveal" />
                </div>
            </div>

            <div className="leadershipblock">
                <span className="headerspan reveal">LEADERSHIP</span>
                <h3 className="reveal reveal-delay-1">Meet the visionary leaders who are shaping Hydra's
                    future and driving our mission to deliver innovative clean
                    energy solutions.</h3>
                <div className="founders">
                    <div className="blocks reveal-left">
                        <img src={founderone} alt="" />
                        <div className="description-founder">
                            <p>Sophy</p>
                            <p>Founder & CEO, Maintehub</p>
                        </div>
                    </div>
                    <div className="blocks reveal-right">
                        <img src={foundertwo} alt="" />
                        <div className="description-founder">
                            <p>Edwin</p>
                            <p>Founder & CEO, Maintehub</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="storyblockadditional">
                <span className="headerspan reveal">OUR STORY</span>
                <div className="insidecards-storyblock">
                    <div className="individual-cards reveal reveal-delay-1">
                        <p className="toppart">
                            "We've seen a significant reduction in
                            our energy costs since partnering
                            with Hydra. Their expertise and
                            support have been invaluable in
                            helping us achieve our sustainability
                            goals."
                        </p>
                        <div className="bottompart">
                            <p>David K</p>
                            <p>Facilities Manager</p>
                        </div>
                    </div>
                    <div className="individual-cards reveal reveal-delay-2">
                        <p className="toppart">
                            "We've seen a significant reduction in
                            our energy costs since partnering
                            with Hydra. Their expertise and
                            support have been invaluable in
                            helping us achieve our sustainability
                            goals."
                        </p>
                        <div className="bottompart">
                            <p>David K</p>
                            <p>Facilities Manager</p>
                        </div>
                    </div>
                    <div className="individual-cards reveal reveal-delay-3">
                        <p className="toppart">
                            "We've seen a significant reduction in
                            our energy costs since partnering
                            with Hydra. Their expertise and
                            support have been invaluable in
                            helping us achieve our sustainability
                            goals."
                        </p>
                        <div className="bottompart">
                            <p>David K</p>
                            <p>Facilities Manager</p>
                        </div>
                    </div>
                    <div className="individual-cards reveal reveal-delay-4">
                        <p className="toppart">
                            "We've seen a significant reduction in
                            our energy costs since partnering
                            with Hydra. Their expertise and
                            support have been invaluable in
                            helping us achieve our sustainability
                            goals."
                        </p>
                        <div className="bottompart">
                            <p>David K</p>
                            <p>Facilities Manager</p>
                        </div>
                    </div>
                    <div className="individual-cards reveal reveal-delay-4">
                        <p className="toppart">
                            "We've seen a significant reduction in
                            our energy costs since partnering
                            with Hydra. Their expertise and
                            support have been invaluable in
                            helping us achieve our sustainability
                            goals."
                        </p>
                        <div className="bottompart">
                            <p>David K</p>
                            <p>Facilities Manager</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contactform-block reveal">
                <span className="headerspan" style={{ backgroundColor: "#fff", color: "rgba(0, 0, 0, 1)" }}>CONTACT</span>
                <h1 className="contactform-header">Ready to Simplify Your Maintenance Operations?</h1>
                <p>REQUEST A DEMO</p>
            </div>
        </div>
    )
}

export default About