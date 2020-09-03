/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "../components/navbar"
import Header from "./header"
import "../styles/layout.css"
// import favicon from "../images/Hannah.png"

// const Layout = ({ children }) => {
//   // const data = useStaticQuery(graphql`
//   //   query SiteTitleQuery {
//   //     site {
//   //       siteMetadata {
//   //         title
//   //       }
//   //     }
//   //   }
//   // `)

//   return (
//     <>
//       {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
//       <div
//         style={{
//           marginLeft: "12%",
//           marginRight: "12%",
//           // padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         {/* Put Helmet here */}
//         <Helmet
//           title="Hannah Huang"
//           meta={[
//             {
//               name: "description",
//               content:
//                 "Hannah Huang is a 4th year Computer Science student at Boston University with a passion for Software Development",
//             },
//             {
//               name: "keywords",
//               content: "Hannah Huang",
//             },
//           ]}
//           link={[{ rel: "shortcut icon", type: "image/png" }]}
//         />
//         <Header />
//         <Nav />
//         <main>{children}</main>
//         <br></br>
//         <footer
//           style={{
//             textAlign: "center",
//             fontFamily: "Lato, sans-serif",
//             color: "white",
//             fontSize: "15px",
//           }}
//         >
//           Design & Build by Hannah Huang
//         </footer>
//         <br></br>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
const Layout = ({ children }) => (
  <div
    style={{
      marginLeft: "12%",
      marginRight: "12%",
      // padding: `0 1.0875rem 1.45rem`,
    }}
  >
    {/* Put Helmet here */}
    <Helmet
      title="Hannah Huang"
      meta={[
        {
          name: "description",
          content:
            "Hannah Huang is a 4th year Computer Science student at Boston University with a passion for Software Development",
        },
        {
          name: "keywords",
          content: "Hannah Huang",
        },
      ]}
      link={[{ rel: "shortcut icon", type: "image/png" }]}
    />
    <Header />
    <Nav />
    <main>{children}</main>
    <br></br>
    <footer
      style={{
        textAlign: "center",
        fontFamily: "Lato, sans-serif",
        color: "white",
        fontSize: "15px",
      }}
    >
      Design & Build by Hannah Huang
    </footer>
    <br></br>
  </div>
)
export default Layout
