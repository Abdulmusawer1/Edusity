import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-icon.png";
import { X } from "lucide-react";
import { Link } from "react-scroll";

function Navbar() {
  const [stikey, setStikey] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setStikey(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 
      py-4 px-[10%] flex items-center justify-between ${
        stikey ? "bg-blue-800 shadow-lg" : "bg-transparent"
      }`}
    >
      {/* لوگو */}
      <img src={logo} alt="Logo" className="w-44 lg:w-36" />

      {/* منوی دسکتاپ */}
      <ul className="hidden md:flex items-center space-x-8 text-lg">
        <li>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 transition"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="Programs"
            smooth={true}
            offset={-260}
            duration={500}
            className="text-white hover:text-gray-300 transition"
          >
            Program
          </Link>
        </li>

        <li>
          <Link
            to="About"
            smooth={true}
            offset={-150}
            duration={500}
            className="text-white hover:text-gray-300 transition"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            to="Campus"
            smooth={true}
            offset={-260}
            duration={500}
            className="text-white hover:text-gray-300 transition"
          >
            Campus
          </Link>
        </li>

        <li>
          <Link
            to="Testimonials"
            smooth={true}
            offset={-260}
            duration={500}
            className="text-white hover:text-gray-300 transition"
          >
            Testimonials
          </Link>
        </li>

        <li>
          <Link
            to="Contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="bg-white text-blue-800 py-3 px-8 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Contact Us
          </Link>
        </li>
      </ul>

    
      <div className="md:hidden z-50 cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <img src={menu} alt="menu" className="w-8 h-8" />
        )}
      </div>

      
      <ul
        className={`fixed top-0 right-0 h-full w-64 bg-blue-600 text-white 
        p-8 flex flex-col space-y-6 text-lg transform transition-transform 
        duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-xl`}
      >
        {["hero", "Programs", "About", "Campus", "Testimonials", "Contact"].map(
          (item, index) => (
            <li key={index}>
              <Link
                to={item}
                smooth={true}
                offset={
                  item === "Programs" ||
                  item === "Campus" ||
                  item === "Testimonials"
                    ? -260
                    : 0
                }
                duration={500}
                onClick={toggleMenu}
                className="block py-3 px-4 rounded text-white hover:bg-blue-500 transition"
              >
                {item === "hero"
                  ? "Home"
                  : item === "About"
                  ? "About Us"
                  : item === "Contact"
                  ? "Contact Us"
                  : item}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
