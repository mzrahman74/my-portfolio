import React from "react";
import github from "../public/images/github_profile.png";
import aws from "../public/images/aws_spring_boot_deployment.jpg";
import playwright from "../public/images/playwright_js_automation.jpg";
import cyber from "../public/images/cyber_security.png";

function About() {
  return (
    <div className="container container--narrow py-md-5">
      <h1>About Me</h1>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={`${github}`} class="d-block w-100" alt="github_profile" />
          </div>
          <div class="carousel-item">
            <img src={`${aws}`} class="d-block w-100" alt="aws_certificate" />
          </div>
          <div class="carousel-item">
            <img src={`${playwright}`} class="d-block w-100" alt="playwright_certificate" />
          </div>
          <div class="carousel-item">
            <img src={`${cyber}`} class="d-block w-100" alt="cyber_security_certificate" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br />
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
