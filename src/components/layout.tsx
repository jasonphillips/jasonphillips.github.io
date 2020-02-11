/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

const React = require('react')
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"
import Obfuscate from "react-obfuscate";
import Header from "./header"
import "./layout.css"

const Layout: React.FC<{front?:boolean}> = ({ children, front }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {!front && <Header siteTitle={data.site.siteMetadata.title} />}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main className="max-w-screen-md">{children}</main>
        <footer style={{ marginTop: '1em', opacity: '0.6' }}>
          <hr/>

          <Obfuscate style={{ display: "inline-block" }} email="jason.surname.phillips@gmail.com"/>
        </footer>
      </div>
    </>
  )
}

export default Layout
