import React from "react";

import "./ComingSoon.css"

import coming_soon_app from "../../assets/Home-images/mobile_view.png";
import { TypeAnimation } from "react-type-animation";

function ComingSoon() {
  return (
    <>
      {/* <!-- coming soon --> */}
      <div className="coming">
        <div className="left_img">
          <img loader="lazy" src={coming_soon_app} alt="" />
        </div>
        <TypeAnimation
          sequence={["COMING SOON ", 1500, "CHECK OUT ", 1500]}
          speed={5}
          className="right_txt"
          repeat={Infinity}
        ></TypeAnimation>
      </div>
      {/* <!-- coming soon section ends here --> */}
    </>
  );
}

export default ComingSoon;
