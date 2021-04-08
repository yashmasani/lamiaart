import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import "../styles/index.scss"
import "@fontsource/alegreya-sans"

// markup
export default function IndexPage(){
  return(
    <div className="index">
    <p>Unfold My Story</p>
    <StaticImage src="../images/ladyLongHair.jpg" alt="long hair Lady" placeholder="blurred" className="lady"></StaticImage>
    <StaticImage src="../images/Circle_-_black_simple.svg" alt="lamiaarti" placeholder="blurred" className="logo"></StaticImage>
   </div>
  )
}
