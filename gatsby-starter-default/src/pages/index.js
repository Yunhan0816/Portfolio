import React, { Component } from "react"
import { Link } from "gatsby"
import AboutMe from "../components/aboutme"
import Layout from "../components/layout"
import NavBar from "../components/navbar"
import Projects from "../components/projects"
// import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const isMobile = false
    let title = (
      <>
        {" "}
        <a id="myname"> Hannah Huang</a>{" "}
        |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||{" "}
      </>
    )

    if (isMobile) {
      title = <a id="myname"> Hannah Huang</a>
    }
    return (
      <Layout>
        <SEO title="Hannah Huang" />
        <h1>{title}</h1>
        <NavBar />
        <br></br>
        <AboutMe />
        <br></br>
        <Projects />
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage