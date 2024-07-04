import React from "react";
import contact from "../public/images/contact_me.jpeg";

function Contact() {
  return (
    <div>
      <img className="contact_me" height="200" id="contact-id" src={`${contact}`} alt="contact_me_img" />
      <hr />
      <p className="note" id="note-id-1st">
        {" "}
        Please let me know if you have any questions about my background. I will be happy to answer all your questions.{" "}
      </p>
      <p className="note" id="note-id-2nd">
        Phone:(214) 973-0438{" "}
      </p>
      <p className="note" id="note-id-3rd">
        Email: mzrahman74@gmail.com{" "}
      </p>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107436.84423414226!2d-97.21798558199373!3d32.70196040701056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e62d2e40898d3%3A0xb5ef6ac1fa05351!2sArlington%2C%20TX!5e0!3m2!1sen!2sus!4v1720100984197!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullscreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Contact;
