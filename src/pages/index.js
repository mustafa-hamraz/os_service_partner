import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container } from 'react-bootstrap';

const IndexPage = () => (
  <Layout>
    <Seo title="Hem" />

    <Container>
          This is home page
    </Container>
  </Layout>
)
export default IndexPage
