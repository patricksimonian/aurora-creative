import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        margin: `0 auto`,
        padding: `1.45rem 25.0875rem 1.45rem 1.0875rem`,
        maxWidth: `70%`
      }}
    >
      <div
        style={{
          width: `25%`
        }}>
        <Logo></Logo>
      </div>
      <ul style={{
        display: `flex`,
        listStyle: `none`,
        margin: 0 }}>
        <li>
          <Link
            to="/"
            style={{
              color: `#939393`,
              textDecoration: `none`,
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{
              color: `#939393`,
              textDecoration: `none`,
            }}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{
              color: `#939393`,
              textDecoration: `none`,
            }}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{
              color: `#939393`,
              textDecoration: `none`,
            }}
          >
            Case Studies
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
