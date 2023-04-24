import React, { useState } from "react";
import "./nav.css"
import logoicon from "../Images/logoicon.png"
import {FaBars,FaTimes} from "react-icons/fa";
import {Link} from "react-scroll"

const Navbar = () => {
const [toggle, setToggle]=useState(false);

const handleToggle=()=>{
  setToggle(!toggle);
}

  return (
    <>
      <nav className={toggle ?'navbar expanded':'navbar'}>
            <img className="iconImage" src={logoicon}/>
            <div className="toggle-icon" onClick={handleToggle}>
          {toggle?<FaTimes size={28}/>:<FaBars size={28}/>}
        </div>
              <ul className="navitems">
                <li><Link to="homepage" spy={true} smooth={true} offset={50} duration={500} className="anchor">Home</Link></li>
                <li><Link to="aboutpage" spy={true} smooth={true} offset={50} duration={500} className="anchor">About Me</Link></li>
                <li><Link to="projectspage" spy={true} smooth={true} offset={50} duration={500} className="anchor">Projects</Link></li>
                {/* <li><a href="#contactpage" className={navbarstyle.anchor}>Contact</a></li> */}
              </ul>
             </nav>
     
    
</>
  );
}
export default Navbar;
