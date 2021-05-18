import React,{useState} from "react"
import {Link} from "gatsby"
import "../styles/nav.scss"
import {StaticImage} from "gatsby-plugin-image"
import "@fontsource/fira-mono"
import "@fontsource/laila"


export default function NavBar(props){
 
  const [menuBar,setMenuBar] = useState(false)
  const [logoClicked,setLogoClicked] = useState(false)

  if(typeof window!="undefined" && window.innerWidth > 800){

   return (
      <div style={{textAlign:"center"}}>
        <nav>
         <Link to="/Articles" className="nav-link">Articles</Link>
         <Link to="/About" className="nav-link">About</Link>
         <Link to="/home" activeClassName="active"><StaticImage src="../images/smallerLogo.png" alt="Logo" layout="fixed" className="nav-logo"></StaticImage></Link>
         <Link to="/Pages" className="nav-link">Pages</Link>
         <Link to="/Poetry" className="nav-link">Poetry</Link>
        </nav>
      </div>
   )
  }else if(typeof window!="undefined"){
    
   const menu = ()  => {
     //place menu here
      console.log("yay")
      setLogoClicked(!logoClicked)
      setMenuBar(!menuBar)     
   }  
   
   return(
      <div style={{textAlign:"center"}}>
      <StaticImage src="../images/smallerLogo.png" alt="Logo" layout="fixed" className={logoClicked ? "nav-logo fill-click" : "nav-logo"}  onClick={()=>menu()}></StaticImage>
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
