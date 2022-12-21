import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-6 flex flex-wrap justify-center">
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#333", color: "#ddd" } : {}
        }
        className="py-2 px-4 m-2 border-2 border-gray-700 rounded-lg"
        to="/projects"
      >
        Projects
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#333", color: "#ddd" } : {}
        }
        className="py-2 px-4 m-2 border-2 border-gray-700 rounded-lg"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#333", color: "#ddd" } : {}
        }
        className="py-2 px-4 m-2 border-2 border-gray-700 rounded-lg"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#333", color: "#ddd" } : {}
        }
        className="py-2 px-4 m-2 border-2 border-gray-700 rounded-lg"
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#333", color: "#ddd" } : {}
        }
        className="py-2 px-4 m-2 border-2 border-gray-700 rounded-lg"
        to="/certificates"
      >
        Certificates
      </NavLink>
    </nav>
  );
};

export default Navbar;
