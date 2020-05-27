import React from 'react';

const NavBar = ({ title }) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue darken-3">
          <a href="/" className="brand-logo center">
            {title}
            <i class="fas fa-image"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
