import React from "react";
import aws from "../public/images/aws_spring_boot_deployment.jpg";
import playwright from "../public/images/playwright_js_automation.jpg";
import cyber from "../public/images/cyber_security.png";

function About() {
  return (
    <div className="container container--narrow py-md-5">
      <h1>About Me</h1>
      <div className="certificate-container">
        <div className="certificate">
          <img src={`${aws}`} alt="aws_certificate" />
        </div>
        <div className="certificate">
          <img src={`${playwright}`} alt="playwright_certificate" />
        </div>
        <div className="certificate">
          <img src={`${cyber}`} alt="cyber_security_certificate" />
        </div>
      </div>
      <p className="about" id="about-id">
        Quality Engineer with over eight years of experience in developing and implementing quality control systems across various software development projects. Skilled in analyzing product and process performance data to drive continuous improvement initiatives. Experienced in both contract and full-time roles, specializing in white-box testing and performance testing within local development environments.
      </p>
      <p className="about" id="about-id">
        Clients I've had the pleasure of working with:
        <ul>
          <li>Centene: Contributed to software development in test automation and advanced healthcare management systems.</li>
          <li>TimeDoc Health: Collaborated with the development team to optimize local environments and streamline healthcare solutions. </li>
          <li>Norwex: Automated web and api testing and improved digital marketing strategies.</li>
          <li>SiriusXM: Played a key role in native app automation and optimized content delivery strategies.</li>
          <li>Nielsen: Assisted with native app automation and supported data analysis and marketing research efforts.</li>
          <li>Securus Technologies: Engaged in both manual and automated testing for web application and enhanced knowledge of the software development lifecycle.</li>
        </ul>
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
