import React from "react";
import NavBar from "./NavBar";  // Note the relative path!
import "./Dashboard.css"; // Import the CSS file

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <div className="content">{children}</div>
    </div>
  );
}
