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
      <div className="absolute p-10 md:p-20 lg:p-24 top-0 left-0 flex items-center space-x-4 lg:space-x-6">
        <Img
          fluid={fluid}
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full"
          alt={author.fullname}
        />
        <div className="leading-none sm:leading-1 font-medium text-xs sm:text-md md:text-lg leading-6 space-y-1">
          <h3 className="text-gray-900">
            {author.fullname}
            <Link
              target="_blank"
              className="ml-2 text-sm font-normal text-gray-100 hover:bg-amber-800 bg-gray-900 rounded-full px-3 py-1 inline-block absolute transition ease-in-out duration-150"
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
                  className="hover:text-amber-900"
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
                  {", "}
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
