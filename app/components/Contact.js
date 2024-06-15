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
    </div>
  );
}

export default Contact;
