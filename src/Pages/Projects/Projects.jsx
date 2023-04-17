import React from "react";
import "./projects.css";
import parallax from "../Images/project1.png";
import drumkit from "../Images/drumkit.png";
import galaxy from "../Images/Darkgalaxy.png";
import xmas from "../Images/christmas.png"
function ProjectsPage() {
  return (
    <section className="projectsContainer" id="projectspage">
      <h1 className="title">PROJECTS</h1>
      <div className="container">
        <div className="card">
          <div className="imgbox">
            <img src={parallax} alt="cardimage" className="cardImage"></img>
          </div>
          <div className="overlaycontent">
            <h3>Parallax</h3>
            <h5>HTML & CSS</h5>
            <p className="description">
              This is my first project in kodehode.Here i used a parallex effect and showed some Indian tourist places.
            </p>
            <a href="https://github.com/suganthiganapathy/parallaxtask" className="weblinks" target="_blank">Github</a>
            <a href="https://sweet-scone-3c4697.netlify.app/" className="weblinks" target="_blank">weblink</a>
          </div>
          
        </div>

        <div className="card">
          <div className="imgbox">
            <img src={galaxy} alt="cardimage" className="cardImage"></img>
          </div>
          <div className="overlaycontent">
          <h3>Galaxy</h3>
            <h5>HTML & CSS</h5>
            <p className="description">
              I got this group project in the month of october.So we decided to make scary event in the galaxy. Here i used github to share the contact page which i created with the group members.
                          </p>
                          <a href="https://github.com/suganthiganapathy/Solar-System" className="weblinks" target="_blank">Github</a>
                          <a href="https://splendid-cat-fd3380.netlify.app/" className="weblinks" target="_blank">weblink</a>
        </div>
        
        </div>

        <div className="card">
          <div className="imgbox">
            <img src={drumkit} alt="cardimage" className="cardImage"></img>
          </div>
          <div className="overlaycontent">
          <h3>DRUMKIT</h3>
            <h5>HTML, CSS &JS</h5>
            <p className="description">
              This is my one of the javascript project. Here i made a keyboard event. And click event listner to play the music.                          </p>
              <a href="https://github.com/suganthiganapathy/drumkit" className="weblinks" target="_blank">Github</a>
              <a href="https://eloquent-pothos-6e22fe.netlify.app/" className="weblinks" target="_blank">weblink</a>
          </div>
          
        </div>

        <div className="card">
          <div className="imgbox">
            <img src={xmas} alt="cardimage" className="cardImage"></img>
          </div>
          <div className="overlaycontent">
            <h1>DRUMKIT</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
              consequatur. Quis ullam excepturi aliquid saepe voluptatem!
              Aspernatur aut porro earum.
            </p>
            <a href="https://github.com/suganthiganapathy/christmasProject" className="weblinks" target="_blank">Github</a>
            <a href="https://lovely-meringue-80e476.netlify.app" className="weblinks" target="_blank">Weblink</a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
export default ProjectsPage;
