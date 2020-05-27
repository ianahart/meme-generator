import React from 'react';

import '../css/Footer.css';
const Footer = ({ name }) => {
  return (
    <div>
      <footer className="footer center">
        <p>Created by {name} &copy;2020</p>
      </footer>
    </div>
  );
};

export default Footer;
