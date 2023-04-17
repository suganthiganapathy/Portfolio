import React from "react";
import  {AiFillGithub} from "react-icons/ai";
import {MdAlternateEmail} from "react-icons/md"
import {AiFillLinkedin} from "react-icons/ai";
import contact from "./footer.module.css";

function Footer(){
    return(
        <div className={contact.container}>
            <a className={contact.footer} href="https://github.com/suganthiganapathy" target="_blank"><AiFillGithub/></a>
            <a className={contact.footer} href="mailto:suganthi1702.kodehode@gmail.com"><MdAlternateEmail/></a>
            <a className={contact.footer} href="https://www.linkedin.com/in/suganthi-ganapathy-44412725/" target="_blank"><AiFillLinkedin/></a>
        </div>
    )
}

export default Footer;