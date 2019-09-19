/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes, { array } from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Hero from "./hero"
import DescriptionCard from "./description-card"
import About from "./about"
import ActionCall from "./action-call"
import Testimonial from "./testimonial"
import CaseStudy from "./case-study"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `70%`,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <Hero
            heading="We are creative, explore with us unlimited potential."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et diam et erat elementum euismod. Donec luctus vestibulum tellus, at pharetra nulla commodo quis."
          />
          <section style={{display: `flex`}}>
            <DescriptionCard />
            <DescriptionCard />
            <DescriptionCard />
            <DescriptionCard />
          </section>
        </div>
        <main>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: `70%`,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <About />
            <ActionCall />
            <Testimonial />
          </div>
          <section>
            <h2 style={{textAlign: `center`}}>Case Studies</h2>
            <div style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `center`
            }}>
              <CaseStudy />
              <CaseStudy />
              <CaseStudy />
            </div>
          </section>
        </main>
        <footer>
          <Footer />
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
