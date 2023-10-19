import React, { useEffect } from 'react';
import "./HowItWorks.css"
import { motion } from 'framer-motion';
import { fadeIn } from '../../variant';

const HowItWorks = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const animation = entry.target.getAttribute("data-animation");

                if (entry.isIntersecting) {
                    entry.target.classList.add("animated", `${animation}`);
                } else {
                    entry.target.classList.remove("animated", `${animation}`);
                }
            });
        });

        const animatedEls = document.querySelectorAll("[data-animation]");
        animatedEls.forEach((el) => observer.observe(el));
    }, []);

  return (
    <section className="how-it-works box hidden" style={{ position: 'relative' }}>
      {/* heading */}
      <motion.h1 style={{
        marginTop:'10vh'
      }} variants={fadeIn('down',0.3)} 
          initial="hidden"
          whileInView={'show'}>
        <abbr title="How it Works">How it Works</abbr>
      </motion.h1>
      <section className="how-it-works-section">
        {/* images and their texts */}
        <div className=" animation-group-1">
          <figure className="how-it-works-figure" data-animation="fadeInLeft">
            <img loading="lazy" src="./images/Service-images/HOW_IT_WORKS_1.webp" alt="Medical Emergency" className="how-it-works-img animates" />
            <figcaption className="how-it-works-figcaption">A person having a serious problem</figcaption>
          </figure>

          <figure className="arrow" data-animation="fadeInLeft">
            <img loading="lazy" src="./images/Service-images/Arrow 3.svg" alt="left arrow" className="how-it-works-arrow animates" />
          </figure>

          <figure className="how-it-works-figure" data-animation="fadeInLeft">
            <img loading="lazy" src="./images/Service-images/HOW_IT_WORKS_5.webp" alt="Urgent Help" className="how-it-works-img animates" />
            <figcaption className="how-it-works-figcaption">Need for urgent Help</figcaption>
          </figure>

          <figure className="arrow" data-animation="fadeInLeft">
            <img loading="lazy" src="./images/Service-images/Arrow 3.svg" alt="left arrow" className="how-it-works-arrow animates" />
          </figure>

          <figure className="how-it-works-figure" data-animation="fadeInLeft">
            <img loading="lazy" src="./images/Service-images/HOW_IT_WORKS_2.webp" alt="Contact us" className="how-it-works-img animates" />
            <figcaption className="how-it-works-figcaption">Contact us For Urgent Help</figcaption>
          </figure>
        </div>

        <figure className="arrow" data-animation="fade">
          <img loading="lazy" src="./images/Service-images/Arrow 5.svg" alt="down arrow" className="down-arrow animates" />
        </figure>

        <div className=" animation-group-12">
          <figure className="how-it-works-figure" data-animation="fadeInRight">
            <img loading="lazy" src="./images/Service-images/HOW_IT_WORKS_6.webp" alt="Happiness" className="how-it-works-img animates" />
            <figcaption className="how-it-works-figcaption">Problem converts into Happiness</figcaption>
          </figure>

          <figure className="arrow" data-animation="fadeInRight">
            <img loading="lazy" src="./images/Service-images/Arrow 7.svg" alt="right arrow" className="how-it-works-arrow animates" />
          </figure>

          <figure className="how-it-works-figure" data-animation="fadeInRight">
            <img loading="lazy" src="./images/Service-images/HOW_IT_WORKS_4.webp" alt="Prompt action" className="how-it-works-img animates" />
            <figcaption className="how-it-works-figcaption">Prompt action based on the situation</figcaption>
          </figure>

          <figure className="arrow" data-animation="fadeInRight">
            <img loading="lazy" src="./images/Service-images/Arrow 7.svg" alt="right arrow" className="how-it-works-arrow animates" />
          </figure>

          <figure className="how-it-works-figure" data-animation="fadeInRight">
            <img loading="lazy" src="./images/Service-images/HOW_IT_WORKS_3.webp" alt="Ambulance" className="how-it-works-img animates" />
            <figcaption className="how-it-works-figcaption">Help is on the way</figcaption>
          </figure>
        </div>
      </section>
    </section>
  );
}

export default HowItWorks;
