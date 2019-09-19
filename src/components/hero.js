import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeroImage from "../components/hero-image"
import styles from "../pages/hero.module.css"

console.log(styles);

const Hero = ({ heading, description }) => (
  <section role="banner"
    style={{
      display: `flex`
    }}
  >
    <div
      style={{
        width: `60%`
      }}
    >
      <h1
        style={{

        }}
      >
        { heading }
      </h1>
      <p
        style={{}}
      >
        { description }
      </p>
    </div>
    <div className={styles.HeroImage}
  //     style={{
  //       position: `absolute`,
  //       top: 0,
  //       right: 0,
  //       width: `50%`,
  //       clipPath: `polygon(100% 0%, 100% 100%, 0% 100%, 32% 0%, 0% 0%)`
  // }}
>
      <HeroImage/>
    </div>
  </section>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Hero