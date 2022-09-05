import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper white">
        <a href="/" className="brand-logo left">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Sign up</a>
          </li>
          <li>
            <a href="/">Sign in</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
