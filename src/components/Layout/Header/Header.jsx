import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header_left">
        <Link to="/">
          <div className="circle">
            <img src="images.png" alt="" />
          </div>
          <p>Finder</p>
        </Link>
        <div className="search">
          <BiSearchAlt />
          <input type="text" placeholder="Find Missing..." />
        </div>
      </div>
      <div className="header_right">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/">
          <p>Feed</p>
        </Link>
        <Link to="/">
          <p>Report Missing Person</p>
        </Link>
        <Link to="/profile">
          <p>Profile</p>
        </Link>
        <Link className="login" to="/login">
          <p>LogIn</p>
        </Link>
        <Link className="login" to="/signup">
          <p>SignUp</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
