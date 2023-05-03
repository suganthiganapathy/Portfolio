import React from "react"
//import Navbar from "./Pages/Nav/Navbar"
import Navbar from "./Pages/Navbar/Nav"
import HomePage from "./Pages/Home/Homepage"
 import AboutPage from "./Pages/About/AboutPage"
 // import ProjectsPage from "./Pages/Projects/Projects"
 import ProjectsPage from "./Pages/Projectpage/Projects"
  import Footer from "./Pages/Footer/Footer"
  //import Projects from "./Pages/Projectpage/Projectpage"
  import ScrollToTop from "./Pages/Scroll/scroolTop"
  //import ScrollToTop from "react-scroll-to-top";
  import './index.css'
  
import "./App.css"
function App() {
  return(
    <div className="app">
        <Navbar/>
        <HomePage/> 
        <AboutPage /> 
        <ProjectsPage /> 
        <Footer /> 
        <ScrollToTop className="scroll" />  
    {/* <Projects />  */}
    </div>
  )
  
}

export default App
