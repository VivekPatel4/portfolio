import React from "react";
import './App.css';
import Aside from "./pages/aside";
import Nav from "./pages/nav";
import About from "./pages/about";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Resume from "./pages/resume";
import Protfolio from "./pages/protfolio";
import Contact from "./pages/contact";

function App() {
  return (
    <main>
      <Aside/> 
      <div className="main-content">
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/portfolio" element={<Protfolio/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
