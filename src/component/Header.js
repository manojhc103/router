// src/Header.js
import React from "react";
import {  NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./Header.css"; // Optional for styling

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-warning" : "text-white"} text-decoration-none`
              }
            >
              Home
            </NavLink>
          </li>
          <li >
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-warning" : "text-white"} text-decoration-none`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                 `${isActive ? "text-warning" : "text-white"} text-decoration-none`
                }
              >
                Contact Us
                </NavLink>
            </li>
          <li>
            
          <NavLink
              to="/login"
              className={({ isActive }) =>
               `${isActive ? "text-warning" : "text-white"} text-decoration-none`
              }
            >
              Login
              </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
