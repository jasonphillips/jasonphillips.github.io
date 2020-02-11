import { graphql } from "gatsby"
import { TechPageQuery } from "../../types/graphql-types"
import { Link, navigate } from "gatsby"
import Layout from "../components/layout"
const React = require("react")

const TechnologyTemplate: React.FC<{ data: TechPageQuery }> = ({
  data,
}) => {
  const { markdownRemark, tags } = data 
  if (!markdownRemark || !markdownRemark.frontmatter) return <div />

  const { frontmatter, html } = markdownRemark

  if (frontmatter.parent && typeof(window)!=='undefined') {
    navigate(`/technologies/${frontmatter.parent}`)
    return (
      <div/>
    )
  }

  return (
    <Layout>
      <div className="project-container">
        <div className="project">
          <h1>{frontmatter.title}</h1>
          {tags.nodes.length>0 && <div className="tags-list">See also:{" "}
            {(tags.nodes || []).map(tag => 
              <span key={tag.fields.tag}>
                <Link to={tag.fields.slug}>{tag.frontmatter.title}</Link>  
              </span>
            )}
          </div>}
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
  query techPage ($path: String!, $tags: [String]) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        tags
        competence
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

export default TechnologyTemplate