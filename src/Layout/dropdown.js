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
    </>
  )
}

export default Dropdown;
