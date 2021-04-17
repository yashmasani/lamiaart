import React from 'react'
import {Link} from "gatsby"
import "../styles/nav.scss"
import {StaticImage} from "gatsby-plugin-image"

export default function home(){
  return (
    <NavBar></NavBar>
  ) 
}

const NavBar = props => {

  
  if(window.innerWidth > 500){

   return (
      <nav>
        <Link to="/Articles">Articles</Link>
        <Link to="/About">About</Link>
        <StaticImage src="../images/smallerLogo.png" alt="Logo"></StaticImage>
        <Link to="/Pages">Pages</Link>
        <Link to="/Poetry">Poetry</Link>
      </nav>
   )
  }
}
