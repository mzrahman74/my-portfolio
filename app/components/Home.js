import React from "react";

function Home() {
  return (
    <div className="container py-md-5">
      <h1>Mohammad Ziaur Rahman</h1>
      <h2>Software Developement Engineer in Test (SDET)</h2>
      <hr />
      <div className="video-container">
        <div className="video-row">
          <iframe className="video_one" src="https://www.youtube.com/embed/L7dAYld_7aM" frameborder="0" allowfullscreen="ture"></iframe>
          <iframe className="video_two" src="https://www.youtube.com/embed/E4ikuWxpu1M" frameborder="0" allowfullscreen="true"></iframe>
          <iframe className="video_three" src="https://www.youtube.com/embed/ER9Er4P8TJE" frameborder="0" allowfullscreen="true"></iframe>
        </div>
        <div className="video-row">
          <iframe className="video_four" src="https://www.youtube.com/embed/jJuD65mdd9E" frameborder="0" allowfullscreen="true"></iframe>
          <iframe className="video_five" src="https://www.youtube.com/embed/uDkvctQyKNM" frameborder="0" allowfullscreen="true"></iframe>
        </div>
      </div>
      <hr />
      <h2>Welcome to My Portfolio</h2>
      <hr />
      <p className="sdet" id="sdet-home">
        {" "}
        SDET with a proven record of automating user acceptance tests by leveraging coding skills. Proven ability to build, deploy, run, and manage individual applications. Accustomed to building test scenarios that reduce maintenance and software support cost. Utilizing Git for version control, Gitlab for CI/CD and JIRA for defect tracking. Proficient at liaising with scrum masters during daily stand-up meeting and sprint planning/review meetings to ensure technical deliverables are achieved.
      </p>
      <hr />
      <div className="list-skill">
        Key Skills & Technologies:
        <ul>
          <li>Automation Testing Tool: Cypress, Playwright, Selenium, and Appium</li>
          <li>Programming Language: Java, JavaScript, and Python</li>
          <li>Framework & Model: Spring-Boot, TestNG, Jest, Cucumber, and Rest-Assured</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
