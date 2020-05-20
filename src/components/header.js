import React from "react"
import Download from "../components/resume"
const Header = () => (
  <div id="header">
    {/* <p> */}
    <div class="row">
      <a id="myname" href="/">
        {" "}
        Hannah Huang
        <br></br>
      </a>{" "}
      <b style={{ fontSize: "35px", paddingLeft: "30px" }} class="col-2">
        &#x1f469;&#x1F3FB;&#x200D;&#x1F4BB;
      </b>
    </div>
    <div class="row">
      <p style={{ paddingTop: "5px" }}>
        {" "}
        <a>
          <Download />
        </a>{" "}
        |{" "}
        <a
          style={{
            color: " #fef3d4",
            fontFamily: "Overpass Mono, sans-serif",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          href="https://github.com/Yunhan0816"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          style={{
            color: " #fef3d4",
            fontFamily: "Overpass Mono, sans-serif",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          href="https://www.linkedin.com/in/hannah-yunhan-huang-007520165/"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          style={{
            color: " #fef3d4",
            fontFamily: "Overpass Mono, sans-serif",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          href="https://medium.com/@yunhanh"
        >
          Blog
        </a>{" "}
        |{" "}
        <a
          style={{
            color: " #fef3d4",
            fontFamily: "Overpass Mono, sans-serif",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          href="mailto:hannahhuang816@gmail.com"
        >
          Email
        </a>
        {/* ||||||||||||||||||||||||||||||||||||||||||||||||||| */}
      </p>
    </div>
  </div>
)

export default Header
