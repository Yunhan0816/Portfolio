import React from "react"

const Projects = () => (
  <div id="project">
    {" "}
    <h2 style={{ fontSize: "30px", fontWeight: "bold" }}># Projects</h2>
    <div>
      <div class="row">
        <div class="col-8">
          <p id="projectTitle"> > InRainbows</p>
        </div>
        <div class="col-2">
          <a id="redirect" href="https://github.com/Yunhan0816/InRainbows">
            Github
          </a>
        </div>
        <div class="col-2">
          <a id="redirect" href="#">
            Poster
          </a>
        </div>
      </div>
      <p>
        {" "}
        ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::{" "}
      </p>
      <p>
        01/2020 - Present | <a id="techstack">#VueJS</a>
        <a id="techstack">#NodeJS</a>
        <a id="techstack">#Firebase Database</a>
        <a id="techstack">#GoogleMap API</a>
        <a id="techstack">#HTML/CSS</a>
      </p>
      <p id="toGrey">
        <a href="https://inrainbows-171a7.web.app/" id="redirect">
          InRainbows
        </a>{" "}
        is a web application for high school and college-age LGBTQ+ members in
        Boston to easily access queer-friendly mental health resources based on
        preferences that matter to them.{" "}
      </p>
      <p id="toGrey">
        I first pitched the project idea to <a id="toBold">BU Spark! </a>
        and then got accepted and funded by{" "}
        <a
          href="https://www.bu.edu/spark/students/spark-programs/"
          id="redirect"
        >
          BU Spark! Innovation Fellowship Program
        </a>
        .{" "}
      </p>
      <p id="toGrey">
        As the <a id="toBold">founder</a> and the{" "}
        <a id="toBold">lead developer</a>, I lead a team of 3 software engineer
        and 1 UX designer to ensure the development of website features using{" "}
        <a id="toBold">Agile</a> methodology, programmed both front-end and
        back-end.{" "}
      </p>
    </div>
    <br></br>
    <div>
      <p id="projectTitle"> > Personalized Concert Generator</p>
      <p>
        {" "}
        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::{" "}
      </p>
    </div>
    <br></br>
    <div>
      <p id="projectTitle"> > InhalED</p>
      <p>
        {" "}
        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::{" "}
      </p>
      <p>
        10/2019 | <a id="techstack">#VueJS</a>
        <a id="techstack">#NodeJS</a>
        <a id="techstack">#Firebase Database</a>
      </p>
      <p id="toGrey">
        <a id="redirect" href="https://inhaled-bh19.firebaseapp.com/">
          InhalED
        </a>{" "}
        (ED for Emergency Department) is a web application for asthma patients
        to keep track of their data on inhaler usage, smoking habit, and daily
        physical condition, which further helps with patient-doctor
        communication and create the most effective regime.{" "}
      </p>
      <p id="toGrey">Built by me and other 2 teammates at BostonHacks 2019. </p>
      <p id="toGrey">
        First Place Winner of Best Use of Google Cloud and Environmental
        Sustainability Challenge at BostonHacks 2019.
      </p>
    </div>
    <br></br>
    <div>
      <p id="projectTitle">Help At Hand</p>
      <p>
        {" "}
        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::{" "}
      </p>
    </div>
    <br></br>
  </div>
)

export default Projects
