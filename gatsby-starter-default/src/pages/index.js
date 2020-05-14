import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const isMobile = false
    let title = (
      <>
        {" "}
        |||||||||||||||||||||||||||||||||||||||||||||{" "}
        <a id="myname"> Hannah Huang</a>{" "}
        |||||||||||||||||||||||||||||||||||||||||||||{" "}
      </>
    )

    if (isMobile) {
      title = <a id="myname"> Hannah Huang</a>
    }
    return (
      <Layout>
        <SEO title="Home" />
        <h1>{title}</h1>
        <div id="nav">
          <a href="#aboutMe">About Me</a> {""} <a href="#project">Projects</a>{" "}
          {""}
          <a href="experience">Experience</a> {""}
          <a href="contact">Contact Me</a>
        </div>
        <br></br>

        <div id="aboutMe">
          <h2 style={{ fontSize: "30px" }}>#About Me</h2>
          <p>I am xyz, I did xyz</p>
        </div>
        <br></br>
        <div id="project">
          {" "}
          <h2 style={{ fontSize: "30px" }}>#Projects</h2>
        </div>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
