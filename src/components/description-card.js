import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const DescriptionCard = ({ }) => (
  <div style={{
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    background: `#35bfff`,
    margin: `1.2em`,
    width: `25%`,
    padding: `2em 1.5em 0`,
    boxShadow: `0px 0px 5px #d1d1d1`,
    borderRadius: `32px 0 32px 32px`,
    fontSize: `0.65em`,
    color: `#fff`
  }}>
    <div style={{
      padding: `0.5em`,
      borderRadius: `20px 0 20px 20px`,
      background: `#fff`,
      boxShadow: `0px 0px 2px #aaa`
  }}>
      <img src="" alt="image"/>
    </div>
    <h5 style={{
      color: `#fff`,
      margin: `0.75em 0`
    }}>
      Super All-stars
    </h5>
    <p style={{textAlign: `center`}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed aliquet sapien, vitae sagittis metus.
      Nullam facilisis vehicula turpis.
    </p>
  </div>
)

export default DescriptionCard
