import React from "react";
import nav from "./navbar.module.css"
function Navbar(){
    return(
        
        <div className={nav.container}>
        <h1 className={nav.logo}>SUGI</h1>
        
        <nav>
        <ul className={nav.navlinks}>
                <li><a href="#homepage" className={nav.links}>Home</a></li>
                <li><a href="#aboutpage" className={nav.links}>About Me</a></li>
                <li><a href="#projectspage" className={nav.links}>Projects</a></li>
                {/* <li><a href="#contactpage" className={navbarstyle.anchor}>Contact</a></li> */}
              </ul>
              </nav>
              </div>
        
    )
}
export default Navbar