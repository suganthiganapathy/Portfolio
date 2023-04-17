import React from "react";
import "./about.css";
import html from "../Images/html.png";
import css from "../Images/css.svg";
import js from "../Images/js.png";
import react from "../Images/react.png";
import figma from "../Images/figma.png";
import sql from "../Images/sql.png";
import github from "../Images/github.png";
function AboutPage() {
  return (
    <section className="aboutContainer" id="aboutpage">
      <div className="intro">
        {/* <h3> ABOUT ME</h3> */}
      <p>
        I am 34 years old, studying frontend development in order to get IT
        releated Job. I like coding which is a creative work and it gives life
        to my ideas.
        <br />
        In my spare time, I work as a frivillig to teach my mother tounge to the
        kids.
        <br />
        My dream is to become a fullstack developer where I can participate in
        large groups which help to grow my learning skills. I always like to do
        new things.<br/> Click here to download my
        <a
          href="https://docs.google.com/document/d/15U7GvuUIwCfkIG1A0AqZoNxoaeG_rI73/edit"
          className="download"
        >
          CV
        </a>
      </p>
      <p className="heading">KNOWN SKILLS</p>
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
      <span className="tooltiptxt">REACT</span>
      </div>
      <div className="tooltip">
      <img src={sql} className="icons"></img>
      <span className="tooltiptxt">SQL</span>
      </div>
      <div className="tooltip">
      <img src={github} className="icons"></img>
      <span className="tooltiptxt">GITHUB</span>
      </div>
      <div className="tooltip">
      <img src={figma} className="icons"></img>
      <span className="tooltiptxt">FIGMA</span>
      </div>

      </div>       </div>
    </section>
  );
}
export default AboutPage;
