const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// add slugs 
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const { fileAbsolutePath } = node
    const basePath = path.resolve(`src/content`)
    const slug = fileAbsolutePath
      .slice(basePath.length)
      .split('.').slice(0,-1).join('.')
    const subPath = slug.split('/').slice(-2)[0]
    const tag = slug.split('/').slice(-1)[0]

    createNodeField({
      node,
      name: `kind`,
      value: node.fileAbsolutePath.indexOf('/content/')>-1 ? 'content' : 'fragment',
    })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `tag`,
      value: tag,
    })
    createNodeField({
      node,
      name: 'subPath',
      value: subPath,
    })
  }
}

const templates = {
  projects: path.resolve(`src/templates/project.tsx`),
  technologies: path.resolve(`src/templates/technology.tsx`),
  other: path.resolve(`src/templates/other.tsx`),
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(filter: {fields: {kind: {eq: "content"}}}) {
        edges {
          node {
            fields {
              slug
              tag
              subPath
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { frontmatter, fields } = node
    createPage({
      path: fields.slug,
      component: templates[fields.subPath],
      context: { tags: frontmatter.tags || [] }, 
    })
  })
}
