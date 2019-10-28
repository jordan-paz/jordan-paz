import React from "react"
import Portfolio from "../components/portfolio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Portfolio />
  </Layout>
)

export default IndexPage
