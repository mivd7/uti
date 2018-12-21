import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from '../components/Header'


export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (
      <div >
          <Header siteTitle={data.site.siteMetadata.title} />
      </div>
    )}
  />
)