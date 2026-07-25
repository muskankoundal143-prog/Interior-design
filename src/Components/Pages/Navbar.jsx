import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
       Design
        </h1>
        <p className="text-sm text-gray-500">
  Interior Design Studio
        </p>
      </div>


      <div className="flex gap-8 text-gray-700 font-medium">
        <Link 
          to="/" 
          className="hover:text-orange-500 transition"
        >
          Home
        </Link>

        <Link 
          to="/about" 
          className="hover:text-orange-500 transition"
        >
          About
        </Link>

        <Link 
          to="/projects" 
          className="hover:text-orange-500 transition"
        >
          Projects
        </Link>

        <Link 
          to="/services" 
          className="hover:text-orange-500 transition"
        >
          Services
        </Link>

        <Link 
          to="/contact" 
          className="hover:text-orange-500 transition"
        >
          Contact
        </Link>
      </div>

      <Link 
        to="/contact"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
      >Contact US
      </Link>

    </nav>



  );

};
