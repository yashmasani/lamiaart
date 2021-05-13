import React from 'react'
import NavBar from "./nav"
import {graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import "../styles/home.scss"
import "@fontsource/fira-mono"



export default function home({data}){
  

  const Card = props =>{
    const image = getImage(props.data.markdownRemark.frontmatter.featuredImage)
    return (
      
     <div classame="card">
        <div className="card-image">
          <GatsbyImage image={image} alt="blog Picture" />
        </div>
        <p className="date">{props.data.markdownRemark.frontmatter.date}</p>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p className="excerpt-card" style={{fontFamily:"Fira Mono"}}>{props.data.markdownRemark.excerpt}</p>
        <a href="#top"></a>
     </div>
    )
    

  }
  return (
    <div style={{textAlign:"center"}}>
     <NavBar></NavBar>
      <div className="cards">
        <Card data={data}/>
        <Card data={data}/>
        <Card data={data}/>
      </div>
    </div>
  ) 
}



export const pageQuery = graphql`
query MyQuery {
  markdownRemark {
    frontmatter {
      date
      featuredImage {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      title
    }
    excerpt
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
