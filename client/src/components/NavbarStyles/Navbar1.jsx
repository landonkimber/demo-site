import React, { useState } from "react";
import { Home, User, MessageSquare, Menu, X } from "lucide-react";
import Logo from "../SVGs/Logo.jsx";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-8xl mx-auto rounded-b-md bg-slate-800 h-28  shadow-md select-none z-15">
      <div className="max-w-5xl mx-auto px-4 flex justify-center rounded-b-md content-center bg-gradient-to-br from-slate-700 to-sky-950 h-32 shadow-md">
        <div className=" flex justify-around h-full items-center">
          {/* Logo and Title */}
          <a href="#home" className="flex items-center gap-1">
            {/* <img
              src={Logo}
              className="w-20 h-20 items-center flex justify-center text-white"
            ></img> */}

            <div className="w-20 h-20 items-center flex justify-center hover:text-emerald-200">
              <Logo hoverColor="hover:fill-emerald-600" />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-domine font-bold  hover:text-emerald-200 ">
              Demo Site Name Inc.
            </h1>
          </a>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-emerald-200 mr-8"
          >
            {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
          <div className="w-1 h-[50%] align-center flex justify-center bg-white hover:bg-emerald-200 mx-12"></div>
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#home"
              className="flex flex-col items-center text-white hover:text-emerald-200 transition-colors"
            >
              <Home size={36} />
              <span className="text-lg font-bold">Home</span>
            </a>
            <a
              href="#about"
              className="flex flex-col items-center text-white  hover:text-emerald-200 transition-colors"
            >
              <User size={36} />
              <span className="text-lg font-bold">About</span>
            </a>
            <a
              href="#contact"
              className="flex flex-col items-center text-white hover:text-emerald-200 transition-colors"
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
    </div>
  );
};

export default NavBar;
