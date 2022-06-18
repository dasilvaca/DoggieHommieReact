import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Doggie Hommie.png";
import Dropdown from './dropdown.js';
  import logged from '../global variables'
import backend_host from '../global variables'
import { useContext } from "react";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div class = "container" style={
        {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <div id="logo">
          <Link to="/">
            <img src={logo} style={{ padding: "5px", alt: "logo" }} />
          </Link>
        </div>
        <div id="nav-links">
          {
            localStorage.getItem('username')? (
                <Dropdown/ >


            ) : (
              <>
                <Link to ="/login">Log In</Link>
                {/* <a href="login.php">Login</a> */}
                <Link to="/signUp">Sign up</Link>
                {/* <a href="register.php">Register</a> */}
              </>
            )}

            

        </div>
      </div>
    </nav>
  );
};

export default Navbar;


