// import React from 'react'
import React, { useEffect, useState } from 'react';
import LayOut from "../Layout/LayOut";
import ProfilePic from "../assets/img/4.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Posts from '../components/posts';

export const Profile = () => {
  const [characters, setCharacters] = useState([]);

  const user = +localStorage.getItem("user")
  const name = localStorage.getItem("username")

  const getCharacters = async () => {
    console.log("Usuario: ", user);
    const { data } = await axios.get(
    `http://127.0.0.1:8000/post/getByUser/${user}`
    );
    console.log(data)
    setCharacters(data);
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

        <div style={{float: "right", borderColor: "red", borderStyle: "none", marginRight: "10px"}}>
            <div style={{display: "inline-block"}} >
                <img alt="user_card" className="rounded-circle" src=""
                     style={{maxHeight: "100px", maxWidth: "100px", width: "100%", float: "left", clear: "both", display: "inline"}}/>
                <div style={{display: "inline-block", maxWidth: "16em", paddingLeft: "5px", textAlign: "center", margin: "auto",paddingTop: "18px"}}>
                    <h3 style={{display: "block", maxWidth: "18em", wordWrap: "break-word", margin: "0"}}>
                        Nombre </h3>
                    <a href="" style={{display: "block", float: "right", textAlign: "center", color: "#504E4E"}}>Cerrar sesión</a>
                </div>
            </div>
        </div>

            <Link to="/updateUser">
              <button type="button" class="btn btn-primary" style={{margin :"5%", backgroundColor : "#37384F", borderColor : "#37384F"}}>Editar perfil</button>
            </Link>

            

            <Posts posts={characters}/>
          </div>
        </div>
      </div>
    </LayOut>
  );
};
