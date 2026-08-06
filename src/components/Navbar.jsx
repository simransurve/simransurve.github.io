import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["home", "about", "services", "contact"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveLink(sectionId);
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div
        className="navbar__logo"
        onClick={() => handleNavClick("home")}
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
        <a 
          href="#about" 
          className={`navbar__link ${activeLink === "about" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("about");
          }}
        >
          About
        </a>
        <a 
          href="#services" 
          className={`navbar__link ${activeLink === "services" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("services");
          }}
        >
          Services
        </a>
        <a 
          href="#contact" 
          className={`navbar__link ${activeLink === "contact" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("contact");
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
