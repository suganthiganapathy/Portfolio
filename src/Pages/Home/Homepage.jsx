import React from "react";
import home from "./homepage.module.css";
import Profile from "../Images/prof.png";
function HomePage() {
  return (
    <section className={home.sectionOne} id="homepage">
      <div className={home.container}>
        <h1 className={home.greetings}>Hi I'm</h1>
        <h1 className={home.firstname}>Suganthi</h1>
        <h1 className={home.secondname}>Ganapathy</h1>
        <h3 className={home.designation}>frontend student</h3>
      </div>
      <img src={Profile} alt="backgroungImage" className={home.profilepic} />
    </section>
  );
}
export default HomePage;
