import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Doggie Hommie.png";
import Avatar from "../assets/img/Avatar.jpg";


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
        {
          logged_in ? (
            <>
              <Link to="/profile">
                <img src={Avatar} style={{ height: "2rem", borderRadius: "30px", alt: "Avatar" }} />
              </Link>
              {/* <a href="login.php">Login</a> */}
              <Link to="/">Sign Out</Link>
              {/* <a href="register.php">Register</a> */}
            </>

          ) : (
            <>
              <Link to ="/logIn">Log In</Link>
              {/* <a href="login.php">Login</a> */}
              <Link to="/signUp">Sign up</Link>
              {/* <a href="register.php">Register</a> */}
            </>
          )}

      </div>
    </div>
  );
};

export default Navbar;
