import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">



        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Design
          </h1>

          <p className="text-xs sm:text-sm text-gray-500">
            Interior Design Studio
          </p>
        </div>


        <div className="hidden lg:flex gap-8 text-gray-700 font-medium">

          <Link to="/" className="hover:text-[#550b14]">
            Home
          </Link>

          <Link to="/about" className="hover:text-[#550b14]">
            About
          </Link>

          <Link to="/projects" className="hover:text-[#550b14]">
            Projects
          </Link>

          <Link to="/services" className="hover:text-[#550b14]">
            Services
          </Link>

          <Link to="/contact" className="hover:text-[#550b14]">
            Contact
          </Link>

        </div>


      
   <Link to="/contact" className="hidden sm:block bg-[#550b14] text-white px-5 py-2 rounded-lg"
        > Contact Us</Link>


  
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-gray-800"
        >
          ☰
        </button>


      </div>



      {open && (
        <div className="lg:hidden bg-white shadow-md px-6 py-5 space-y-4">


          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-[#550b14]"
          >
            Home
          </Link>


          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-[#550b14]"
          >
            About
          </Link>


          <Link
            to="/projects"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-[#550b14]"
          >
            Projects
          </Link>


          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-[#550b14]"
          >
            Services
          </Link>


          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-[#550b14]"
          >
            Contact
          </Link>


        </div>
      )}

    </nav>
  );
};