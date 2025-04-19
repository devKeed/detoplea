import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "/images/Web logo 1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" bg-[#F7E5D7] fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16 mb-2">
        <Link to="/">
          <img src={Logo} alt="detoplea logo" className="h-16" />
        </Link>

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
                  `text-gray-700 text-sm hover:text-[#CC5A00] transition leading-snug tracking-wide ${
                    isActive ? "font-bold text-[#CC5A00] t" : ""
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
        <div className="md:hidden bg-[#F7E5D7] absolute top-16 left-0 w-full z-50 animate-slide-down">
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
                  `text-gray-700 text-sm hover:text-[#CC5A00] transition leading-snug tracking-wide ${
                    isActive ? "font-bold text-[#CC5A00] t" : ""
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
      )}
    </header>
  );
};

export default Header;
