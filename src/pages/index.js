import React, { Component } from "react"
import AboutMe from "../components/aboutme"
import Layout from "../components/layout"
import Projects from "../components/projects"
// import Image from "../components/image"
import { Link } from "gatsby"
import Contact from "../components/contact"
// import Experience from "../components/experience"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Hannah Huang" />

        <br></br>
        <div class="row">
          <div class="col-12" id="aboutMe">
            <AboutMe />{" "}
          </div>
          {/* <div class="col-4">
            <div>
              <Image />
            </div>
          </div> */}
        </div>
        <br></br>
        <div class="row">
          <div id="project">
            {" "}
            <Projects />
          </div>
        </div>
        {/* <br></br>
        <div class="row">
          <div id="contact">
            <Experience />
          </div>
        </div> */}
        <br></br>
        <div class="row">
          <div id="contact">
            <Contact />
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
