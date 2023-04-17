import React from "react"
import Navbar from "./Pages/Nav/Navbar"
import HomePage from "./Pages/Home/Homepage"
 import AboutPage from "./Pages/About/AboutPage"
  import ProjectsPage from "./Pages/Projects/Projects"
  import Footer from "./Pages/Footer/Footer"
  //import ScrollToTop from "./Pages/Scroll/scroolTop"
import "./App.css"
function App() {
  return(
    <div className="app">
        <Navbar/>
       <HomePage/> 
        <AboutPage /> 
       <ProjectsPage />
       <Footer />
       {/* <ScrollToTop /> */}
    </div>
  )
  
}

export default App
