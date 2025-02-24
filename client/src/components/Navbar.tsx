import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <ul className="flex space-x-6 text-white">
        <li><Link to="/" className="hover:text-yellow-400">Drink Bible</Link></li>
        <li><Link to="/my-bar" className="hover:text-yellow-400">My Bar</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;