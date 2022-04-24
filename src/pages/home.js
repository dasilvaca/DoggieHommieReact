import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../components/posts';

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
      <Posts posts={characters}/>
    </>
  );
};

export default Home;
