import React, { useState } from "react";
import "./nav.css"
import logoicon from "../Images/logoicon.png"
import {FaBars} from "react-icons/fa";
import {Link} from "react-scroll"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const handleLinkClick = () => {
    setToggle(false);
  }

  return (
    <>
      <nav className={toggle ? 'navbar expanded' : 'navbar'}>
        <img className="iconImage" src={logoicon} alt="logo" />
        <div className="toggle-icon" onClick={handleToggle}>
          <FaBars size={28} />
        </div>
        <ul className="navitems">
          <li>
            <Link to="homepage" spy={true} smooth={true} offset={50} duration={500} className="anchor" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="aboutpage" spy={true} smooth={true} offset={50} duration={500} className="anchor" onClick={handleLinkClick}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="projectspage" spy={true} smooth={true} offset={50} duration={500} className="anchor" onClick={handleLinkClick}>
              Projects
            </Link>
          </li>
          {/* <li><a href="#contactpage" className={navbarstyle.anchor}>Contact</a></li> */}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
