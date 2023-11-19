import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <div className="nav-link dropdown">
        <span>About</span>
        <div className="dropdown-content">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/about/contact">Contact Us</NavLink>
        </div>
      </div>
      <div className="nav-link dropdown">
        <span>Loan</span>
        <div className="dropdown-content">
          <NavLink to="/loan">Apply</NavLink>
          <NavLink to="/loan/status">Status</NavLink>
          <NavLink to="/loan/repay">Repay</NavLink>
          <NavLink to="/loan/extend">Extend</NavLink>
          <NavLink to="/loan/extend/status">Extend Status</NavLink>
          <NavLink to="/loan/extend/repay">Extend Repay</NavLink>
          <NavLink to="/loan/extend/repay/status">Extend Repay Status</NavLink>
        </div>
      </div>
      <div className="nav-link dropdown">
        <span>Account</span>
        <div className="dropdown-content">
          <NavLink to="/account/login">Login</NavLink>
          <NavLink to="/account/register">Register</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
