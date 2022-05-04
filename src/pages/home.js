import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../components/posts';
import LayOut from '../Layout/LayOut';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const { data } = await axios.get(
      'https://rickandmortyapi.com/api/character'
    );
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  console.log('characters', characters);

  return (
    <>
    <LayOut>
      <div style={{  background: "linear-gradient(180deg, #44CCCC 0%, rgba(76, 44, 206, 0.93) 100%)",  border: "1px solid #222",}}>
        <Posts posts={characters}/>
      </div>
    </LayOut>
    </>
  );
};

export default Home;
