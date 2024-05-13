import React from "react";
import mohammad from "../public/images/Mohammad_Rahman.JPG";

function About() {
  return (
    <div className="container container--narrow py-md-5">
      <h1>About Me</h1>
      <img className="profile" id="profile-id" src={`${mohammad}`} alt="my_profile" />
      <p className="about" id="about-id">
        Quality Engineer with over eight years of experience in developing and implementing quality control systems across various software development projects. Skilled in analyzing product and process performance data to drive continuous improvement initiatives. Experienced in both contract and full-time roles, specializing in white-box testing and performance testing within local development environments.
      </p>
      <p className="about" id="about-id">
        Notable achievements include leading the implementation of quality control systems resulting in a 20% reduction in defect rates and streamlining processes to improve overall product quality and efficiency.
      </p>
      <p className="about" id="about-id">
        {" "}
        In my most recent projects, I spearheaded the creation of a new repository for a critical project, followed by the development of a Cypress automation framework from scratch using JavaScript. I successfully implemented custom locators in application files to enhance test reliability and maintainability.
      </p>
      <p className="about" id="about-id">
        {" "}
        Feel free to explore my GitHub and LinkedIn profiles for more details on my projects and professional experience.
      </p>
    </div>
  );
}

export default About;
