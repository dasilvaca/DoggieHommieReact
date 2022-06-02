// import React from 'react'
import React, { useEffect, useState } from 'react';
import LayOut from "../Layout/LayOut";
import ProfilePic from "../assets/img/4.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Posts from '../components/posts';

export const UserProfile = () => {
  const signOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  const [characters, setCharacters] = useState([]);

  
  const user = localStorage.getItem("user_profile")
  const name = localStorage.getItem("user_profile_name")
  const tel = localStorage.getItem("user_tel")
  const email = localStorage.getItem("user_email")
  const isActive = localStorage.getItem("user_is_active")

  const getCharacters = async () => {
    console.log("Usuario: ", user);
    const { data } = await axios.get(
    `http://127.0.0.1:8000/post/getByUser/${user}`
    );
    console.log(data)
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <LayOut>
      <div className="container-fluid overflow-auto" style={{ margin: '0px', padding: '0px' }}>
        <div className="container-fluid overflow-auto" style={{ height: 'auto', margin: '0', padding: '3%', background: 'linear-gradient(180deg, #44CCCC 0%, rgba(76, 44, 206, 0.93) 100%)', minHeight: '300px' }}>
          <div
              className="shadow-lg row d-block"
              style={{ height: 'auto', minHeight: '100%', borderRadius: '20px', backgroundColor: 'white', width : "60%" , marginLeft : "20%"}}
          >

        <div style={{ borderStyle: "none"}}>
            <div style={{display: "inline-block" , marginLeft: "12%",marginTop : "4%"}} >
                <img alt="" className="rounded-circle" src=""
                     style={{maxHeight: "100px", maxWidth: "100px", width: "100%", float: "left", clear: "both", display: "inline"}}/>
                <div style={{display: "inline-block", maxWidth: "16em", paddingLeft: "5px", textAlign: "left", margin: "auto",paddingTop: "18px"}}>
                    <h3 style={{display: "block", maxWidth: "15em", wordWrap: "break-word", margin: "0"}}>
                        {name}</h3>
                    <a href="/" onClick={signOut} style={{display: "block", textAlign: "left", color: "#504E4E"}}>Cerrar sesión</a>
                </div>
                <div style={{maxWidth: "16em", paddingLeft: "5px", textAlign: "left", margin: "auto",paddingTop: "10px"}}>
                  <h6 style={{display: "block", maxWidth: "15em", wordWrap: "break-word", margin: "0"}}>
                          {email}</h6>
                          <h6 style={{display: "block", maxWidth: "15em", wordWrap: "break-word", margin: "0"}}>
                          {tel}</h6>
                          <h6 style={{display: "block", maxWidth: "15em", wordWrap: "break-word", margin: "0"}}>
                          {isActive}</h6>
                  <a href="/" onClick={signOut} style={{display: "block", textAlign: "left", color: "#504E4E"}}>Cerrar sesión</a>
                </div>
            </div>
        </div>
            <Posts posts={characters}/>
          </div>
        </div>
      </div>
    </LayOut>
  );
};
