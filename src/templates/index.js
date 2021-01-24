import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile/"

const IndexTemplate = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            username
            fullname
            email
          }
        }
      }
      photo: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { positions } = pageContext
  const { fluid: fluidPhoto } = data.photo.childImageSharp
  const { author } = data.site.siteMetadata

  return (
    <Layout>
      <SEO positions={positions} />
      <Profile
        fluidPhoto={fluidPhoto}
        author={author}
        positions={positions}
        className="-mt-2 md:mt-0 md:space-x-4 md:flex md:items-center md:justify-center lg:space-x-6"
      />
    </Layout>
  )
}

export default IndexTemplate
