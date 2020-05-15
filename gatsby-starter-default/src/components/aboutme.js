import React from "react"

const AboutMe = () => (
  <div id="aboutMe">
    <h1 style={{ fontSize: "30px" }}>#About Me</h1>
    <p id="toGrey">
      Hello! I'm Hannah, a 4th year Computer Science student studying at Boston
      University (graduating May 2021).{" "}
    </p>
    <p id="toGrey">
      My passions include <a id="toBold">Software Development</a>,{" "}
      <a id="toBold">organizing hackathons</a>, and indie rock.{" "}
    </p>
    <p id="toGrey">
      I am a <a id="toBold">Developer Summer Analyst</a> at{" "}
      <a style={{ color: "#81c5fd", fontWeight: "bold" }}>Barclays</a>.
    </p>
    <p id="toGrey">
      I am the current <a id="toBold">Director of Technology</a> at{" "}
      <a id="redirect" href="https://boston.techtogether.io/index.html">
        TechTogether Boston,
      </a>
      , Boston's largest female, femme, and non-binary hackathon that empowers
      women and non-binary individuals in technology to achieve.{" "}
    </p>
    <p id="toGrey">
      I am also a <a id="toBold">Tech Organizer</a> at{" "}
      <a id="redirect" href="https://www.bostonhacks.io/">
        BostonHacks
      </a>
      , an annual collegiate hackathon at Boston University.
    </p>
    <p id="toGrey">
      I am a former <a id="toBold">Back-end lead developer</a> at{" "}
      <a id="redirect" href="https://hack4impact.org/">
        Hack4Impact
      </a>
      , an organization that collaborates with non-profits to build softwares
      for social good.
    </p>
  </div>
)

export default AboutMe
