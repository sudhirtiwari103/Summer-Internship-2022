import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div >
      <nav className="navbar navbar-light bg-light d-flex py-4 hii  justify-content-between ">
        <Link className="navbar-brand fs" to="/">Navbar</Link>
        <form className="form-inline d-flex">
          <input
            className="form-control mr-sm-2 fs"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 fs"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}
export default Nav;
