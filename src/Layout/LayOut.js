import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';

const LayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayOut;
