import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");

  const handleClick = () => {
    alert("Coming Soon...");
  };

  const hideForm = () => {
    document.querySelector(".form-close-btn").addEventListener("click", () => {
      document.querySelector(".form").style.display = "none";
    });
  };

  const handleContactUsClick = () => {
    setShowForm(true);
    document.querySelector(".form").style.display = "block";
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the email input element
    const emailInput = document.querySelector("#email");

    // Check if the email field is empty
    if (email.trim() === "") {
      // Display a warning message
      emailInput.setCustomValidity("Email field is required.");
      emailInput.reportValidity();
      return; // Exit the function without further processing
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      // Display a warning message for email format
      emailInput.setCustomValidity("Please enter a valid email address.");
      emailInput.reportValidity();
      return; // Exit the function without further processing
    }

    // Your submission logic here
    // You may clear input values, display a thank you message, etc.
    document
      .querySelectorAll(".form-input")
      .forEach((input) => (input.value = ""));
    document.querySelector(".form").innerHTML = `
    <div class="form-item" data-animation="fadeOff">
          <div>
            <figure class="form-logo"><img className="form-logo" loading="lazy" src="images/Footer-images/ambu logo.webp" alt="ambu logo" /></figure>
          </div>
          <div>
            <h1>Thank You</h1>
          </div>
          <div>
            <p class="form-para-1">Our team will get back to you shortly!</p>
          </div>
          <p class="form-para-2">Stay Tuned</p>
        </div>
  `;

    // Add any additional logic you need here

    document.querySelector(".form").classList.add("fade1");
    document.querySelector(".form").classList.add("fadeOff");
    // document.querySelector("contact-us-form").style.display = "None"

    setInterval(() => {
      setShowForm(false); // Hide the form after 4 seconds
    }, 3000);
  };

  return (
    <>
      <section id="footer">
        <h1 className="showing-heading">
          India's First Unified Healthcare Services
        </h1>
        <div className="get">
          <h1 className="hidden-heading">
            India's First Unified Healthcare Services
          </h1>
          <h2 className="get-app">Get the app</h2>
          <div className="pic">
            <a href="" onClick={handleClick}>
              <img
                src="images/Footer-images/download 2.png"
                className="app-store"
                alt="app-store"
              />
            </a>
            <a href="" onClick={handleClick}>
              <img
                src="images/Footer-images/play-store.webp"
                className="play-store"
                alt="play-store"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={handleContactUsClick}
            class="subscribe-button"
          >
            Subscribe Us
          </button>
        </div>
        <div className="Knowus">
          <h2>Know Us</h2>
          <ul>
            <li class="nav-item">
              <span>
                <a href="/">Home</a>
              </span>
            </li>
            <li>
              <span>
                <a href="/about">Enquiry</a>
              </span>
            </li>
            <li>
              <span>
                <a href="https://heyzine.com/flip-book/c538e2deab.html#page/1">Handbook</a>
              </span>
            </li>
            <li>
              <span>
                <a href="/hiring">Join Us</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="Services">
          <h2>Services</h2>
          <ul>
            <li>
              <span>
                <a href="/services">ALS Ambulance</a>
              </span>
            </li>
            <li>
              <span>
                <a href="/services">BLS Ambulance</a>
              </span>
            </li>
            <li>
              <span>
                <a href="/services">PTS Ambulance</a>
              </span>
            </li>
            <li>
              <span>
                <a href="/services">Mortality Ambulance</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h2 className="about-h2">Contact Us</h2>
          <ul>
            <li>
              <img
                className="contact-icon"
                src="images/Footer-images/google-maps.webp"
                alt="google map icon"
              />
              <span>
                <p>
                  <a
                    href="geo:28.752470765577947, 77.49913956776183"
                    target="_blank"
                    className="add"
                  >
                    4th Floor TBI KIET Group Of Institutions
                    <br />
                    Ghaziabad Delhi NCR <br />
                    201206
                  </a>
                </p>
              </span>
            </li>
            <li>
              <img
                className="contact-icon"
                src="images/Footer-images/Gmail.png"
                alt="gmail icon"
              />
              <span>
                <p>
                  <a href="mailto:official.ambuvians@gmail.com">
                    info@ambuvians.in <br />
                  </a>
                  <a href="mailto:official.ambuvians@gmail.com">
                    contact@ambuvians.in
                  </a>
                </p>
              </span>
            </li>
            <li>
              <img
                className="contact-icon"
                src="images/Footer-images/Ringer Volume.png"
                alt="ringtone icon"
              />
              <span>
                <p>
                  <a href="tel:+7505853812">
                    7505853812 <br />
                  </a>
                  <a href="tel:+8630729931">8630729931</a>
                </p>
              </span>
            </li>
          </ul>
          <div className="icons">
            <abbr title="instagram" className="first-icon">
              <a
                href="https://www.instagram.com/official.ambuvians/"
                target="_blank"
              >
                <img
                  src="images/Footer-images/instagram.webp"
                  alt="instagram icon"
                />
              </a>
            </abbr>
            <abbr title="whatsapp" className="second-icon">
              <a href="https://wa.me/+7505853812" target="_blank">
                <img
                  src="images/Footer-images/whatsapp.png"
                  alt="whatsapp icon"
                />
              </a>
            </abbr>
            <abbr title="twitter" className="third-icon">
              <a href="https://www.threads.net/@official.ambuvians">
                <img
                  src="images/Footer-images/twitter.png"
                  alt="twitter icon"
                />
              </a>
            </abbr>
            <abbr title="linkedin" className="fourth-icon">
              <a href="https://www.linkedin.com/company/ambuvians-healthcare-pvt-ltd/?viewAsMember=true">
                <img
                  src="images/Footer-images/linkedin.webp"
                  alt="linkedin icon"
                />
              </a>
            </abbr>
          </div>
        </div>
        <div
          className="form"
          style={{ display: showForm ? "block" : "none" }}
          data-animation="fade"
        >
          <div className="form-close-btn">
            <i
              className="fa-solid fa-xmark form-close-btn "
              onClick={() => hideForm()}
            ></i>
          </div>
          <h1>Subscribe Us</h1>
          <div className="form-item">
            <h3 className="form-title">Join us to get daily updates</h3>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-input"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
              title="Please enter a valid email address"
              className="form-input"
            />
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </section>
      <div className="copyright">
        <p> &#169;AMBUvians Pvt.Ltd.</p>
      </div>
    </>
  );
}

export default Footer;
