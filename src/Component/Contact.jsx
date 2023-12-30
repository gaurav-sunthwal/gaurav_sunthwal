import "../Styles/Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pmts8sj",
        "template_24hxjlq",
        form.current,
        "jdvgJ0vTYWOLLAfDg"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="Contact">
      <div className="tital">
        <h1>Contact Me</h1>
      </div>
      <div className="contactForm">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Name" required/>
          <input
            type="Email"
            name="user_email"
            id="emailId"
            placeholder="Email Id"
            required
          />
          <input
            type="number"
            name="contact"
            placeholder="Contact No."
            required
          />
          <textarea
            name="message"
            cols="10"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn formSubmitBtn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
