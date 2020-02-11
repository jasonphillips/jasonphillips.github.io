import { graphql } from "gatsby"
import { ProjectPageQuery } from "../../types/graphql-types"
import { Link } from "gatsby"
import Layout from "../components/layout"
const React = require("react")

const ProjectTemplate: React.FC<{ data: ProjectPageQuery }> = ({
  data, 
}) => {
  const { markdownRemark, tags } = data 
  if (!markdownRemark || !markdownRemark.frontmatter) return <div />

  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="project-container">
        <div className="project">
          <h1>{frontmatter.title}</h1>
          <div className="tags-list">See also:{" "}
            {(tags.nodes || []).map(tag => 
              <span key={tag.fields.tag}>
                <Link to={tag.fields.slug}>{tag.frontmatter.title}</Link>  
              </span>
            )}
          </div>
          <div
            className="project-content"
            dangerouslySetInnerHTML={{ __html: html || '' }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query projectPage ($path: String!, $tags: [String]) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        tags
        parent
      }
    }
    tags: allMarkdownRemark(filter: {
      fields: { tag: { in: $tags } }
    }) {
    	nodes {
        fields {
          slug
          tag
        }
        frontmatter {
          title
        }
      }
    }
  }
`

export default ProjectTemplate