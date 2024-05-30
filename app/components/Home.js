import React from "react";
import hero from "../public/images/hero.png";

function Home() {
  return (
    <div className="container py-md-5">
      <h1>Mohammad Ziaur Rahman</h1>
      <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2gksvPlRIP8" frameborder="0" allowfullscreen></iframe>
      </div>
      {/* <img src={`${hero}`} className="responsive" id="hero-responsive" alt="laptop_img_hero" /> */}
      <p className="sdet" id="sdet-home">
        {" "}
        SDET with a proven record of automating user acceptance tests by leveraging coding skills. Proven ability to build, deploy, run, and manage individual applications. Accustomed to building test scenarios that reduce maintenance and software support cost. Utilizing Git for version control, Gitlab for CI/CD and JIRA for defect tracking. Proficient at liaising with scrum masters during daily stand-up meeting and sprint planning/review meetings to ensure technical deliverables are achieved.
      </p>
    </div>
  );
}

export default Home;
