import React from "react"

const Projects = () => (
  <div class="col-12">
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
      <div class="col-12">
        <p> ::::::::::::::::::::::::::::::::: </p>
        <p>
          01/2020 - Present | <b id="techstack">#VueJS</b>
          <b id="techstack">#NodeJS</b>
          <b id="techstack">#Firebase Database</b>
          <b id="techstack">#GoogleMap API</b>
          <b id="techstack">#HTML/CSS</b>
        </p>
        <p class="toGrey">
          <a href="https://inrainbows-171a7.web.app/" id="redirect">
            InRainbows
          </a>{" "}
          is a web application for high school and college-age LGBTQ+ members in
          Boston to easily access queer-friendly mental health resources based
          on preferences that matter to them.{" "}
        </p>
        <p class="toGrey">
          I first pitched the project idea to <b>BU Spark! </b>
          and then got accepted and funded by{" "}
          <a
            href="https://www.bu.edu/spark/students/spark-programs/"
            id="redirect"
          >
            BU Spark! Innovation Fellowship Program
          </a>
          .{" "}
        </p>
        <p class="toGrey">
          As the <b>founder</b> and the <b>lead developer</b>, I lead a team of
          3 software engineer and 1 UX designer to ensure the development of
          website features using <b>Agile</b> methodology, programmed both
          front-end and back-end.{" "}
        </p>
      </div>
    </div>
    <br></br>
    <div>
      <p id="projectTitle"> > Personalized Concert Generator</p>
      <p> ::::::::::::::::::::::::::::::::: </p>
    </div>
    <br></br>
    <div>
      <div class="row">
        <div class="col-10">
          <p id="projectTitle"> > InhalED</p>
        </div>
        <div class="col-2">
          <a id="redirect" href="https://github.com/Yunhan0816/inhale-ed">
            Github
          </a>
        </div>
      </div>{" "}
      <p> ::::::::::::::::::::::::::::::::: </p>
      <p>
        10/2019 | <b id="techstack">#VueJS</b>
        <b id="techstack">#NodeJS</b>
        <b id="techstack">#Firebase Database</b>
      </p>
      <p class="toGrey">
        <a id="redirect" href="https://inhaled-bh19.firebaseapp.com/">
          InhalED
        </a>{" "}
        (ED for Emergency Department) is a web application for asthma patients
        to keep track of their data on inhaler usage, smoking habit, and daily
        physical condition, which further helps with patient-doctor
        communication and create the most effective regime.{" "}
      </p>
      <p class="toGrey">
        Built by me and other 2 teammates at <b>BostonHacks 2019.</b>{" "}
      </p>
      <p class="toGrey">
        First Place Winner of <b>Best Use of Google Cloud</b> and
        <b> Environmental Sustainability Challenge</b> at BostonHacks 2019.
      </p>
    </div>
    <br></br>
    <div>
      <p id="projectTitle">Help At Hand</p>
      <p> ::::::::::::::::::::::::::::::::: </p>
    </div>
    <br></br>
  </div>
)

export default Projects
