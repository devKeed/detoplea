import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "/images/Web logo 1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" bg-[#F7E5D7] shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16 mb-2">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="African Warriors" className="h-20" />
        </Link>

        {/* Desktop Menu + Contact Button */}
        <div className="hidden md:flex items-center space-x-6 pt-2">
          <nav className="flex space-x-6">
            {[
              { path: "/", name: "HOME" },
              { path: "/watch", name: "START HERE" },
              { path: "/dambe", name: "PORTFOLIO" },
              { path: "/warriors", name: "SERVICES" },
              { path: "/shop", name: "BLOG" },
            ].map(({ path, name }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-gray-700 font-uber text-sm hover:text-[#CC5A00] transition leading-snug tracking-wide ${
                    isActive ? "font-bold text-[#CC5A00] t" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="bg-[#00CCB8] text-white font-uber text-sm px-4 py-2 rounded-full hover:bg-[#00CCB8] transition"
          >
            Hire Us
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
        <div className="md:hidden bg-[#F7E5D7] shadow-md absolute top-16 left-0 w-full z-50 animate-slide-down">
          <nav className="flex flex-col space-y-4 p-6">
            {[
              { path: "/", name: "HOME" },
              { path: "/watch", name: "START HERE" },
              { path: "/dambe", name: "PORTFOLIO" },
              { path: "/warriors", name: "SERVICES" },
              { path: "/shop", name: "BLOG" },
            ].map(({ path, name }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-gray-700 font-uber text-sm hover:text-[#CC5A00] transition leading-snug tracking-wide ${
                    isActive ? "font-bold text-[#CC5A00] t" : ""
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </NavLink>
            ))}

            {/* Contact Button in Mobile */}
            <Link
              to="/contact"
              className="bg-[#00CCB8] text-white px-4 py-2 rounded-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Hire Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
