import React from "react"
import InRainbowsLogo from "../images/InRainbows.png"
import ConcertGenerator from "../images/concert_generator.png"
import Inhaled from "../images/inhaled.png"
import AppleFindMy from "../images/applefindmy.png"
import HelpAtHand from "../images/help_at_hand.png"
import Lyrics from "../images/lyricsanalysis.png"
import Ameelio from "../images/ameelio.png"
import PersonalWebsite from "../images/personalwebsite.png"
const Projects = () => (
  <div class="col-12">
    {" "}
    <h3 style={{ fontSize: "26px", fontWeight: "bold" }}>
      01. Noteworthy Projects
    </h3>
    <br></br>
    <div>
      <div class="row">
        <div class="col-12">
          <p id="projectTitle"> >> InRainbows</p>
        </div>
      </div>
      <div class="col-12">
        {/* <p>
          {" "}
          :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        </p> */}
        <p>
          <b>01/2020 - Present</b> | <b id="techstack">#VueJS</b>
          <b id="techstack">#NodeJS</b>
          <b id="techstack">#Firebase </b>
          <b id="techstack">#GoogleMap API</b>
          <b id="techstack">#HTML/CSS </b> |
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
          <div class="col-2">
            <img src={InRainbowsLogo} alt="Oops" class="img-fluid" />
          </div>
          <div class="col-10">
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
              of 3 software engineers and 1 UX designer to ensure the
              development of website features using <b>Agile</b> methodology,
              and programmed both front-end and back-end.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <div>
      <div class="row">
        <div class="col-12">
          <p id="projectTitle"> >> Personalized Concert Generator</p>
        </div>
      </div>
      <div class="col-12">
        {/* <p> ::::::::::::::::::::::::::::::::: </p> */}
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
          <div class="col-2">
            <img src={ConcertGenerator} alt="Oops" class="img-fluid" />
          </div>
          <div class="col-10">
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
        <div class="col-12">
          <p id="projectTitle"> >> Apple's FindMy Simulation</p>
        </div>
      </div>{" "}
      <div class="col-12">
        {/* <p> ::::::::::::::::::::::::::::::::: </p> */}
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
        <div class="row">
          <div class="col-2">
            <img src={AppleFindMy} alt="Oops" class="img-fluid" />
          </div>
          <div class="col-10">
            {" "}
            <p class="toGrey">
              The app performs a simple simulation of{" "}
              <a
                id="redirect"
                href="https://support.apple.com/guide/security/end-to-end-encryption-sec60fd770ba/1/web/1"
              >
                Apple's Find My
              </a>{" "}
              system in a scenario where an Apple user, Bob, loses his phone in
              an airport without internet. Bob's phone uses <b>Bluetooth </b>to
              communicate with nearby iDevices and have them relay approximate
              location information to <b>iCloud</b>.
            </p>
            <p class="toGrey">
              Built by me and another teammates as the final project for{" "}
              <b>Applied Cryptography</b> class at Boston University
            </p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <div>
      <div class="row">
        <div class="col-12">
          <p id="projectTitle"> >> InhalED</p>
        </div>
      </div>{" "}
      <div class="col-12">
        {/* <p> ::::::::::::::::::::::::::::::::: </p> */}
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
        <div class="row">
          <div class="col-2">
            <img src={Inhaled} alt="Oops" class="img-fluid" />
          </div>
          <div class="col-10">
            <p class="toGrey">
              <a id="redirect" href="https://inhaled-bh19.firebaseapp.com/">
                InhalED
              </a>{" "}
              (ED for Emergency Department) is a web application for{" "}
              <b>asthma patients </b>
              to keep track of their data on inhaler usage, smoking habit, and
              daily physical condition, which further helps with patient-doctor
              communication and create the most effective regime.{" "}
            </p>
            <p class="toGrey">
              Built by me and other 2 teammates at <b>BostonHacks 2019.</b>{" "}
            </p>
            <p class="toGrey">
              First Place Winner of <b>Best Use of Google Cloud</b> and
              <b> Environmental Sustainability Challenge</b> at BostonHacks
              2019.
            </p>
          </div>
        </div>
      </div>
      <br></br>
    </div>
    <br></br>
    <div>
      <div class="row">
        <div class="col-12">
          <p id="projectTitle"> >> HelpAtHand</p>
        </div>
      </div>{" "}
      <div class="col-12">
        {/* <p> ::::::::::::::::::::::::::::::::: </p> */}
        <p>
          10/2019 | <b id="techstack">#VueJS</b>
          <b id="techstack">#NodeJS</b>
          <b id="techstack">#Firebase Database | </b>
          <b class="col-2">
            <a id="redirect" href="https://github.com/Yunhan0816/help_at_hand">
              GitHub
            </a>
          </b>
          <b class="col-2">
            <a id="redirect" href="https://devpost.com/software/helpathand">
              Devpost
            </a>
          </b>
        </p>
        <div class="row">
          <div class="col-2">
            <img src={HelpAtHand} alt="Oops" class="img-fluid" />
          </div>
          <div class="col-10">
            <p class="toGrey">
              A web application that gives victims of sexual assult a voice. It
              is a platform for anonymous sexual assault case reports and step
              by step guidance for finding help from local hospitals and therapy
              centers.
              <br></br>
              <br></br>Home page provides find help button, call-help phone
              number, and directs to report cases view that allows users to
              enter the information of the incident. Chat room provides victims
              of sexual assault a place to talk to other users.
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <div>
        <div class="row">
          <div class="col-12">
            <p id="projectTitle"> >> Personal Website</p>
          </div>
        </div>{" "}
        <div class="col-12">
          {/* <p> ::::::::::::::::::::::::::::::::: </p> */}
          <p>
            05/2020 | <b id="techstack">#React</b>
            <b id="techstack">#GatsbyJS</b>
            <b id="techstack">#CSS |</b>
            <b class="col-2">
              <a id="redirect" href="https://github.com/Yunhan0816/Portfolio">
                GitHub
              </a>
            </b>
          </p>
          <div class="row">
            <div class="col-2">
              <img src={PersonalWebsite} alt="Oops" class="img-fluid" />
            </div>
            <div class="col-10">
              <p class="toGrey">
                The personal website that you are currently viewing. <br></br>
                <br></br>
                Built and designed from scratch, implemented with React,
                GatsbyJS and hosted via GitHub Pages.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
    <br></br>
    <div>
      <div class="row">
        <div class="col-12">
          <p id="projectTitle"> >> Band Lyrics Analysis</p>
        </div>
      </div>{" "}
      <div class="col-12">
        {/* <p> ::::::::::::::::::::::::::::::::: </p> */}
        <p>
          10/2019 | <b id="techstack">#Python</b>
          <b id="techstack">#Pandas</b>
          <b id="techstack">#NLTK</b>
          <b id="techstack">#Genius API | </b>
          <b class="col-2">
            <a
              id="redirect"
              href="https://github.com/Yunhan0816/band-lyrics-analysis"
            >
              GitHub
            </a>
          </b>
        </p>
        <div class="row">
          <div class="col-2">
            <img src={Lyrics} alt="Oops" class="img-fluid" />
          </div>
          <div class="col-10">
            <p class="toGrey">
              Analysis on my favorite indie bands' song lyrics. I Analyzed
              Radiohead, Beach Fossils, Beach House, Diiv, and Wild Nothing's
              lyrics, generating word clouds, and examining their sentiments.
              <br></br>
              <br></br>
              Obtained Lyrics of the bands from <b>Genius API</b> with the help
              of web scraping using <b>BeautifulSoup</b>. Cleaned the data by
              removing unneccessary phrases.
              <br></br>
              <br></br>
              Utilized <b>WordCloud</b> library in Python to obtain word cloud
              for each artists and used <b>NLTK's Sentiment Analyzer</b> to
              generate <b>normalized unidimensional metric</b> of sentiment,
              finding the positivity, negativity, and neutrality of the lyrics
              by each artist, and illustrated the result by plotting the graph.
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <div class="row">
          <div class="col-12">
            <p id="projectTitle"> >> Ameelio Connect</p>
          </div>
        </div>
        <div class="col-12">
          {/* <p> :::::::::::::::::::::::::::::::::::::::::::: </p> */}
          <p>
            10/2019 | <b id="techstack">#VueJS</b>
            <b id="techstack">#NodeJS</b>
            <b id="techstack">#Firebase | </b>
            <b class="col-2">
              <a id="redirect" href="https://github.com/Yunhan0816/ameelio">
                GitHub
              </a>
            </b>
          </p>

          <div class="row">
            <div class="col-2">
              <img src={Ameelio} alt="Oops" class="img-fluid" />
            </div>
            <div class="col-10">
              <p class="toGrey">
                Collaborated with{" "}
                <a href="https://ameelio.org/" id="redirect">
                  Ameelio.org
                </a>{" "}
                and built a web application for inmates in the US to contact
                their loved ones. Worked with Vue.js for the frontend and
                firebase for the backend.
                <br></br>
                <br></br>Allowed friends and families to schedule video calls
                with their inmate contact, and administrators to
                approve/disapprove connections between friends and families and
                inmates in specific prisons.
                <br></br>
                <br></br>Responsible for <b>backend</b>, leading a team of 5
                engineers and managing database connection and communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Projects
