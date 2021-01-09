import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

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
  const { fluid } = data.photo.childImageSharp
  const { author } = data.site.siteMetadata

  return (
    <Layout>
      <SEO positions={positions} />
      <div className="md:space-x-4 md:flex md:items-center md:justify-center lg:space-x-6">
        <Img
          fluid={fluid}
          className="w-24 h-24 mx-auto mb-5 border-4 border-gray-300 rounded-full md:m-0 md:w-20 md:inline-block md:h-20 lg:w-32 lg:h-32"
          alt={author.fullname}
        />
        <div className="space-y-1 font-medium leading-6 md:inline-block md:text-lg lg:space-y-3 lg:text-2xl">
          <h3 className="text-center text-gray-800 md:text-left">
            <a
              href={`mailto:${author.email}`}
              title="Send me an e-mail"
              className="hover:text-amber-800"
            >
              {author.fullname}
            </a>
            <a
              className="inline-block px-3 py-1 ml-2 text-sm font-normal transition duration-150 ease-in-out bg-gray-800 rounded-full lg:text-lg text-gray-50 hover:bg-amber-800"
              href={`https://google.com/search?q=${author.username}`}
              title="Find me on the Internet"
              rel="noreferrer"
            >
              @{author.username}
            </a>
          </h3>
          <p className="text-amber-800">
            {positions.map((position, i) => {
              const LinkComponent = () => (
                <a
                  href={position.link}
                  className="block py-1 text-center md:pb-0 md:inline hover:text-amber-900"
                  title={position.hover}
                  rel="noreferrer"
                >
                  {position.title}
                </a>
              )

              if (i === positions.length - 1) {
                return <LinkComponent key={`link-${i}`} />
              }

              return (
                <span key={`link-${i}`}>
                  <LinkComponent />
                  <span className="hidden md:inline">{", "}</span>
                </span>
              )
            })}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexTemplate
