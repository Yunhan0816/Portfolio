import React, { Component } from "react"
import { Link } from "gatsby"
import AboutMe from "../components/aboutme"
import Layout from "../components/layout"
import NavBar from "../components/navbar"
import Projects from "../components/projects"
import Image from "../components/aboutmepic"
// import Image from "../components/image"
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

        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
