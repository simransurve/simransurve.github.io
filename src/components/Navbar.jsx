import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div
        className="navbar__logo"
        onClick={() => {
          document
            .getElementById("home")
            ?.scrollIntoView({ behavior: "smooth" });
          closeMenu();
        }}
      >
        Simran Surve
      </div>
      {/* Hamburger Menu Button */}
      <button
        className={`navbar__hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/* Navigation Links */}
      <div className={`navbar__links ${isOpen ? "active" : ""}`}>
        <a href="#about" className="navbar__link" onClick={closeMenu}>
          About
        </a>
        <a href="#services" className="navbar__link" onClick={closeMenu}>
          Services
        </a>
        <a href="#contact" className="navbar__link" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
