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
      <div style={{  background: "linear-gradient(180deg, #44CCCC 0%, rgba(76, 44, 206, 0.93) 100%)",  border: "1px solid #222", minHeight: "88vh"}}>
        <Posts posts={characters}/>
      </div>
    </LayOut>
  );
};
