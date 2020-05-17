import React from "react"
import InRainbowsLogo from "../images/InRainbows.png"
import ConcertGenerator from "../images/concert_generator.png"
const Projects = () => (
  <div class="col-12">
    {" "}
    <h2 style={{ fontSize: "30px", fontWeight: "bold" }}># My Projects</h2>
    <br></br>
    <div>
      <div class="row">
        <div class="col-4">
          <p id="projectTitle"> >> InRainbows</p>
        </div>
      </div>
      <div class="col-12">
        <p> ::::::::::::::::::::::::::::::::: </p>
        <p>
          <b>01/2020 - Present</b> | <b id="techstack">#VueJS</b>
          <b id="techstack">#NodeJS</b>
          <b id="techstack">#Firebase </b>
          <b id="techstack">#GoogleMap API</b>
          <b id="techstack">#HTML/CSS | </b>
          <b class="col-2">
            <a id="redirect" href="https://github.com/Yunhan0816/InRainbows">
              GitHub
            </a>
          </b>
          <b class="col-2">
            <a id="redirect" href="#">
              Poster
            </a>
          </b>
        </p>
        <div class="row">
          <div class="col-3">
            <img src={InRainbowsLogo} alt="Oops" class="img-fluid" />
          </div>
          <div class="col-9">
            <p class="toGrey">
              <a href="https://inrainbows-171a7.web.app/" id="redirect">
                InRainbows
              </a>{" "}
              is a web application for high school and college-age{" "}
              <b>LGBTQ+ members</b> in Boston to easily access queer-friendly
              mental health resources based on preferences that matter to them.{" "}
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
              As the <b>founder</b> and the <b>lead developer</b>, I lead a team
              of 3 software engineer and 1 UX designer to ensure the development
              of website features using <b>Agile</b> methodology, programmed
              both front-end and back-end.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <div>
      <div class="row">
        <div class="col-5">
          <p id="projectTitle"> >> Personalized Concert Generator</p>
        </div>
      </div>
      <div class="col-12">
        <p> ::::::::::::::::::::::::::::::::: </p>
        <p>
          <b> 02/2020 - 05/2020</b> <b id="techstack"> | #ExpressJS</b>
          <b id="techstack">#Firebase</b>
          <b id="techstack">Spotify OAuth & API</b>
          <b id="techstack">SeatGeek API</b>
          <b id="techstack">#HTML/CSS | </b>
          <b>
            <a
              id="redirect"
              href="https://github.com/Yunhan0816/personalized_concert_generator"
            >
              GitHub
            </a>
          </b>
        </p>

        <div class="row">
          <div class="col-3">
            <img src={ConcertGenerator} alt="Oops" class="img-fluid" />
          </div>
          <div class="col-9">
            <p class="toGrey">
              A web application for music lovers to get <b>personalized</b> and
              up-to-date concert ticket information based on their artists
              preferences and listening history on <b>Spotify</b>.
            </p>
            <p class="toGrey">
              User logs in using <b>Spotify OAuth</b>, and the app retrieves the
              top artists list from the user's Spotify and calls the{" "}
              <b>SeatGeek API</b>, and returns the user their up-to-date concert
              tickets of their most frequently listened artists.
            </p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <div>
      <div class="row">
        <div class="col-5">
          <p id="projectTitle"> >> Apple's FindMy Simulation</p>
        </div>
      </div>{" "}
      <div class="col-12">
        <p> ::::::::::::::::::::::::::::::::: </p>
        <p>
          04/2020 | <b id="techstack">#Python | </b>{" "}
          <b>
            <a
              id="redirect"
              href="https://github.com/Yunhan0816/FindMy-Simulations"
            >
              GitHub
            </a>
          </b>
        </p>
        <p class="toGrey">
          The code performs a simple simulation of{" "}
          <a
            id="redirect"
            href="https://support.apple.com/guide/security/end-to-end-encryption-sec60fd770ba/1/web/1"
          >
            Apple's Find My
          </a>{" "}
          system in a scenario where an Apple user, Bob, loses his phone in an
          airport without internet. Bob's phone uses <b>Bluetooth </b>to
          communicate with nearby iDevices and have them relay approximate
          location information to <b>iCloud</b>.
        </p>
        <p class="toGrey">
          Built by me and another teammates as the final project for{" "}
          <b>Applied Cryptography</b> class at Boston University
        </p>
      </div>
    </div>
    <br></br>
    <div>
      <div class="row">
        <div class="col-4">
          <p id="projectTitle"> >> InhalED</p>
        </div>
      </div>{" "}
      <div class="col-12">
        <p> ::::::::::::::::::::::::::::::::: </p>
        <p>
          10/2019 | <b id="techstack">#VueJS</b>
          <b id="techstack">#NodeJS</b>
          <b id="techstack">#Firebase Database | </b>
          <b class="col-2">
            <a id="redirect" href="https://github.com/Yunhan0816/inhale-ed">
              GitHub
            </a>
          </b>
          <b class="col-2">
            <a id="redirect" href="https://devpost.com/software/inhaled">
              Devpost
            </a>
          </b>
        </p>
        <p class="toGrey">
          <a id="redirect" href="https://inhaled-bh19.firebaseapp.com/">
            InhalED
          </a>{" "}
          (ED for Emergency Department) is a web application for{" "}
          <b>asthma patients </b>
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
    </div>
    <div>
      <p id="projectTitle">Help At Hand</p>
      <p> ::::::::::::::::::::::::::::::::: </p>
    </div>
    <br></br>
  </div>
)

export default Projects
