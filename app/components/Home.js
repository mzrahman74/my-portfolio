import React from "react";
import hero from "../public/images/hero.png";

function Home() {
  return (
    <div className="container py-md-5">
      <h1>Mohammad Ziaur Rahman</h1>
      <img src={`${hero}`} className="responsive" id="hero-responsive" alt="laptop_img_hero" />
      <p className="sdet" id="sdet-home">
        {" "}
        SDET with a proven record of automation user acceptance tests by leverage coding skills. Proven ability to build, deploy, run, and manage individual applications. Accustomed and build test scenarios that reduce maintenance and software support cost. Git for version control, Gitlab for CI/CD and JIRA for defect tracking. Proficient at liasing with scrum masters during daily stand-up and sprint meetings to ensure technical deliverables are achieved.
      </p>
    </div>
  );
}

export default Home;
