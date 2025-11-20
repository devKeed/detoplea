"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "/public/images/logo2.png";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-[#F7E5D7] fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-10 mb-2">
        {/* Logo */}
        <Link href="/" aria-label="Detoplea Marketing - Return to homepage">
          <Image
            src={Logo}
            alt="Detoplea Marketing logo - Digital marketing agency"
            className="h-6 mt-2 w-auto"
            height={24}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden max-[989px]:hidden text-xs min-[990px]:flex items-center space-x-6 pt-2">
          <nav className="flex space-x-6">
            {[
              {
                path: "/",
                name: "HOME",
                ariaLabel:
                  "Navigate to homepage - Detoplea Marketing services overview",
              },
              {
                path: "/starthere",
                name: "START HERE",
                ariaLabel:
                  "Start your digital marketing journey with our consultation",
              },
              {
                path: "/portfolio",
                name: "PORTFOLIO",
                ariaLabel:
                  "View our portfolio of successful marketing campaigns",
              },
              {
                path: "/services",
                name: "SERVICES",
                ariaLabel:
                  "Explore our digital marketing services and solutions",
              },
              {
                path: "/blog",
                name: "BLOG",
                ariaLabel:
                  "Read our latest digital marketing insights and tips",
              },
            ].map(({ path, name, ariaLabel }) => (
              <Link
                key={path}
                href={path}
                aria-label={ariaLabel}
                className={`text-gray-700 text-xs hover:text-[#CC5A00] transition leading-snug ${
                  isActive(path) ? "font-bold text-[#CC5A00]" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            aria-label="Contact us for a free digital marketing consultation and quote"
            className="bg-[#00CCB8] text-white text-xs px-4 py-1 rounded-full hover:bg-[#02574F] transition"
          >
            HIRE US
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="min-[990px]:hidden relative w-4 h-3 flex flex-col justify-between items-center z-50 group mt-2"
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
        className={`min-[990px]:hidden bg-[#F7E5D7] absolute top-12 left-0 w-full z-40 transform transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 scale-100 max-h-[500px]"
            : "opacity-0 scale-95 max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col space-y-4 p-6">
          {[
            {
              path: "/",
              name: "HOME",
              ariaLabel:
                "Navigate to homepage - Detoplea Marketing services overview",
            },
            {
              path: "/starthere",
              name: "START HERE",
              ariaLabel:
                "Start your digital marketing journey with our consultation",
            },
            {
              path: "/portfolio",
              name: "PORTFOLIO",
              ariaLabel: "View our portfolio of successful marketing campaigns",
            },
            {
              path: "/services",
              name: "SERVICES",
              ariaLabel: "Explore our digital marketing services and solutions",
            },
            {
              path: "/blog",
              name: "BLOG",
              ariaLabel: "Read our latest digital marketing insights and tips",
            },
          ].map(({ path, name, ariaLabel }) => (
            <Link
              key={path}
              href={path}
              aria-label={ariaLabel}
              className={`text-gray-700 text-sm hover:text-[#CC5A00] transition leading-snug ${
                isActive(path) ? "font-bold text-[#CC5A00]" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}

          <Link
            href="/contact"
            aria-label="Contact us for a free digital marketing consultation and quote"
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
