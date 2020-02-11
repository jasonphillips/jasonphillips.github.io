const React = require('react')
const { Link } = require("gatsby")

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle })=> (
  <header
    style={{
      borderBottom: `1px solid #555`,
      marginBottom: `1.45rem`,
      textAlign: 'right'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.75rem 1.0875rem`,
      }}
    >
      <h1 style={{ marginTop: 0, marginBottom: '-1rem' }}>
        <Link
          to="/"
          style={{
            color: `#555`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
