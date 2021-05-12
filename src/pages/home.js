import React from 'react'
import NavBar from "./nav"
import {graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import "../styles/home.scss"


export default function home({data}){
  

  const Card = props =>{
    const image = getImage(props.data.file)
    return (
      
     <div classame="card">
        <div className="card-image">
          <GatsbyImage image={image} alt="blog Picture" />
        </div>
        <p className="date"></p>
        <h1>ok</h1>
        <p></p>
        <a href="#top"></a>
     </div>
    )
    

  }
  return (
    <div>
     <NavBar></NavBar>
      <div className="cards">
        <Card data={data}/>
        <Card data={data}/>
        <Card data={data}/>
      </div>
    </div>
  ) 
}



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

