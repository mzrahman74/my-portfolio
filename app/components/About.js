import React from "react";
import mohammad from "../public/images/Mohammad_Rahman.JPG";

function About() {
  return (
    <div className="container container--narrow py-md-5">
      <h1>About Me</h1>
      <img className="profile" id="profile-id" src={`${mohammad}`} alt="my_profile" />
      <p className="about" id="about-id">
        Quality Engineer with eight plus years of experience in developing and implementing quality control systems, analyzing product and process performance data, and leading continuous improvement. I completed multiple projects as a contract to hire and full-time. I have experience working with the Development team in a local environment for white-box testing, and performance testing. My most recent projects I created a new repository for a new project, then Cypress automation framework from scratch with JavaScript and declared custom locator in application files. Please checkout out my Github, and LinkedIn account.
      </p>
    </div>
  );
}

export default About;
