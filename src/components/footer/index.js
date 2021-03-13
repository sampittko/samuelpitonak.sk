import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Socials from "./socials"

const Footer = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            socials {
              twitter
              linkedin
              github
            }
          }
        }
      }
    }
  `)

  const { socials } = data.site.siteMetadata.author

  return (
    <>
      <footer {...props}>
        <Socials
          {...socials}
          className="flex justify-center pt-6 space-x-6 md:justify-start md:pt-8 "
        />
      </footer>
      <div className="absolute bottom-0 left-0 z-0 w-screen bg-gray-50 h-1/3" />
    </>
  )
}

export default Footer
