import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
      textDecoration: 'no-underline'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center',
        textDecoration: 'no-underline'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            textAlign: 'center',
            textDecoration: 'no-underline' 
          }}
        >
          {siteTitle}</Link></h1>
        <p style={{
          color: 'white',
          backgroundColor: 'darkgrey',
          borderRadius: '100px',
          fontSize: '1.3rem',  
          padding: '1.45rem 1.0875rem',
          textDecoration: 'no-underline'}}>Trace Music back to its roots! 
          Choose your favourite album, artist or year in music to start
          </p>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
