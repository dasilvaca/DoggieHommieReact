import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

const LayOut = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayOut;
