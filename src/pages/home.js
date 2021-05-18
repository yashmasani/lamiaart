import React from 'react'
import NavBar from "./nav"
import {graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import "../styles/home.scss"
import "@fontsource/fira-mono"



export default function home({data}){
  
  

  const Card = props =>{
    const image = getImage(props.node.frontmatter.featuredImage)
    return (
      
     <div className="card" key={props.node.frontmatter.featuredImage.childImageSharp.id}>
        <div className="card-image">
          <GatsbyImage image={image} alt="blog Picture" />
        </div>
        <p className="date">{props.node.frontmatter.date}</p>
        <h1>{props.node.frontmatter.title}</h1>
        <p className="excerpt-card" style={{fontFamily:"Fira Mono"}}>{props.node.excerpt}</p>
     </div>
    )
    

  }
  return (
    <div style={{textAlign:"center"}}>
     <NavBar></NavBar>
      <div className="cards">
      {data.allMarkdownRemark.nodes.map(node=> <Card node={node} />)}
      </div>
    </div>
  ) 
}



export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark(limit: 3) {                                                                 
    nodes {
      frontmatter {
        date
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
            id
          }
        }
      }
      excerpt
    }
  }
}
`

/**
export const myQuery = graphql`
 query myQuery{
   file(
     absolutePath: {eq: "/Users/yashmasani/project/mernNew/NotMyBlog/lamiaart/src/images/new.jpeg"}
   ) {
     childImageSharp {
       gatsbyImageData(layout: CONSTRAINED)
       id
     }
   }
 }
`
**/
