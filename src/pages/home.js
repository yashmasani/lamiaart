import React,{useState} from 'react'
import NavBar from "./nav"
import {graphql} from "gatsby"
import {StaticImage,GatsbyImage, getImage} from "gatsby-plugin-image"
import "../styles/home.scss"
import "@fontsource/poiret-one"

export default function Home({data}){
  
  const [clickedImage,setClickedImage] = useState("")
  
  const [animationTime, setAnimationTime] = useState(1)
    
  const zoom = (image) => {
    if (!clickedImage){
      setClickedImage(image)
    }else{
      setClickedImage("")
    }

  }


  const Card = props =>{
    const image = getImage(props.node.frontmatter.featuredImage)

    console.log(props.animationTime)
    return (
      
     <div className="card" key={props.node.frontmatter.featuredImage.childImageSharp.id} style={{animationDuration:`${props.animationTime}s`}}>
        <div className="card-image" onClick={()=>props.zoom(image)}>
            <GatsbyImage image={image} alt="blog Picture" className=".image"/>
        </div>
        <h2 style={{margin:"10px",fontWeight:"Normal"}}>{props.node.frontmatter.title}</h2>
     
        <p className="excerpt-card">{props.node.excerpt}</p>

        <p className="date">{props.node.frontmatter.date}</p>
     
     </div>
    )
    

  }
  return (
  <div style={{textAlign:"center"}}>
   {!clickedImage ?
    <div>
      <NavBar/>
      <div className="cards">
      {data.allMarkdownRemark.nodes.map((node,i)=><Card node={node} zoom={zoom} animationTime={animationTime+i*4}/>)}
      </div> 
     </div>
      :
    <div onClick={()=>zoom("")}>
      <StaticImage src="../images/back-button.png" height={80} layout="constrained" className="back"/>
      <GatsbyImage image={clickedImage} alt="whole image" className="whole-img"/>
    </div>
   }
   </div>
  ) 
}



export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark(limit: 10) {               
    nodes {
      frontmatter {
        date
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, aspectRatio: 0.9)
            id
          }
          relativePath
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
