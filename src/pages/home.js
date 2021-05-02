import React from 'react'
import {Link} from "gatsby"
import "../styles/nav.scss"
import {StaticImage} from "gatsby-plugin-image"
import "@fontsource/fira-mono"
import "@fontsource/laila"

export default function home(){
  return (
    <NavBar></NavBar>
  ) 
}

const NavBar = props => {




  if(typeof window!="undefined" && window.innerWidth > 500){

   return (
      <div className="nav-body">
        <nav>
         <Link to="/Articles" className="nav-link">Articles</Link>
         <Link to="/About" className="nav-link">About</Link>
         <Link to="/home" ><StaticImage src="../images/smallerLogo.png" alt="Logo" layout="fixed" className="nav-logo"></StaticImage></Link>
         <Link to="/Pages" className="nav-link">Pages</Link>
         <Link to="/Poetry" className="nav-link">Poetry</Link>
        </nav>
      </div>
   )
  }else{
    return <div></div>
  }
}
