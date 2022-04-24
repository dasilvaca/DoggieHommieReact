import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/Doggie Hommie.png';

const Navbar = () => {
  return (
    // <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
    //   <div classNameName="container">
    //     <a classNameName="navbar-brand me-2" href="https://mdbgo.com/">
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
    //         height="16"
    //         alt="MDB Logo"
    //         loading="lazy"
    //         style={{ marginTop: '-1px' }}
    //       />
    //     </a>

    //     <button
    //       classNameName="navbar-toggler"
    //       type="button"
    //       data-mdb-toggle="collapse"
    //       data-mdb-target="#navbarButtonsExample"
    //       aria-controls="navbarButtonsExample"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <i classNameName="fas fa-bars"></i>
    //     </button>

    //     <div classNameName="collapse navbar-collapse" id="navbarButtonsExample">
    //       <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li classNameName="nav-item">
    //           <a classNameName="nav-link" href="#">
    //             Dashboard
    //           </a>
    //         </li>
    //       </ul>

    //       <div>


    //       <div classNameName="d-flex align-items-center">
    //         <Link to="/login">
    //           <button type="button" classNameName="btn btn-link px-3 me-2">
    //             Login
    //           </button>
    //         </Link>
    //         <button type="button" classNameName="btn btn-primary me-3">
    //           Sign up for free
    //         </button>
    //         <a
    //           classNameName="btn btn-dark px-3"
    //           href="https://github.com/mdbootstrap/mdb-ui-kit"
    //           role="button"
    //         >
    //           <i classNameName="fab fa-github" />
    //         </a>
    //       </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div className="navbar">
    <div id="logo">
      <Link to="/home">
            <img src= {logo} style={{padding: "5px", alt:"logo"}}/>
      </Link>
    </div>
    <div id="nav-links">
        {/* <!-- <a href="index.php">Home</a>
        <a href="about.php">About</a>
        <a href="contact.php">Contact</a> --> */}
        <a href="login.php">Login</a>
        <a href="register.php">Register</a>
    </div>
</div>
  );
};

export default Navbar;
