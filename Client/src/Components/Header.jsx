import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const path = useLocation().pathname;
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="border-b-2 bg-white dark:bg-gray-900 px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link
        to="/"
        className="text-sm sm:text-xl font-semibold dark:text-white flex items-center"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Ahsaan 
        </span>
        <span className="ml-2">Ullah</span>
      </Link>

      {/* Search Bar */}
      <form className="hidden lg:flex items-center border rounded-lg px-3 py-1 bg-gray-100 dark:bg-gray-700">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none"
        />
        <AiOutlineSearch className="text-gray-500 dark:text-white" />
      </form>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Search Button (Mobile) */}
        <button className="lg:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          <AiOutlineSearch className="text-gray-600 dark:text-white" />
        </button>

        {/* Dark Mode Toggle */}
        <button className="hidden sm:flex p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          <FaMoon className="text-gray-600 dark:text-white" />
        </button>

        {/* Sign-In Button */}
        <Link to="/sign-in">
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg">
            Sign In
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsNavOpen(!isNavOpen)} className="sm:hidden">
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isNavOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 p-4 shadow-lg sm:hidden">
          <Link to="/" className={`block py-2 ${path === "/" ? "font-bold" : ""}`}>
            Home
          </Link>
          <Link to="/about" className={`block py-2 ${path === "/about" ? "font-bold" : ""}`}>
            About
          </Link>
          <Link to="/projects" className={`block py-2 ${path === "/projects" ? "font-bold" : ""}`}>
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
}
