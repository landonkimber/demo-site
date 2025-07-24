import React, { useState } from "react";
import { Home, User, MessageSquare, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../SVGs/Logo.jsx";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full flex justify-center content-center bg-gradient-to-br from-teal-400 to-teal-500 h-32 shadow-md select-none z-10">
      <div className="container max-w-7xl mx-auto px-4 h-full">
        <div className=" flex justify-between h-full">
          {/* Logo and Title */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-20 h-20 mb-4 items-center flex justify-center">
              <Logo />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-martel font-semibold">
              Demo Site Name Inc.
            </h1>
          </a>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-teal-700 mr-8"
          >
            {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#home"
              className="flex flex-col items-center text-white hover:text-teal-700 transition-colors"
            >
              <Home size={36} />
              <span className="text-lg font-bold">Home</span>
            </a>
            <a
              href="#about"
              className="flex flex-col items-center text-white hover:text-teal-700 transition-colors"
            >
              <User size={36} />
              <span className="text-lg font-bold">About</span>
            </a>
            <a
              href="#contact"
              className="flex flex-col items-center text-white hover:text-teal-700 transition-colors"
            >
              <MessageSquare size={36} />
              <span className="text-lg font-bold">Contact</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
    fixed top-32 w-full flex justify-center
    w-1/2
    right-2
    rounded-b-md 
    bg-gray-50
    overflow-hidden transition-[max-height] duration-500 ease-in-out
    z-10
    ${isMenuOpen ? "max-h-96" : "max-h-0"}
  `}
        >
          <div className="flex flex-col items-center">
            <a
              href="#home"
              className="flex px-12 py-3 px-full items-center gap-2 text-teal-400 hover:text-teal-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={32} />
              <h2 className="font-quicksand font-bold text-lg">Home</h2>
            </a>
            <a
              href="#about"
              className="flex px-12 py-3 px-full items-center gap-2 text-teal-400 hover:text-teal-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={32} />
              <h2 className="font-quicksand font-bold text-lg">About</h2>
            </a>
            <a
              href="#contact"
              className="flex px-12 py-3 px-full items-center gap-2 text-teal-400 hover:text-teal-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare size={32} />
              <h2 className="font-quicksand font-bold text-lg">Contact</h2>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
