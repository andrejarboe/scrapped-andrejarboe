import React from "react";
import Layout from "../components/layout";

export default function IndexPage({ data }) {

  return (

  <Layout>
    <div className="container">
      <div className="row">
          {data.markdownRemark.frontmatter.headshots.map(image => {
            return (
              <div className="col s12 m4">
                <img key={image.path} src={image.path} alt="" />
              </div>
            )
          })}



      </div>
    </div>
  </Layout>
  )
}

export const query = graphql`
  query indexQuery {
    markdownRemark(frontmatter: { layout: { eq: "home" } }) {
      frontmatter {
        layout
        headshots {
          path
        }
      }
    }
  }
`
