import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import "../styles/index.scss"
import "@fontsource/italianno"
import {Link} from "gatsby"

// markup
export default function IndexPage(){
  return(
    <div className="index">
    <StaticImage src="../images/ladyLongHair.jpg" alt="long hair Lady" placeholder="blurred" className="lady"></StaticImage>
    <Link to="/home"><StaticImage src="../images/logo.png" alt="lamiaarti" placeholder="blurred" className="logo" style={{position:"absolute"}}></StaticImage></Link>
    <p className="font-index">Unfold My Story...</p>
   </div>
  )
}
