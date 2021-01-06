module.exports = {
  siteMetadata: {
    title: `Samuel Pitoňák`,
    description: `Personal website of Samuel Pitoňák`,
    author: {
      username: "sampittko",
      fullname: "Samuel Pitoňák",
      email: "sampittko@gmail.com",
      socials: {
        twitter: "https://twitter.com/sampittko",
        linkedin: "https://linkedin.com/in/sampittko",
        github: "http://github.com/sampittko",
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
