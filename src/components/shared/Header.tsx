import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "/images/Web logo 1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F7E5D7] fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16 mb-2">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="detoplea logo" className="h-16" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 pt-2">
          <nav className="flex space-x-6">
            {[
              { path: "/", name: "HOME" },
              { path: "/starthere", name: "START HERE" },
              { path: "/portfolio", name: "PORTFOLIO" },
              { path: "/services", name: "SERVICES" },
              { path: "/blog", name: "BLOG" },
            ].map(({ path, name }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-gray-700 text-sm hover:text-[#CC5A00] transition leading-snug ${
                    isActive ? "font-bold text-[#CC5A00]" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="bg-[#00CCB8] text-white text-sm px-4 py-2 rounded-full hover:bg-[#02574F] transition"
          >
            HIRE US
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden relative w-6 h-4 flex flex-col justify-between items-center z-50 group"
        >
          <span
            className={`w-6 h-0.5 bg-gray-700 rounded transition-transform duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 rounded transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 rounded transition-transform duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#F7E5D7] absolute top-16 left-0 w-full z-40 transform transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 scale-100 max-h-[500px]"
            : "opacity-0 scale-95 max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col space-y-4 p-6">
          {[
            { path: "/", name: "HOME" },
            { path: "/starthere", name: "START HERE" },
            { path: "/portfolio", name: "PORTFOLIO" },
            { path: "/services", name: "SERVICES" },
            { path: "/blog", name: "BLOG" },
          ].map(({ path, name }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-gray-700 text-sm hover:text-[#CC5A00] transition leading-snug ${
                  isActive ? "font-bold text-[#CC5A00]" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="bg-[#00CCB8] hover:bg-[#02574F] text-white px-4 py-2 uppercase rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            HIRE US
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
