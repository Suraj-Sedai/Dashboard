import React from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css"; // Import the CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-data"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add Data
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/view-all"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            View All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
