import React from "react"
// import { Link } from "gatsby"
import DynamicLink from "./dynamic-link"
import NavLinks from "../data/nav-links.json"

const Nav = () => (
  <div class="col-12">
    <nav className="nav">
      <DynamicLink to="/" className="nav__logo"></DynamicLink>
      <ul className="nav__list">
        {NavLinks.map((link, index) => {
          return (
            <li key={`nav-item-${index}`} className="nav__item">
              <DynamicLink className="nav__link" to={link.path}>
                {link.name}
              </DynamicLink>
            </li>
          )
        })}
      </ul>
    </nav>
  </div>
)

export default Nav

// const NavBar = () => (
//   <div class="nav">
//     <Link to="#aboutMe" class="navHref">
//       00. About Me
//     </Link>
//     <Link to="#project" class="navHref">
//       01. Projects
//     </Link>
//     <Link to="#experience" class="navHref">
//       02. Experience
//     </Link>
//     <Link to="#contact" class="navHref">
//       03. Contact
//     </Link>
//   </div>
// )

// export default NavBar
