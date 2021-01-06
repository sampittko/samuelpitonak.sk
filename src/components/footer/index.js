import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Socials from "./socials"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          thesis {
            link
            text
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
    <footer className="text-center md:text-left">
      <a
        href={thesis.link}
        rel="noreferrer"
        className="font-mono font-bold text-amber-800 hover:text-amber-900"
      >
        {thesis.text}
      </a>
      <Socials
        {...socials}
        className="flex justify-center pt-6 space-x-6 md:pt-8 md:order-2"
      />
    </footer>
  )
}

export default Footer
