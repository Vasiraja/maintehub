import React from 'react'
import "./Featuredarticles.css"
import featureAritcleOne from "../../assets/images/featuresarticles/featurearticle1.jpg"
import featureArticleTwo from "../../assets/images/featuresarticles/featurearticle2.jpg"

const Featuredarticles = () => {
    return (
        <div className="featuredarticles">
            <h1>Featured Articles</h1>
            <div className="insidefeaturedarticles">
                <div className="imgcontainer-articles">
                    <img src={featureArticleTwo} alt="articleTwo" />
                    <span>Sep 29, 2026</span>
                    <p>Why Businesses in Uganda Need a Digital Maintenance System?</p>
                </div>
                <div className="imgcontainer-articles">
                    <img src={featureAritcleOne} alt="articleone" />
                    <span>Sep 18, 2026</span>
                    <p>5 Common Maintenance Mistakes That Cost Businesses Money.</p>
                </div>
            </div>
        </div>
    )
}

export default Featuredarticles