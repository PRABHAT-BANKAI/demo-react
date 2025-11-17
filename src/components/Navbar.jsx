import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"/about"}>about</Link>
        </li>
        <li>
          <Link to={"/features"}>features</Link>
        </li>
        <li>
          <Link to={"/contact"}>contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
