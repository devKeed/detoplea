import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "/images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="African Warriors" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {[
            { path: "/", name: "Home" },
            { path: "/watch", name: "Watch" },
            { path: "/dambe", name: "Dambe" },
            { path: "/warriors", name: "Warriors" },
            { path: "/shop", name: "Shop" },
            { path: "/news", name: "News" },
          ].map(({ path, name }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-green-700 transition ${
                  isActive ? "font-bold text-green-700" : ""
                }`
              }
            >
              {name}
            </NavLink>
          ))}

          {/* Dropdown Menu for "Socials" */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center text-gray-700 hover:text-green-700 transition"
            >
              Socials <ChevronDown size={16} className="ml-1 transition-transform duration-300 ease-in-out" style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 animate-fade-in">
                <a
                  href="https://web.facebook.com/africanwarriorsfightingchampionship/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Facebook
                </a>
                <a
                  href="http://FACEbook.com/groups/871285854139506/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Facebook Group
                </a>
                <a
                  href="https://www.instagram.com/africanwarriorsfc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@africanwarriorsfc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Tiktok
                </a>
                <a
                  href="https://www.youtube.com/@africanwarriors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  YouTube
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 transition-transform duration-300 ease-in-out"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full z-50 animate-slide-down">
          <nav className="flex flex-col space-y-4 p-6">
            {[
              { path: "/", name: "Home" },
              { path: "/watch", name: "Watch" },
              { path: "/dambe", name: "Dambe" },
              { path: "/warriors", name: "Warriors" },
              { path: "/shop", name: "Shop" },
              { path: "/news", name: "News" },
            ].map(({ path, name }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-green-700 transition ${
                    isActive ? "font-bold text-green-700" : ""
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </NavLink>
            ))}

            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-center text-gray-700 hover:text-green-700 transition"
            >
              Socials <ChevronDown size={16} className="ml-2 transition-transform duration-300 ease-in-out" style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>
            {dropdownOpen && (
              <div className="pl-4 space-y-2 animate-fade-in">
                <a
                  href="https://web.facebook.com/africanwarriorsfightingchampionship/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700"
                >
                  Facebook
                </a>
                <a
                  href="http://FACEbook.com/groups/871285854139506/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700"
                >
                  Facebook Group
                </a>
                <a
                  href="https://www.youtube.com/@africanwarriors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700"
                >
                  YouTube
                </a>
                <a
                  href="https://www.instagram.com/africanwarriorsfc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@africanwarriorsfc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700"
                >
                  Tiktok
                </a>
              </div>
            )}

            {/* Contact Button in Mobile */}
            <Link
              to="/contact"
              className="bg-green-700 text-white px-4 py-2 rounded-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
