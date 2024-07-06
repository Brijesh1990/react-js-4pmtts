import React from "react";
import ReactDOM from 'react-dom/client'
// import Services from "./Services";
// import About from "./About";
// import Contact from "./Contact";
import Display from "./GoogleMapView";
import './style.css'
const root=ReactDOM.createRoot(document.getElementById("demo"))
root.render(

    <>
      {/* <h1>This is examples of react js demo app</h1>
      <p>Hi i am just learning to load html elements inside of react js</p>
      <Services />
      <About />
      <Contact /> */}

      <Display />
    </>


)