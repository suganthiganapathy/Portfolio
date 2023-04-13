import React from "react"
import Navbar from "./Pages/Nav/Navbar"
import HomePage from "./Pages/Home/Homepage"
 import AboutPage from "./Pages/About/AboutPage"
// import ProjectsPage from "./Pages/Projects/Projects"
import "./App.css"
function App() {
  return(
    <div className="app">
    <Navbar/>
       <HomePage/> 
        <AboutPage /> 
    {/* <ProjectsPage /> */}
    </div>
  )
  
}

export default App
