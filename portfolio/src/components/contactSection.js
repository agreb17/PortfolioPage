import React from "react";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

export default function ContactSection({ title, subtitle, dark, id }) {
  const formSubmit = (e)=> {
    console.log('hi')
  }
  
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <div className="contact">
         <h1>Contact Me</h1>
         <h3>If you would like to send me an email please use the form below. </h3>
         <form action="https://formspree.io/agreb255@gmail.com" method="POST" >
         <div className="nameEmail">
         <input type="text" name="name" placeholder="Name"></input>
         <input type="text" name="email" placeholder="Email"></input>
         </div>
         <div className="subjectMessage">
         <input type="text" name="Subject" placeholder="Subject"></input>
         <textarea type="textarea" name="Message" placeholder="Message" className="textArea"></textarea>
         </div>
        <div className="formButtons">
        <input type="submit" value="Send Message"></input>
        <input type="reset" value="Reset Form"></input>
        </div>
         </form>
         <div className="contactIcons">
         <a href="https://github.com/agreb17" target="_blank">
         <FaGithub size={40} className="faContact"/>
         </a>
         <a href="https://www.linkedin.com/in/anthony-greb-a74a05180/" target="_blank">
         <FaLinkedin size={40} className="faContact"/>
         </a>
         <a href="mailto:agreb255@gmail.com">
         <FaEnvelope size={40} className="faContact"/>
         </a>
         </div>
         </div>
      </div>
    </div>
  );
}