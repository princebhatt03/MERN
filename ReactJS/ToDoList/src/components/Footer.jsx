import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 absolute  w-full z-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Site Name */}
        <div className="text-2xl font-bold text-blue-400">
          <Link to="/">MyWebsite</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-sm">
          <Link
            to="/"
            className="hover:text-blue-400">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-400">
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-400">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="#"
            className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-blue-400">
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-blue-400">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-6 text-gray-400">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
