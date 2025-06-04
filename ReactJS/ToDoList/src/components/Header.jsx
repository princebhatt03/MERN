import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600">
          ToDo List
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link
            to="/"
            className="hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-600">
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
