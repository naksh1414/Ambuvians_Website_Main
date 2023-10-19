import React from "react";

import "./OurVision.css"

import our_vision_section1 from "../../assets/Home-images/OUR_VISION_SECTION_1.png";
import our_vision_section2 from "../../assets/Home-images/OUR_VISION_SECTION_2.png";
import our_vision_section3 from "../../assets/Home-images/OUR_VISION_SECTION_3.png";

import { Parallax } from "react-parallax";

import pic from "../../assets/Home-images/our_vision.png";

function OurVision() {
  return (
    <>
      {/* <!-- Our vision section --> */}
      <Parallax strength={400} bgImage={pic}>
        <div
          className="vision"
          style={{
            backgroundImage:
              'url("../../src/assets/Home-images/our_vision.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <a  id="our-vision">
            OUR VISION
          </a>
          <div className="vision_img">
            <div className="section">
              <div className="sectioncard">
                <div className="sectionfront">
                  <img loader="lazy" src={our_vision_section1} alt="" />
                  <a  id="section-upper-text">
                    INDIA's best
                  </a>
                  <a  id="section-lower-text">
                    Medical SERVICE
                  </a>
                </div>
                <div className="sectionback">
                  We provide comprehensive medical services with care and
                  dedication. Trust us for your well-being and a better life.
                </div>
              </div>
            </div>
            <div className="section">
              <div className="sectioncard">
                <div className="sectionfront">
                  <img loader="lazy" src={our_vision_section2} alt="" />
                  <a  id="section-upper-text">
                    Saving Life
                  </a>
                  <a  id="section-lower-text">
                    with Perfection
                  </a>
                </div>
                <div className="sectionback">
                  We recognize the immense value of every life and the need for
                  precise healthcare. Our expert tech team delivers excellence
                  through technology at Ambuvians.
                </div>
              </div>
            </div>
            <div className="section">
              <div className="sectioncard">
                <div className="sectionfront">
                  <img loader="lazy" src={our_vision_section3} alt="" />
                  <a  id="section-upper-text">
                    Economical and
                  </a>
                  <a  id="section-lower-text">
                    Fastest
                  </a>
                </div>
                <div className="sectionback">
                  We seamlessly blend cost-efficiency and speed with our
                  tech-driven Fast-Track solutions, saving lives.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      {/* <!-- our vision section ends here --> */}
    </>
  );
}

export default OurVision;
