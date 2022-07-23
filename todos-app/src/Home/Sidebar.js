import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import "./Nav.css"

function Sidebar() {
  return (
    <div id="sidebar1">
      <div id="sidebar-top">
        <img src="#" alt=""></img>
        <div>UserName</div>
        <div>Icon</div>
      </div>
      <div id="func">
        <Link to="/" className="function Link fs">
          Home
        </Link>
        <Link to="/Todo" className="function Link fs">
          Todo
        </Link>
        <Link to="/Shared" className="function Link fs">
          Shared
        </Link>
        <Link to="/Notes" className="function Link fs">
          Notes
        </Link>
        <Link to="/Notebooks" className="function Link fs">
          Notebooks
        </Link>
        <Link to="/Remainder" className="function Link fs">
          Remainder
        </Link>
      </div>
    </div>
  );
}
export default Sidebar;
