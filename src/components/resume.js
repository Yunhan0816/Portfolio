import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Download = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "myResume.pdf" }) {
        publicURL
        name
      }
    }
  `)
  return (
    <a
      style={{
        color: " #fef3d4",
        fontFamily: "Overpass Mono, sans-serif",
        paddingRight: "10px",
      }}
      href={data.file.publicURL}
    >
      Resume{" "}
    </a>
  )
}

export default Download
