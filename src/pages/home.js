import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../components/posts';
import CreatePost from '../components/createPost';
import LayOut from '../Layout/LayOut';
import { posts_url } from '../api';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const { data } = await axios.get(
      posts_url
      // 'http://127.0.0.1:8000/post/getAll' //?limit=20
      // 'https://backdoggiehommie.herokuapp.com/post/getAll'
    );
    console.log(data)
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);


  return (
    <>
    <LayOut>
      <div style={{  background: "linear-gradient(180deg, #44CCCC 0%, rgba(76, 44, 206, 0.93) 100%)",  border: "1px solid #222", height: "100%"}}>
        <CreatePost />
        <Posts posts={characters}/>
      </div>
    </LayOut>
    </>
  );
};

export default Home;
