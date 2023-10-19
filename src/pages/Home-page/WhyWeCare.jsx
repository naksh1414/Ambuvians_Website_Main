import React, { useState, useEffect } from "react";
import "./WhyWeCare.css";

function WhyWeCare() {
  const [imageIndex, setImageIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex % 7) + 1);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const imageSrc1 = `./images/Home-images/innerConditionImage/${imageIndex}.webp`;
  const imageSrc2 = `./images/Home-images/outerConditionImage/${imageIndex}.webp`;
  const imageSrc3 = `./images/Home-images/hospitalConditionImage/${imageIndex}.webp`;

  return (
    <>
      <div className="come" style={{ opacity: "1", transform: "none" }}>
        <a href="/inactive url">Why We Come</a>
      </div>

      <div className={`news1`}>
        <img
          loader="lazy"
          src={imageSrc1}
          alt=""
          className={`${isFading ? "fade" : ""}`}
        />
        <img loader="lazy" src="./images/Home-images/2.jpeg" alt="" />
        <img
          loader="lazy"
          src={imageSrc2}
          alt=""
          className={`${isFading ? "fade" : ""}`}
        />
      </div>

      {/* Video */}
      {/* <div className="news2">
        <video controls loop preload="auto">
          <source src="whywecare.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <div className="news2">
        <img
          loader="lazy"
          src={imageSrc3}
          alt=""
          className={`${isFading ? "fade" : ""}`}
        />
      </div>
    </>
  );
}

export default WhyWeCare;
