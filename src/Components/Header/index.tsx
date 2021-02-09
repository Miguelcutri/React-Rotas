import React from 'react';
import { Link } from 'react-router-dom'
import '../../index.css'

const Header = () => {
  return (
    <div className="container">
      <nav className="menu">
        <ul>
          <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/contato">Contato</Link>
        </li>
        <li>
        <Link to="/portifolio">Portifólio</Link>
        </li>
        </ul>
        </nav>
    </div>
  );
}

export default Header;