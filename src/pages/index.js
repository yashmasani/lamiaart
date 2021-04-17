import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import "../styles/index.scss"
import {Link} from "gatsby"
import "@fontsource/playfair-display-sc";
// markup
export default function IndexPage(){
  return(
    <div className="index">
    <p className="font-index">Unfold My Story...</p>
    <StaticImage src="../images/new.jpeg" alt="long hair Lady" placeholder="blurred" className="lady"></StaticImage>
    <Link to="/home"><StaticImage src="../images/logo.png" alt="lamiaarti" placeholder="blurred" className="logo" style={{position:"absolute"}}></StaticImage></Link>
   </div>
  )
}
