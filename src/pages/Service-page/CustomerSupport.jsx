import React, { useEffect } from "react";
import "./CustomerSupport.css";
import { fadeIn } from "../../variant";
import { motion } from "framer-motion";

const CustomerSupport = () => {
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
  const sectionStyle = {
    backgroundImage: `url('./images/Service-images/bgi.svg')`,
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat", // Adjust as needed
    height: "60vw",
    // Add any other background-related styles here
  };

  return (
    <>
      <div
        style={{
          marginBottom: "2px",
        }}
      >
        <section style={sectionStyle} className="customer-support box hidden">
          {/* heading */}
          <motion.h1
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="underline"
          >
            <abbr title="Unique Customer Support">Unique Customer Support</abbr>
          </motion.h1>
          <div className="customer-support-div animation-group-2">
            {/* Faster Than Ever */}
            <figure
              className="customer-support-figure"
              style={{ position: "absolute", left: "5%" }}
              data-animation="fadeInUp"
            >
              <img
                loading="lazy"
                src="./images/Service-images/CUSTOMER SUPPORT FASTER THAN EVER  .webp"
                alt="FASTER THAN EVER"
                className="customer-support-img animates"
              />
              <figcaption className="customer-support-figcaption">
                FASTER THAN EVER
              </figcaption>
            </figure>

            {/* Lingual Diversity */}
            <figure
              className="customer-support-figure"
              style={{ position: "absolute", left: "80%" }}
              data-animation="fadeInUp"
            >
              <img
                loading="lazy"
                src="./images/Service-images/CUSTOMER SUPPORT LANGUAGE .webp"
                alt="LINGUAL DIVERSITY"
                className="customer-support-img animates"
              />
              <figcaption className="customer-support-figcaption">
                LINGUAL DIVERSITY
              </figcaption>
            </figure>

            {/* Toll Free Number */}
            <figure
              className="customer-support-figure"
              style={{ position: "absolute", left: "42.5%", top: "18%" }}
              data-animation="fadeInUp"
            >
              <img
                loading="lazy"
                src="./images/Service-images/CUSTOMER SUPPORT TOLL FREE.webp"
                alt="TOLL FREE NUMBER"
                className="customer-support-img animates"
              />
              <figcaption className="customer-support-figcaption">
                TOLL FREE NUMBER
              </figcaption>
            </figure>

            {/* Choose the Right One */}
            <figure
              className="customer-support-figure"
              style={{ position: "absolute", left: "5%", top: "35%" }}
              data-animation="fadeInUp"
            >
              <img
                loading="lazy"
                src="./images/Service-images/CUSTOMER SUPPORT CHOOSE THE RIGHT ONE .webp"
                alt="CHOOSE THE RIGHT ONE"
                className="customer-support-img animates"
              />
              <figcaption className="customer-support-figcaption">
                CHOOSE THE RIGHT ONE
              </figcaption>
            </figure>

            {/* Cheapest Price */}
            <figure
              className="customer-support-figure"
              style={{ position: "absolute", left: "80%", top: "35.3%" }}
              data-animation="fadeInUp"
            >
              <img
                loading="lazy"
                src="./images/Service-images/CUSTOMER SUPPORT CHEAPER PRICE .webp"
                alt="Cheaper Price"
                className="customer-support-img animates"
              />
              <figcaption
                className="customer-support-figcaption"
                align="bottom"
              >
                CHEAPEST PRICE
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomerSupport;
