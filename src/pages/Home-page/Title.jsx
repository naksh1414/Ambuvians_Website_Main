import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

import "./Title.css";

function Title() {
  // const images = ["./images/Home-images/bgi11.png", "./images/Home-images/bgi21.png", "./images/Home-images/bgi31.png"];
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const quotes = [
    { author: "Better Healthcare, Better Tomorrow." },
    { author: "Your Loved Ones Deserve Only The Best." },
    { author: "You cannot enjoy your wealth, if you cannot enjoy your health." },
    { author: "Happiness begins with good health." },
    { author: "Try these also okay according to the need." },
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.querySelector(".quote-text").textContent = `${quote.author}`;
  };

  useEffect(() => {
    generateQuote();
  const interval = setInterval(generateQuote, 5000); // Adjust the interval time as needed (e.g., 2000 ms for 2 seconds)
  return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) =>
  //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000); // Change image every 5 seconds

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <>
      {/* <!-- first section --> */}
      <div className="First-section">
        {/* div for the right image and background  */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="right"
        >
          <img
            loader="lazy"
            className="am"
            src= "./images/Home-images/bgi.png"/*images[currentImageIndex]*/
            alt="ambulance"
          />
        </motion.div>
        {/* div for left text and facts button  */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="left"
        >
          {/* <a className="slogon slogon1">
            Har Ek Jeewan Hai Qeemti
          </a> */}
          <a id="ambuvians">AMBUvians
          </a>
          <a className="slogan quote-text">
            India's First One-Stop Solution of all medical problems
          </a>
          {/* <button id="facts">FACTS</button> */}
        </motion.div>
      </div>
      {/* <!-- first section ends here --> */}
    </>
  );
}

export default Title;
