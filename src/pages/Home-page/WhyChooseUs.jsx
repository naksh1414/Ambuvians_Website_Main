import React from "react";

import "./WhyChooseUs.css"

import why_choose_us_upper_left from "../../assets/Home-images/know_upper.png";
import why_choose_us_upper_right from "../../assets/Home-images/fast-time 1.png";
import why_choose_us_lower_left from "../../assets/Home-images/w6 2.png";
import why_choose_us_lower_right from "../../assets/Home-images/ambulance.png";

import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

function WhyChooseUs() {
  return (
    <>
      {/* <!-- Why choose us section --> */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        className="choose"
      >
        <a  id="why_us">
          Why Choose Us?
        </a>
        <div className="low">
          <div className="partone">
            <div className="one">
              <abbr>
                <img loader="lazy" src={why_choose_us_upper_left} alt="" />
              </abbr>
              <a href="/inactive url">Patient is our first priority</a>
            </div>
          </div>
          <div className="parttwo">
          <div className="two">
              <abbr>
                <img loader="lazy" src={why_choose_us_upper_right} alt="" />
              </abbr>
              <a href="/inactive url">
                Emergency response time <br />
                of 15 minutes or less
              </a>
            </div>
           
          </div>
          <div className="partthree">
          <div className="three">
              <abbr>
                <img loader="lazy" src={why_choose_us_lower_left} alt="" />
              </abbr>
              <a href="/inactive url">24/7 Support</a>
            </div>
            </div>
            <div className="partfour">
            <div className="four">
              <abbr>
                <img loader="lazy" src={why_choose_us_lower_right} alt="" />
              </abbr>
              <a href="/inactive url">
                Customise and Reliable <br />
                Ambulance Service
              </a>
            </div></div>
        </div>
      </motion.div>
      {/* <!-- Why choose us section ends here   --> */}
    </>
  );
}

export default WhyChooseUs;
