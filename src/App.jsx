import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import { Navbar } from "./Components/Pages/Navbar";
import Project from "./Components/Pages/Project";
import Service from "./Components/Pages/Service";
import Contact from "./Components/Pages/Contact";

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
      </Routes>
    </>
  );
};

export default App;
