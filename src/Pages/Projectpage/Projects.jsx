import React from "react";
import "./projects.css";
import Parallax from "../Images/project1.png";
import Galaxy from "../Images/Darkgalaxy.png";
import Drumkit from "../Images/drumkit.png";
import Xmas from "../Images/christmas.png";

function ProjectsPage() {
  return (
    <div className="projectContainer" id="projectspage">

      {/* <h1 className="mainTitle">Projects</h1> */}
      <div className="projectCard">
        <div className="imgBox">
          <img src={Parallax} alt="projectimage" className="image"></img>
        </div>
        <div className="title">
          <h3 className="projectTitle">Parallax</h3>
          <h5 className="languages">HTML & CSS</h5>
          <p className="description">
            This is my first project in kodehode.Here I used a parallex effect
            and showed some Indian tourist places.
          </p>

          <div className="links">
            <a
              href="https://github.com/suganthiganapathy/parallaxtask"
              className="weblinks"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://sweet-scone-3c4697.netlify.app/"
              className="weblinks"
              target="_blank"
            >
              Webpage
            </a>
          </div>
        </div>
        <h2 className="protitle">Parallax</h2>
      </div>

      <div className="projectCard">
        <div className="imgBox">
          <img src={Galaxy} alt="projectimage" className="image"></img>
        </div>
        <div className="title">
          <h3 className="projectTitle">DarkGalaxy</h3>
          <h5 className="languages">HTML & CSS</h5>
          <p className="description">
            I got this group project in the month of october.So we decided to
            make scary event in the galaxy. Here I used github to share the
            contact page which I created with the group members.
          </p>

          <div className="links">
            <a
              href="https://github.com/suganthiganapathy/Solar-System"
              target="_blank"
              className="weblinks"
            >
              Github
            </a>
            <a
              href="https://splendid-cat-fd3380.netlify.app/"
              target="_blank"
              className="weblinks"
            >
              Webpage
            </a>
          </div>
        </div>
        <h2 className="protitle">DarkGalaxy</h2>
      </div>

      <div className="projectCard">
        <div className="imgBox">
          <img src={Drumkit} alt="projectimage" className="image"></img>
        </div>
        <div className="title">
          <h3 className="projectTitle">Drumkit</h3>
          <h5 className="languages">HTML, CSS & JS</h5>
          <p className="description">
            This is one of my javascript project. Here I made a keyboard event.
            And click event listner to play the music.
          </p>

          <div className="links">
            <a
              href="https://github.com/suganthiganapathy/drumkit"
              className="weblinks"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://eloquent-pothos-6e22fe.netlify.app/"
              className="weblinks"
              target="_blank"
            >
              weblink
            </a>
          </div>
        </div>
        <h2 className="protitle">Drumkit</h2>
      </div>

      <div className="projectCard">
        <div className="imgBox">
          <img src={Xmas} alt="projectimage" className="image"></img>
        </div>
        <div className="title">
          <h3 className="projectTitle">Chiratmas Wish</h3>
          <h5 className="languages">HTML, CSS & JS</h5>
          <p className="description">
            This Project has been done during christmas. In this project I have
            used localstorage to store the data.
          </p>{" "}
          <div className="links">
            <div className="links">
              <a
                href="https://github.com/suganthiganapathy/christmasProject"
                className="weblinks"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://lovely-meringue-80e476.netlify.app"
                className="weblinks"
                target="_blank"
              >
                Weblink
              </a>
            </div>
          </div>
        </div>
        <h2 className="protitle">Chiratmas Wish</h2>
      </div>
    </div>
  );
}

export default ProjectsPage;
