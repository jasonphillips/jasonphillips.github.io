import { Link } from "gatsby"
import { graphql } from "gatsby"
const React = require('react')

import Layout from "../components/layout"
import { TagQuery } from '../../types/graphql-types'
import "./index.css"

const Fragment = ({ html, cls }: {html: string, cls?: string}) => 
  <div className={cls} dangerouslySetInnerHTML={{__html: html}} />

const IndexPage: React.FC<{ data: TagQuery }> = ({ data: { tags, frags } }) => {
  const fragments = frags.edges.reduce((obj, { node }) => ({ ...obj, [node.fields.tag]: node.html}), {})
  
  return (
    <Layout front={true}>
      <h1>Jason Phillips, PhD</h1>
      <blockquote>
        <Fragment html={fragments.intro} />
      </blockquote>

      <h2>Highlighted Technologies</h2>
      <Fragment cls="technologiesSummary" html={fragments.technologies} />

      <h2 className="frontDivision close">Employment</h2> 

      <h3>Senior Web & Integrations Analyst</h3>
      <div className="c">
        <p><i>2008 - Present</i>, The University of Alabama</p>
      </div>
      <Fragment html={fragments.alabama} />

      <h3>Lead Developer</h3>
      <div className="c">
        <i>2018 - Present</i>, Overlay.ai
      </div>
      <Fragment html={fragments.overlay} />

      <h3>Developer</h3>
      <div className="c">
        <i>2016 - 2018 (freelance / consulting)</i>, Brewery Buddy, LLC
      </div>
      <Fragment html={fragments.brewery} />

      <h2 className="frontDivision">Education</h2>
      <Fragment html={fragments.education} />

      <h2 className="frontDivision">Additional Information & References</h2>
      <Fragment html={fragments.closing} />

    </Layout>
  )
}

export const pageQuery = graphql`
query tag {
  tags: allMarkdownRemark(
    filter: { fields: { kind: { eq: "content" }, subPath: { eq: "technologies" } } }
  ) {
    totalCount
    edges {
      node {
        fields {
          slug
          subPath
        }
        frontmatter {
          tags
          title
          parent
        }
      }
    }
  }
  frags: allMarkdownRemark(filter: {fields: {kind: {eq: "fragment"}}}) {
    edges {
      node {
        html
        fields {
          tag
        }
      }
    }
  }
}
`

export default IndexPage
