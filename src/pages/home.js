import React from 'react'
import {Link} from "gatsby"
import "../styles/nav.scss"
import {StaticImage} from "gatsby-plugin-image"
import "@fontsource/fira-mono"
import "@fontsource/laila"
import {useState} from "react"

export default function home(){
  return (
    <NavBar></NavBar>
  ) 
}

const NavBar = props => {

  const [menuBar,setMenuBar] = useState(false)


  if(typeof window!="undefined" && window.innerWidth > 800){

   return (
      <div style={{textAlign:"center"}}>
        <nav>
         <Link to="/Articles" className="nav-link">Articles</Link>
         <Link to="/About" className="nav-link">About</Link>
         <Link to="/home" ><StaticImage src="../images/smallerLogo.png" alt="Logo" layout="fixed" className="nav-logo"></StaticImage></Link>
         <Link to="/Pages" className="nav-link">Pages</Link>
         <Link to="/Poetry" className="nav-link">Poetry</Link>
        </nav>
      </div>
   )
  }else if(typeof window!="undefined"){
    
   const menu = ()  => {
     //place menu here
      console.log("yay")
      setMenuBar(!menuBar)     
   }  
   
   return(
      <div>
      <StaticImage src="../images/smallerLogo.png" alt="Logo" layout="fixed" className="nav-logo" onClick={()=>menu()}></StaticImage>
      {menuBar ?
      <nav>
         <Link to="/Articles" className="nav-link">Articles</Link>
         <Link to="/About" className="nav-link">About</Link>
         <Link to="/Pages" className="nav-link">Pages</Link>
         <Link to="/Poetry" className="nav-link">Poetry</Link>
        
      </nav>
      : ""
      }
    
      </div>
    )
  }else{
    return <div></div>
  }
}
