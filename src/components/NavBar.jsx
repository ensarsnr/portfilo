import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full border-gray-200 bg-[#161616]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Name<span className='bg-red-400 rounded-sm p-1'>Surname</span></span>
        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded={isMenuOpen ? "true" : "false"}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:flex md:w-auto ${isMenuOpen ? "block" : "hidden"}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0    ">
            <li>
              <Link to="/" className="block py-2 px-3  bg-red-0 rounded md:bg-transparent md:text-red-0 md:p-0 text-[#7D7D7D] hover:text-white ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="block py-2 px-3  bg-red-0 rounded md:bg-transparent md:text-red-0 md:p-0 text-[#7D7D7D] hover:text-white ">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3  bg-red-0 rounded md:bg-transparent md:text-red-0 md:p-0 text-[#7D7D7D] hover:text-white ">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="block py-2 px-3  bg-red-0 rounded md:bg-transparent md:text-red-0 md:p-0 text-[#7D7D7D] hover:text-white ">
                Blog
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;