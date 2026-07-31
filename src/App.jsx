import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import { Navbar } from "./Components/Pages/Navbar";
import Project from "./Components/Pages/Project";
import Service from "./Components/Pages/Service";
import Contact from "./Components/Pages/Contact";
import Explore from "./Components/Pages/Explore design";
import Learn from "./Components/Pages/Learn";
import Discover from "./Components/Pages/Discover";
import Get from "./Components/Pages/Get start";
import Admin from "./Components/Pages/Admin";
import Enter from "./Components/Pages/Enter";

const App = () => {
  return (
    <>
<Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />}/>
        <Route path="/services" element={<Service />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/explore" element={< Explore/>} />
        <Route path="/Learn" element={<Learn />} />
        <Route path="/Discover" element={<Discover />} />
        <Route path="/get" element={<Get />} /> 
        <Route path="/admin" element={<Admin />} />
        <Route path="/enter" element={<Enter />}/>
      </Routes>
    </>
  );
};

export default App;
