import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Logo</div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
