import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Doggie Hommie.png";

const Navbar = () => {
  var logged_in = true;
  return (
    <div className="navbar">
      <div id="logo">
        <Link to="/">
          <img src={logo} style={{ padding: "5px", alt: "logo" }} />
        </Link>
      </div>
      <div id="nav-links">
        {/* <!-- <a href="index.php">Home</a>
        <a href="about.php">About</a>
        <a href="contact.php">Contact</a> --> */}
        if (! logged_in) {
          <>
          <Link to="logIn">Log In</Link>
          // {/* <a href="login.php">Login</a> */}
          <Link to="signUp">Sign Up</Link>
          // {/* <a href="register.php">Register</a> */}
          </>
        }

      </div>
    </div>
  );
};

export default Navbar;
