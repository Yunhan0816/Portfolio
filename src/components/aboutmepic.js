import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mypic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div class="profilepic">
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

export default Image
