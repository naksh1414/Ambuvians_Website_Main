import React from "react";

import "./Note.css";

import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

import back from "../../assets/Home-images/background.png";
import user from "../../assets/Home-images/WhatsApp Image 2023-09-22 at 16.00.55.jpg";
import whatsapp from "../../assets/Home-images/whatsapp.jpg";
import instagram from "../../assets/Home-images/instagram.png";
import linkedin from "../../assets/Home-images/linkedin.png";
import twitter from "../../assets/Home-images/twitter.png";

function Note() {
  return (
    <>
      {/* <!-- director's note --> */}
      <Parallax strength={400}>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="note"
        >
          <div className="leftnote">
            <div className="note-card">
              <div
                className="front"
                style={{
                  backgroundImage: "url(/1684910183245.jpeg)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img
                  className="director"
                  src={user}
                  alt="Dr. Rahat Ullah Khan"
                />
              </div>
              <div className="back">
                <img
                  loader="lazy"
                  src={back}
                  alt=""
                  className="director-back"
                />

                <abbr title="instagram" className="first-icon">
                  <a
                    href="https://www.instagram.com/official.ambuvians/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="sir-social"
                      loading="lazy"
                      src={instagram}
                      alt="Insta"
                    />
                  </a>
                </abbr>

                {/* WhatsApp */}
                <abbr title="whatsapp" className="second-icon">
                  <a
                    href="https://wa.me/+7505853812"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="sir-social"
                      loading="lazy"
                      src={whatsapp}
                      alt="wapp"
                    />
                  </a>
                </abbr>

                {/* Twitter */}
                <abbr title="twitter" className="third-icon">
                  <a href="/">
                    <img
                      className="sir-social"
                      loading="lazy"
                      src={twitter}
                      alt="ssss"
                    />
                  </a>
                </abbr>

                {/* LinkedIn */}
                <abbr title="linkedin" className="fourth-icon">
                  <a
                    href="https://www.linkedin.com/company/ambuvians-healthcare-pvt-ltd/?viewAsMember=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="sir-social"
                      loading="lazy"
                      src={linkedin}
                      alt="ssss"
                    />
                  </a>
                </abbr>
              </div>
            </div>
          </div>
          <div className="rightnote">
            <a id="dir">Director's Note</a>
            <a id="yash">Dr. Rahat Ullah Khan</a>
            {/* <a  id="ed">Founder & Executive Director</a> */}
            <a id="aim">
              Imagine the sky as your limit, yet even that is a self-imposed
              boundary. Ambuvians Healthcare Defies limit Daily, pushing medical
              Frontier. Let your potential soar; Ambuvians proves that even the
              clouds are meant to be surpassed.
            </a>
            <a id="good">
              "The Only Limits That Exist are the ones you Place on yourself,
              Break Free , Aim high and Defy your own Expectations"
            </a>
            <a id="mr">-Dr. Rahat Ullah Khan</a>
          </div>
          {/* <!-- director's note ends here --> */}
        </motion.div>
      </Parallax>
    </>
  );
}

export default Note;
