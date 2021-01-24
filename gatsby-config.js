module.exports = {
  siteMetadata: {
    description: `Personal website of Samuel Pitoňák`,
    siteUrl: `https://samuelpitonak.sk`,
    thesis: {
      link: "http://beautofuel.vps.wbsprt.com",
      text: "Experiment beautofuel",
      duration: "31. 01. 2021 - 14. 03. 2021",
    },
    author: {
      username: "sampittko",
      fullname: "Samuel Pitoňák",
      email: "sampittko@gmail.com",
      socials: {
        twitter: "https://twitter.com/sampittko",
        linkedin: "https://linkedin.com/in/sampittko",
        github: "https://github.com/sampittko",
      },
      positions: {
        student: {
          title: "Computer Science Student",
          link: "https://tuke.sk",
          hover: "Technical University of Košice",
        },
        employee: {
          title: "Software Developer",
          link: "https://senacor.com",
          hover: "Senacor Technologies AG",
        },
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Samuel Pitoňák (@sampittko)`,
        short_name: `Samuel Pitoňák`,
        start_url: `/`,
        background_color: `#F9FAFB`,
        theme_color: `#92400E`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://samuelpitonak.sk",
        sitemap: "https://samuelpitonak.sk/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
