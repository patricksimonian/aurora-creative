import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AboutImage from "../components/about-image"

import styles from "../pages/about.module.css"

const About = ({ }) => (
  <section style={{
    padding: `8em 0`,
    position: `relative`
  }}>
    <div className={styles.AboutImage}>
      <AboutImage />
    </div>
    <div style={{
      borderRadius: `32px 0 32px 32px`,
      position: `absolute`,
      top: `50%`,
      left: `80%`,
      right: `0`,
      width: `30em`,
      fontSize: `0.8em`,
      color: `#858585`,
      background: `#fff`,
      boxShadow: `0px 0px 2px #c7c7c7`,
      padding: `1.5em 2.5em`,
      webkitTransform: `translate(-50%, -50%)`,
      transform: `translate(-50%, -50%)`
}}>
      <h2 style={{margin: `0.5em 0`}}>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed aliquet sapien, vitae sagittis metus.
        Nullam facilisis vehicula turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed aliquet sapien, vitae sagittis metus.
      Nullam facilisis vehicula turpis.
      </p>
    </div>
  </section>
)

export default About
