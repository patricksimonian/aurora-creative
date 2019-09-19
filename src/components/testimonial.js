import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TestimonialCard from "../components/testimonial-card"

const Testimonial = ({ }) => (
  <section style={{
    margin: '0 auto',
    textAlign: 'center'
  }}>
    <h2>Loved By Our Customers</h2>
    <div style={{
      display: 'flex'
    }}>
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  </section>
)

export default Testimonial
