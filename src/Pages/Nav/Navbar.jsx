import React from "react";
import nav from "./navbar.module.css"
import Logo from "../Images/logoicon.png"
import {Link} from "react-scroll"
function Navbar(){
    return(
        
        <div className={nav.container}>
        {/* <h1 className={nav.logo}>SUGI</h1> */}

        <img src={Logo} className={nav.logo}/>

        
        <nav>
        <ul className={nav.navlinks}>
                <li><Link to="homepage" spy={true} smooth={true} offset={-100} duration={500}  className={nav.links}>Home</Link></li>
                <li><Link to="aboutpage" spy={true} smooth={true} offset={-20} duration={500} className={nav.links}>About Me</Link></li>
                <li><Link to="projectspage" spy={true} smooth={true} offset={-50} duration={500} className={nav.links}>Projects</Link></li>
                {/* <li><a href="#contactpage" className={navbarstyle.anchor}>Contact</a></li> */}
              </ul>
              </nav>
              </div>
        
    )
}
export default Navbar