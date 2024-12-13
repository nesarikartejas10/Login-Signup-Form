import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a className="head">Explore!</a>
            <NavLink to="/">SignUp</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
