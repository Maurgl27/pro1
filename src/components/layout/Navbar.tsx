import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Logo</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:text-gray-300 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
