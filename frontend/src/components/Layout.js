import React from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css"; // Import the CSS file

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
}
