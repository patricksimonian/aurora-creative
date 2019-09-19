import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { relative } from "path";
// import AboutImage from "../components/about-image"

const CaseStudy = ({ }) => (
  <div style={{
    position: 'relative',
    width: '22em',
    height: '9em',
    margin: '1em',
    boxShadow: '0px 0px 30px 0px #e8e8e8',
    borderRadius: '32px 0 0 32px'
  }}>
    <div style={{
      position: 'absolute',
      left: 0,
      width: '9em',
    }}>
      <img style={{
        borderRadius: '32px 0 32px 32px',
        margin: 0,
      }} src="https://picsum.photos/200/200/" alt="image" />
    </div>
    <div style={{
      position: 'absolute',
      padding: '1em 0 0',
      right: 0,
      width: '12em'
    }}>
      <h4 style={{
        margin: '0 0 0.8em',
        fontSize: '0.8em'}}>Case Study Title</h4>
      <p style={{
        margin: '0 0 0.3em',
        fontSize: '0.65em'
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed aliquet sapien, vitae sagittis metus.
        Nullam facilisis vehicula turpis.
      </p>
      <a href="#" style={{
        fontSize: '0.65em'
      }}>Read more</a>
    </div>
  </div>
)

export default CaseStudy
