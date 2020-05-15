import React from "react"
import { Link } from "gatsby"
const NavBar = () => (
  <div class="nav">
    <Link to="#aboutMe" class="navHref">
      00. About Me
    </Link>
    <Link to="#project" class="navHref">
      01. Projects
    </Link>
    <Link to="#experience" class="navHref">
      02. Experience
    </Link>
    <Link to="#contact" class="navHref">
      03. Contact
    </Link>
  </div>
)

export default NavBar
