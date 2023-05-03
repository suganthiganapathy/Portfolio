import React from "react";
import "./about.css";
import html from "../Images/html.png";
import css from "../Images/css.svg";
import js from "../Images/js.png";
import react from "../Images/react.png";
import figma from "../Images/figma.png";
import sql from "../Images/sql.png";
import github from "../Images/github.png";
import nodejs from "../Images/nodejs.png";
function AboutPage() {
  return (
    <section className="aboutContainer" id="aboutpage">
      {/* <h2 className="about"> ABOUT ME</h2> */}
      <div className="intro">
        <h3 className="about"> ABOUT ME</h3>
        <p>
          I am a passionate individual, 34 years old and currently
          studying frontend development with the goal of obtaining a job in the
          IT industry. I find coding to be a creative outlet that brings my
          ideas to life, and I thoroughly enjoy the process. <br/>In my free time, I
          volunteer as a teacher to help kids learn my mother tongue. It's
          fulfilling to share my knowledge and contribute to the community in
          this way.<br/> My dream is to become a full-stack developer, as I thrive in
          collaborative environments and enjoy being part of a larger team. I am
          always eager to learn and try new things, and I believe that
          continuous growth is key to personal and professional development.
          <span>
           <br/> Please feel free to download my CV by 
            <a
              href="https://drive.google.com/file/d/1p4nF5j33rgGs7pFsvQZmwL46YpcJT8sD/view?usp=sharing"
              className="download" target="_blank"
            >clicking here
             </a>
          </span>
        </p>
        <p className="heading">SKILLS</p>
        <div className="skills">
          {/* <p>SKILLS</p> */}
          <div className="tooltip">
            <img src={html} className="icons"></img>
            <span className="tooltiptxt">HTML</span>
          </div>
          <div className="tooltip">
            <img src={css} className="icons"></img>
            <span className="tooltiptxt">CSS</span>
          </div>
          <div className="tooltip">
            <img src={js} className="icons"></img>
            <span className="tooltiptxt">JAVASCRIPT</span>
          </div>
          <div className="tooltip">
            <img src={react} className="icons"></img>
            <span className="tooltiptxt">REACTJS</span>
          </div>
          <div className="tooltip">
            <img src={sql} className="icons"></img>
            <span className="tooltiptxt">SQL</span>
          </div>
          <div className="tooltip">
            <img src={nodejs} className="icons"></img>
            <span className="tooltiptxt">NODEJS</span>
          </div>
          <div className="tooltip">
            <img src={github} className="icons"></img>
            <span className="tooltiptxt">GITHUB</span>
          </div>
          <div className="tooltip">
            <img src={figma} className="icons"></img>
            <span className="tooltiptxt">FIGMA</span>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
export default AboutPage;
