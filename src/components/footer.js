import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"

const Footer = ({ }) => (
  <section style={{
    marginLeft: `10em`,
    padding: `4em 0 0 0`,
    backgroundColor: `#93d9ff`
  }}>
    <div style={{ display: `flex` }}>
      <div style={{
        width: `25%`
      }}>
        <div style={{width:`15%`}}>
          <Logo />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed aliquet sapien, vitae sagittis metus.
        Nullam facilisis vehicula turpis.</p>
        <ul>
          <li>F</li>
          <li>T</li>
          <li>G</li>
          <li>I</li>
        </ul>
      </div>
      <div style={{
        width: `75%`,
        display: `flex`,
        justifyContent: `space-around`,
      }}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Testimonial</li>
          <li>Case Studies</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </section>
)

export default Footer
