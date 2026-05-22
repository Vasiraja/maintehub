import React from 'react'
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
    {
        img: secondBlogImg, description: "Our Latest Partnerships: Driving Innovation in Renewable Energy", date: "05.06.2025"
    },
    { img: thirdBlogImg, description: "Revolutionizing Data Centers: Our Latest Innovations", date: "05.06.2025" },
    { img: forthBlogImg, description: "Sustainable Energy Solutions for a Greener Tomorrow", date: "05.06.2025" },
    {
        img: fifthBlogImg, description: "Powering the Future: Optimizing Data Centers for Efficiency Copy", date: "05.06.2025"
    },
    { img: sixthBlogImg, description: "The Future of Cloud Infrastructure: Trends to Watch", date: "05.06.2025" },
]

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className="blogbannersection">
                <img src={blogBanner} className='blogbannerimg' alt="blogbanner" />
            <div className="relativediv">
                <h2>NEWS  <span>& BLOGS</span> </h2>
                <p>Stay Updated with the recent news</p>
            </div>
            </div>
            
            <div className="recentnews">
                <h1>Recent News</h1>
                <div className="wholerecentnews">
                   {blogsDetails.map((items, index) => (
                    <div className="individual-recentnews">
                           <img src={items.img} alt="default" />
                           <div className="imgdescription">
                               <p>{items.description}</p>
                               <p>{items.date}</p>
                               
                           </div>



                    </div>

                ))}  
                </div>
               


            </div>
            <Featuredarticles />
            <Footer/>




        </div>
    )
}

export default Blogs
