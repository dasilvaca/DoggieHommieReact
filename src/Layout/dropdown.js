import React from 'react'
import Avatar from "../assets/img/Avatar.jpg";
import { Link } from "react-router-dom";

const Dropdown = () => {
    const signOut = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user");
        window.location.href = "/";
      }
  return (
    <>
        <Link to="/profile">
        <img src={Avatar} style={{ height: "2rem", borderRadius: "30px", alt: "Avatar" }} />
        </Link>
        <Link to="/" onClick={signOut}>Sign Out</Link>
        {/* <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown">
                Dropdown link
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div> */}
    </>
    
  )
}

export default Dropdown;
