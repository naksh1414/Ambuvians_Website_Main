import React from "react";

import "./KnowUs.css"

import know_more_top_left from "../../assets/Home-images/thubnail.png";
import know_more_top_right from "../../assets/Home-images/icon 3 1.png";
import know_more_bottom_left from "../../assets/Home-images/icon 2 2.png";
import know_more_bottom_right from "../../assets/Home-images/rescue-3735206_1920.jpg";

function KnowUs() {
  return (
    <>
      {/* <!-- know more section --> */}
      <div className="knowmore">
        <div className="know">
          <img loader="lazy" id="one" src={know_more_top_left} alt="" />
          <img loader="lazy" id="two" src={know_more_top_right} alt="" />
          <img loader="lazy" id="three" src={know_more_bottom_left} alt="" />
          <img
            style={{
              borderRadius: "1vw",
            }}
            id="four"
            src={know_more_bottom_right}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default KnowUs;
