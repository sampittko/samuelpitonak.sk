import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Socials from "./socials"
import Thesis from "./thesis"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          thesis {
            link
            text
            duration
          }
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
  const { thesis } = data.site.siteMetadata

  return (
    <>
      <footer className="z-10 text-center md:text-left">
        <Thesis {...thesis} />
        <Socials
          {...socials}
          className="flex justify-center pt-6 space-x-6 sm:justify-start md:pt-8"
        />
      </footer>
      <div className="absolute bottom-0 left-0 z-0 w-screen bg-gray-50 h-1/3" />
    </>
  )
}

export default Footer
