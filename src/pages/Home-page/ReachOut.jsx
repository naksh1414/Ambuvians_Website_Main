import React from "react";

import whatsapp from "../../assets/Home-images/whatsapp.jpg";
import call from "../../assets/Home-images/call.png";

import "./ReachOut.css"

function ReachOut() {
  return (
    <>
      {/* <!-- reach-out section fixed in the bottom left corner --> */}
      <div className="whatsapp">
        <a href="https://wa.me/+7505853812" target="_blank">
          <img loader="lazy" src={whatsapp} alt="whatsapp" />
        </a>
        <a href="tel:+917505853812">
          <img loader="lazy" src={call} alt="call" id="call" />
        </a>
        
      </div>
      {/* <!-- reach-out section ends here --> */}
    </>
  );
}

export default ReachOut;
