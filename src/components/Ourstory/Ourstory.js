import React, { useEffect } from 'react'
import "./Ourstory.css";
const Ourstory = () => {
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
  )
}

export default Ourstory
