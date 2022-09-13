import React, { useContext, useRef, useEffect, useState } from "react";
import { UserContext } from "../App";
import { Link, useHistory } from "react-router-dom";

function Navbar() {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  const renderList = () => {
    if (state) {
      return [
        <li key="1">
          <Link to="/profile">Profile</Link>
        </li>,
        <li key="2">
          <Link to="/create">Create Post</Link>
        </li>,
        <li key="3">
          <button
            className="red darken-3 btn-small"
            style={{ marginRight: "5px" }}
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              history.push("/signin");
            }}
          >
            Logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li key="4">
          <Link to="/signin">Signin</Link>
        </li>,
        <li key="5">
          <Link to="/signup">Signup</Link>
        </li>,
      ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/signin"} className="brand-logo left" style={{marginLeft : "5px"}}>
          Instagram
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
