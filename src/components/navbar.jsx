import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/search">Buscar</Link>
      <Link to="/playlist/1">Mi Lista</Link>
    </nav>
  );
};

export default Navbar;