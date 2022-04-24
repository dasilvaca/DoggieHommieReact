import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Doggie Hommie.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div id="logo">
        <Link to="/home">
          <img src={logo} style={{ padding: "5px", alt: "logo" }} />
        </Link>
      </div>
      <div id="nav-links">
        {/* <!-- <a href="index.php">Home</a>
        <a href="about.php">About</a>
        <a href="contact.php">Contact</a> --> */}
        <Link to="logIn">Log In</Link>
        {/* <a href="login.php">Login</a> */}
        <a href="register.php">Register</a>
      </div>
    </div>
  );
};

export default Navbar;
