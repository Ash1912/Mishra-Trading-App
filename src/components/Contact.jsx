import React from "react";

function Contact() {
  return (
    <div className="contact" style={{ padding: "4rem 0" }}>
      <div className="container mx-3 py-3">
        <div className="text-content">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Enter Your Email" />
            <input type="text" placeholder="Enter Your Mobile Number" />
            <input type="text" placeholder="Enter Your Location" />
            <textarea placeholder="Enter Your Message"></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
        <div className="map-content">
          <iframe 
            title="Our Location" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.0899919482677!2d83.35642987521813!3d26.74150417674964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145d6d53605df%3A0xbe772acf5865ced7!2sMishra%20trading%20company!5e0!3m2!1sen!2sin!4v1721477867492!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
