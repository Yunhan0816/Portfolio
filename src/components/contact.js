import React from "react"

import { FaEnvelope } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

// import FaLinkedin from "react-icons/lib/fa/linkedin"
const Contact = () => (
  <div class="col-12">
    <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>02. Get In Touch</h1>
    <br></br>
    <div class="row">
      <div class="col-12" style={{ textAlign: "center" }}>
        {" "}
        <span style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          <a href="mailto:hannahhuang@gmail.com">
            <FaEnvelope size={32} />
          </a>{" "}
        </span>
        <a href="https://www.linkedin.com/in/hannah-yunhan-huang-007520165/">
          <span style={{ paddingLeft: "5%", paddingRight: "5%" }}>
            <FaLinkedin size={32} />
          </span>
        </a>
        <a href="https://github.com/Yunhan0816">
          <span style={{ paddingLeft: "5%", paddingRight: "5%" }}>
            <FaGithub size={32} />
          </span>
        </a>
        <a href="https://medium.com/@yunhanh">
          <span style={{ paddingLeft: "5%", paddingRight: "5%" }}>
            <FaMedium size={32} />
          </span>
        </a>
        <a href="https://www.facebook.com/yunhan.huang.3">
          <span style={{ paddingLeft: "5%", paddingRight: "5%" }}>
            <FaFacebook size={32} />
          </span>
        </a>
        {/* <p class="toGrey">
          <FaEnvelope />
        </p> */}
      </div>
      <div class="col-7">
        <p> </p>
      </div>
    </div>
  </div>
)

export default Contact
