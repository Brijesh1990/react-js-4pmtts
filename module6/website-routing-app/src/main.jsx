import React from "react";
import ReactDOM from 'react-dom/client'
import Layout from "./Layout";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './assets/css/style.css'
const root=ReactDOM.createRoot(document.getElementById("demo-app"));
root.render(
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/our-services" element={<Services />} />
            <Route path="/our-gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Router>
    </>
)