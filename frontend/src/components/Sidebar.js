import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Plus, Grid, Settings, LogOut } from "lucide-react";
import "./Dashboard.css"; // Import the CSS file

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="nav-links">
        <SidebarButton Icon={Home} text=" Home" to="/" />
        <SidebarButton Icon={Plus} text=" Add Data" to="/add-data" />
        <SidebarButton Icon={Grid} text=" View All" to="/view-all" />
        <SidebarButton Icon={Settings} text=" Settings" to="/settings" />
      </nav>
      <div className="user">
        <div className="user-info">
          <div className="avatar"></div>
          <span className="username">Username</span>
        </div>
        <SidebarButton Icon={LogOut} text=" Log Out" to="/logout" />
      </div>
    </aside>
  );
}

// SidebarButton uses NavLink so that it automatically gets an "active" class
function SidebarButton({ Icon, text, to }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        "sidebar-button" + (isActive ? " active" : "")
      }
    >
      <Icon className="icon" />
      <span className="sidebar-text">{text}</span>
    </NavLink>
  );
}
