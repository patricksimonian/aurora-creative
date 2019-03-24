import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web developer`, `web applications`, `design`, `aurora creative`, `graphics design`]} />
    <h1>Aurora Creative</h1>
    <p>Please check back soon for great things to come!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
