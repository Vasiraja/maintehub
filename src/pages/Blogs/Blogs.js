import React, { useRef, useState } from 'react'
import "./Blogs.css";

import blogBanner from "../../assets/images/blogbanner.jpg";
import firstBlogImg from "../../assets/images/BlogsImgs/blog1.png"
import secondBlogImg from "../../assets/images/BlogsImgs/blog2.png"
import thirdBlogImg from "../../assets/images/BlogsImgs/blog3.png"
import forthBlogImg from "../../assets/images/BlogsImgs/blog4.png"
import fifthBlogImg from "../../assets/images/BlogsImgs/blog5.png"
import sixthBlogImg from "../../assets/images/BlogsImgs/blog6.png"
import Featuredarticles from '../../components/Featuredarticles/Featuredarticles';
import Footer from '../../components/Footer/Footer';

const blogsDetails = [
    { img: firstBlogImg, description: "Reducing Carbon Footprint: Our Commitment to Sustainability", date: "05.06.2025" },
    { img: secondBlogImg, description: "Our Latest Partnerships: Driving Innovation in Renewable Energy", date: "05.06.2025" },
    { img: thirdBlogImg, description: "Revolutionizing Data Centers: Our Latest Innovations", date: "05.06.2025" },
    { img: forthBlogImg, description: "Sustainable Energy Solutions for a Greener Tomorrow", date: "05.06.2025" },
    { img: fifthBlogImg, description: "Powering the Future: Optimizing Data Centers for Efficiency Copy", date: "05.06.2025" },
    { img: sixthBlogImg, description: "The Future of Cloud Infrastructure: Trends to Watch", date: "05.06.2025" },
]

const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const blogDetailsRef = useRef(null);

    const blogSelect = (items) => {
        setSelectedBlog(items);
        setTimeout(() => {
            const top = blogDetailsRef.current?.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top, behavior: 'smooth' });
        }, 50);
    }

    return (
        <div className='blogs'>
            <div className="blogbannersection">
                <img src={blogBanner} className='blogbannerimg' alt="blogbanner" />
                <div className="relativediv">
                    <h2>NEWS <span>& BLOGS</span></h2>
                    <p>Stay Updated with the recent news</p>
                </div>
            </div>

            {!selectedBlog ? (
                <div className="recentnews">
                    <h1>Recent News</h1>
                    <div className="wholerecentnews">
                        {blogsDetails.map((items, index) => (
                            <div key={index} className="individual-recentnews" onClick={() => blogSelect(items)}>
                                <img src={items.img} alt="default" />
                                <div className="imgdescription">
                                    <p>{items.description}</p>
                                    <p>{items.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="BlogDetails" ref={blogDetailsRef    }>
                    <button className="backButton" onClick={() => setSelectedBlog(null)}>← Back</button>

                    <div className="blogDetailsimgbanner">
                        <img src={selectedBlog.img} alt="blog detail" />
                    </div>
                    <div className="blogDetailinfos">
                        <h1 className='blogdetailheader'>Revolutionizing Data
                            Centers: Our Latest
                            Innovations</h1>
                        <p>{selectedBlog.date}</p>
                        <span className="headerspan">GET IN TOUCH</span>
                        <div className="firstdescription">
                            <h3>Data Center Solutions</h3>
                            <p>
                                We design, build, and optimize data centers for peak performance, efficiency, and reliability. Our expertise
                                ensures seamless operations, scalability, and security for your critical infrastructure. From initial planning to
                                ongoing management, we provide comprehensive solutions that meet the unique needs of your
                                organization, ensuring uptime, reducing costs, and improving overall IT performance</p>
                        </div>
                        <div className="firstdescription">
                            <h3>Infrastructure Services</h3>
                            <p>
                                Our cloud infrastructure services enable businesses to harness the power of the cloud, providing expert
                                guidance on migration, management, and optimization. We help you leverage cloud technology to drive
                                innovation, agility, and growth, while ensuring security, compliance, and cost-effectiveness. Whether you're
                                looking to migrate to the cloud, optimize existing resources, or develop a cloud-first strategy, our team is
                                here to support your journey.</p>
                        </div>
                        <div className="firstdescription">
                            <h3>Energy Management Solutions</h3>
                            <p>
                                We deliver comprehensive energy management solutions, including energy efficiency assessments,
                                strategy development, and implementation. Our expertise helps organizations reduce energy consumption,
                                lower costs, and minimize environmental impact. From energy audits to renewable energy integration, we
                                provide tailored solutions that meet your unique energy needs and goals, ensuring maximum ROI and
                                sustainability benefits</p>
                        </div>
                        <div className="firstdescription">
                            <h3>Renewable Energy Solutions</h3>
                            <p>
                                Our renewable energy solutions harness the power of solar, wind, and other sustainable sources to drive
                                energy independence and reduce carbon footprint. We provide expert design, installation, and maintenance
                                services to ensure optimal performance and maximum ROI. Whether you're looking to reduce energy costs,
                                meet sustainability goals, or enhance your brand reputation, our team is here to help you navigate the
                                transition to renewable energy.</p>
                        </div>
                    </div>
                </div>
            )}

            <Featuredarticles />
            <Footer />
        </div>
    )
}

export default Blogs