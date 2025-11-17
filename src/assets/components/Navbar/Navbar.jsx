import { useState } from "react";
import logo from "../../images/navbarLogo.png";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { MdOutlineScoreboard } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to check if the current path matches
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sm:px-4 sm:py-2 text-3xl absolute top-0 w-screen nav gap-3 flex text-white z-50">
      <div className="bg-[#1A1919] flex sm:rounded-xl border-2 sm:border-[#FDD181] pr-10 pl-4 py-6 flex-grow items-center justify-between">
        <img src={logo} className="w-24" alt="Logo" />
        <div className="sm:flex hidden text-4xl gap-12">
          <Link
            to="/"
            className={`hover:text-[#FDD181] ${
              isActive("/") ? "text-[#FDD181]" : ""
            }`}
          >
            HOME
          </Link>
          <Link
            to="/events"
            className={`hover:text-[#FDD181] ${
              isActive("/events") ? "text-[#FDD181]" : ""
            }`}
          >
            EVENTS
          </Link>
          <Link
            to="/gallery"
            className={`hover:text-[#FDD181] ${
              isActive("/gallery") ? "text-[#FDD181]" : ""
            }`}
          >
            GALLERY
          </Link>
          <Link
            to="/sponsors"
            className={`hover:text-[#FDD181] ${
              isActive("/sponsors") ? "text-[#FDD181]" : ""
            }`}
          >
            SPONSORS
          </Link>
        </div>
        {/* hamburger button */}
        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* SCOREBOARD Link (Desktop) */}
      <a
        href="https://arena-score-board.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1A1919] hidden sm:flex gap-2 justify-center items-center sm:rounded-xl border-2 sm:border-[#FDD181] px-6 py-3 hover:text-[#FDD181] hover:cursor-pointer"
      >
        <MdOutlineScoreboard size={30} />
        SCOREBOARD
      </a>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-screen bg-[#1A1919] text-4xl flex flex-col justify-center items-center gap-10 pt-10 shadow-lg sm:hidden transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-4xl "
          onClick={() => setIsMenuOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Menu Links */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className={`hover:text-[#FDD181] ${
            isActive("/") ? "text-[#FDD181]" : ""
          }`}
        >
          HOME
        </Link>
        <Link
          to="/events"
          onClick={() => setIsMenuOpen(false)}
          className={`hover:text-[#FDD181] ${
            isActive("/events") ? "text-[#FDD181]" : ""
          }`}
        >
          EVENTS
        </Link>
        <Link
          to="/gallery"
          onClick={() => setIsMenuOpen(false)}
          className={`hover:text-[#FDD181] ${
            isActive("/gallery") ? "text-[#FDD181]" : ""
          }`}
        >
          GALLERY
        </Link>
        <Link
          to="/sponsors"
          onClick={() => setIsMenuOpen(false)}
          className={`hover:text-[#FDD181] ${
            isActive("/sponsors") ? "text-[#FDD181]" : ""
          }`}
        >
          SPONSORS
        </Link>

        {/* SCOREBOARD Link (Mobile) */}
        <a
          href="https://arena-score-board.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FDD181] hover:cursor-pointer"
        >
          SCOREBOARD
        </a>
      </div>
    </div>
  );
}

export default Navbar;
