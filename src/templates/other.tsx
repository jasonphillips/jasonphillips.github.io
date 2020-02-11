import { graphql } from "gatsby"
import { OtherPageQuery } from "../../types/graphql-types"
import Layout from "../components/layout"
const React = require("react")

const OtherTemplate: React.FC<{ data: OtherPageQuery }> = ({
  data, 
}) => {
  const { markdownRemark } = data 
  if (!markdownRemark || !markdownRemark.frontmatter) return <div />

  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="project-container">
        <div className="project">
          <h1>{frontmatter.title}</h1>
          <div>
            {(frontmatter.tags || []).map(tag => 
              <span key={tag || ''}>{tag}</span>  
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
  query otherPage ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`

export default OtherTemplate