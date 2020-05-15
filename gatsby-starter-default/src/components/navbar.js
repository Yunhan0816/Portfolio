import React from "react"

const NavBar = () => (
  <div id="nav">
    <a href="#aboutMe" id="about">
      {" "}
      <a id="number">00.</a> About Me
    </a>{" "}
    <a href="#project" id="works">
      <a id="number">01.</a> Projects{" "}
    </a>{" "}
    <a href="experience" id="professional">
      <a id="number">02.</a> Experience{" "}
    </a>{" "}
    <a href="contact" id="contactme">
      <a id="number">03.</a> Contact{" "}
    </a>
  </div>
)

export default NavBar
