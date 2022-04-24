import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className="text-center p-3 w-100"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', bottom: '0'}}
      >
        © 2020 Copyright:
        <a className="text-dark" href="doggieHommie.com">
          Doggie Hommie.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
