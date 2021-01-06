import { graphql, Link, useStaticQuery } from "gatsby"
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
          }
        }
      }
      placeholderImage: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { positions } = pageContext
  const { fluid } = data.placeholderImage.childImageSharp
  const { author } = data.site.siteMetadata

  return (
    <Layout>
      <SEO />
      <div className="space-x-4 md:flex md:items-center md:justify-center lg:space-x-6">
        <Img
          fluid={fluid}
          className="w-24 h-24 mx-auto my-5 rounded-full md:m-0 md:w-16 md:inline-block md:h-16 lg:w-20 lg:h-20"
          alt={author.fullname}
        />
        <div className="space-y-1 font-medium leading-6 md:inline-block md:text-lg">
          <h3 className="text-center text-gray-900 md:text-left">
            {author.fullname}
            <Link
              target="_blank"
              className="inline-block px-3 py-1 ml-2 text-sm font-normal text-gray-100 transition duration-150 ease-in-out bg-gray-900 rounded-full hover:bg-amber-800"
              to={`https://google.com/search?q=${author.username}`}
              title="Find me on the Internet"
            >
              @{author.username}
            </Link>
          </h3>
          <p className="text-amber-800">
            {positions.map((position, i) => {
              const LinkComponent = () => (
                <Link
                  to={position.link}
                  target="_blank"
                  className="block text-center md:inline hover:text-amber-900"
                  title={position.hover}
                >
                  {position.title}
                </Link>
              )

              if (i === positions.length - 1) {
                return <LinkComponent />
              }

              return (
                <>
                  <LinkComponent />
                  <span className="hidden md:inline">{", "}</span>
                </>
              )
            })}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexTemplate
