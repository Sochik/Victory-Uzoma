import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { logo } from "../assets/images";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#Home");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update the active link
    setIsMenuOpen(false); // Close the menu on small screens
  };

  return (
    <div className="w-full bg-inherit py-2" data-aos="fade-down">
      <nav className="flex items-center justify-between px-5">
        {/* Logo Section */}
        <div className="flex ps-3 md:ps-24 items-center">
          <a href="#Home">
            <img
              src={logo}
              alt="Victory Uzoma"
              className="object-cover w-16 h-16"
            />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-light focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          data-aos="fade-left"
        >
          {isMenuOpen ? <FaTimes /> : <FaBarsStaggered />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } transition-transform duration-500 ease-in-out absolute top-3/4 left-0 w-full text-light bg-secondary bg-opacity-70 md:static md:bg-inherit md:flex md:flex-row md:items-center md:space-x-6 md:justify-center`}
          data-aos="fade-up"
        >
          {[
            { name: "Home", href: "#Home" },
            { name: "About", href: "#About" },
            { name: "Résumé", href: "#Resume" },
            { name: "Services", href: "#Services" },
            { name: "Contact me", href: "#Contact" },
          ].map((link) => (
            <li
              key={link.href}
              className={`cursor-pointer px-5 py-2 md:px-0 transition-all duration-300 ${
                activeLink === link.href
                  ? "text-highlight font-bold"
                  : "hover:text-highlight transform hover:scale-105"
              }`}
            >
              <a href={link.href} onClick={() => handleLinkClick(link.href)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
