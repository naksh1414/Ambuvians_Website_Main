import React, { useState } from "react";
import "./FeedbackForm.css";
import back from "../../assets/Home-images/feedback/animation_ln8xb45q.json";
import Lottie from "lottie-react";
import axios from 'axios';
import { LiaStarSolid } from "react-icons/lia";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [ email , setEmail ] = useState('');
  const [ list , setList ] = useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {
      Username : name, 
      Email : email, 
      Feedback : feedback, 
      Rating : rating,
    };
    if (name&&email&&feedback){
      axios.post("https://sheet.best/api/sheets/2a401389-9af1-4021-be3b-a723ae60f906",data).then((res) => {
        // console.log(res);
      })
      setList((ls)=>[...ls,data])
      setName("Enter Your Name");
      setEmail("Enter Your Email");
      setFeedBack("Enter Your Feedback");
      setNewRating(rating);
    }
  }
  const [newRating , setNewRating ]= useState("rating");
  const [ feedback , setFeedBack ] = useState('Enter your Feedback');

  // Function to handle changes in the name input field
  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);

    // Name validation logic
    const namePattern = /^[A-Za-z]+$/; // Allow only letters
    if (!newName) {
      setNameError("Name is required");
    } else if (!namePattern.test(newName)) {
      setNameError("Name should contain only letters");
    } else {
      setNameError("");
    }
  };

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="feedback-comp">
      <div className="feedback-header">
        <h1>FeedBack Form</h1>
      </div>

      <form onSubmit={ handleSubmit} className="main-feedback-section">
        <div className="feedback-form-left">
          <div className="para">
            <p>
              We would love to hear your thoughts, Suggestions, Concerns, or
              Problems so we can improve!
            </p>
          </div>
          <div className="type">
            <h2>Type of Feedback</h2>
            <div className="type-checks">
              <div className="first-check">
                <input
                  type="radio"
                  id="type-checks"
                  name="fav_language"
                  value="HTML"
                  onClick={ () => { setFeedBack('Enter Your Comments')}}
                />
                <label htmlFor="html">Comments</label>
              </div>
              <div className="second-check">
                <input
                  type="radio"
                  id="type-checks"
                  name="fav_language"
                  value="CSS"
                  onClick={ () => { setFeedBack('Enter Your Suggestions')}}
                />
                <label htmlFor="css">Suggestions</label>
              </div>
              <div className="third-check">
                <input
                  type="radio"
                  id="type-checks"
                  name="fav_language"
                  value="JavaScript"
                  onClick={ () => { setFeedBack('Enter Your Questions')}}
                />
                <label htmlFor="javascript">Questions</label>
              </div>
            </div>
          </div>
          <div className="user-feedback">
            <textarea
              id="user-feedback"
              name="user-feedback"
              rows="8"
              cols="50"
              placeholder="Enter Your Feedback"
              value={feedback}
              onChange={ (e) => setFeedBack(e.target.value) }
            ></textarea>
          </div>
          <div className="name-sec">
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              required
              value={name}
              onChange={handleNameChange}
              placeholder="Enter Your Name"
            />
            {nameError && <span className="error-message">{nameError}</span>}
          </div>
          <div className="email-sec">
            <label htmlFor="Email ID">Email ID</label> <br />
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value) } required placeholder="Enter Your Email" />
          </div>
          <div className="rate-us">
            <h4>Rate Us</h4>
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    id="rating-star"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <LiaStarSolid
                    className="star"
                    size={30}
                    color={
                      currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <div className="feedback-submit-btn">
            <input type="submit" value="Submit" />
          </div>
        </div>

        <div className="feedback-img">
          <Lottie animationData={back} loop={true} className="svg-animation" />
        </div>
      </form>
    </div>
  );
}
