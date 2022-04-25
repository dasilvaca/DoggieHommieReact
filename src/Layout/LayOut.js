import React from 'react';
import Footer from './footer';
import Navbar from './navbar';
import LogIn from '../pages/log-in';
import SignUp from '../pages/sign-up';

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
