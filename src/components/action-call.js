import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AboutImage from "../components/about-image"

import styles from "../pages/button.module.css"

const ActionCall = ({ }) => (
  <section style={{
    margin: '0 auto',
    width: '50%',
    textAlign: 'center'
  }}>
    <h2>Why work with us?</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed aliquet sapien, vitae sagittis metus.
      Nullam facilisis vehicula turpis.
    </p>
    <div className={styles.buttonOne}>
      <div className={styles.effOne}></div>
      <a href="#"> Get in touch </a>
    </div>
  </section>
)

export default ActionCall
