exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      site {
        siteMetadata {
          author {
            positions {
              employee {
                title
                link
                hover
              }
            }
          }
        }
      }
    }
  `)

  const positionsObject = data.site.siteMetadata.author.positions

  const positionsArray = Object.keys(positionsObject).map(
    key => positionsObject[key]
  )

  const sortedPositionsArray = positionsArray.sort((a, b) => {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  })

  actions.createPage({
    path: "/",
    component: require.resolve(`./src/templates/index.js`),
    context: { positions: sortedPositionsArray },
  })
}
