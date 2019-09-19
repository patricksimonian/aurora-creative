import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import AboutImage from "../components/about-image"

const TestimonialCard = ({ }) => (
  <div style={{
    margin: '1em'
  }}>
    <div style={{
      boxShadow: 'rgb(241, 241, 241) 5px 5px 15px 7px',
      padding: '2em',
      fontSize: '0.8em',
      color: '#7c7c7c'
  }}>
      <p style={{margin: 0}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed aliquet sapien, vitae sagittis metus.
        Nullam facilisis vehicula turpis.
      </p>
    </div>
    <div style={{
      display: 'flex',
      margin: '1em 0 0 0'
    }}>
      <img style={{
        margin: 0,
        width: '3.5em',
        height: '3.5em',
        borderRadius: '20px 0px 20px 20px'
      }} src="https://picsum.photos/id/237/200/200" alt="image" />
      <div style={{
        margin: '0 0 0 1em',
        textAlign: 'left'
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '1em',
          fontWeight: '400'
        }}>Guy Nameson</h3>
        <p style={{fontSize: '0.75em'}}>Titleist</p>
      </div>
    </div>
  </div>
)

export default TestimonialCard
