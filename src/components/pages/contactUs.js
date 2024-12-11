import './style.css'
import Footer from '../footer/footer'
import React, { useState } from 'react';
import Axios from "axios";

const ContactUs = () => {
    const [Email,setEmail] = useState("");
    const [Feedback, setFeedback] = useState("");

    const sendFeedback =()=>{
    Axios.post("http://localhost:8005/AddEmail", {
        email:Email,
        feedback:Feedback,
      }).then((res) => {console.log(res.data);})
      .catch((err) => {console.log(err);});
      alert('😍 Thank You for countact Us 😍')
     }

    return (
        <>
        <div class='d-flex justify-content-center'>
        <div class="contact-container">
        <form class="form">
            <h1>Write for us &nbsp;<i class="bi bi-pencil-square"></i></h1>
            <div class="form-group">
            <label for="email">Enter Your Email&nbsp;<i class="bi bi-envelope-at"></i></label>
            <input required="" name="email" id="email" type="text"
                onChange={(e) => {
                setEmail(e.target.value);
              }}/>
            </div>
            <div class="form-group">
            <label for="textarea">How Can We Help You?</label>
            <textarea required="" cols="50" rows="10" id="textarea" name="textarea"
                onChange={(e) => {
                setFeedback(e.target.value);
              }}></textarea>
            </div>
            <button type="submit" class="form-submit-btn" onClick={sendFeedback}>Submit
            &nbsp;<i class="bi bi-send-plus"></i></button>
        </form>
        </div>
        </div>
        <Footer/>
        </>
    )
    }

    export default ContactUs