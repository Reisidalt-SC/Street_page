import "./header.scss";
import { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // scroll event listener to change header style on scroll and section change
useEffect(() => {
  const HEADER_HEIGHT = 90;
  const OFFSET = 80;

  const handleScroll = () => {
    setActive(window.scrollY > 50);

    const sections = document.querySelectorAll("section[id]");
    let currentId = null;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= HEADER_HEIGHT + OFFSET) {
        currentId = section.id;
      }
    });

    setActiveSection(currentId);
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  // toggle menu active state on button click
  const toggleActive = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${active ? "active" : ""}`}>
      <div className="logo">
        <strong>STREET</strong>
      </div>

      <button className="header_menu" onClick={toggleActive}>
        <i className="bi bi-three-dots"></i>
      </button>

      <nav className={`header_nav ${menuOpen ? "active" : ""}`}>
        <ul className="header_links">
          <li className={activeSection === "home" ? "active" : ""}>
            <a href="#home" >Home</a>
          </li>
          <li className={activeSection === "about" ? "active" : ""}>
            <a href="#about">Sobre</a>
          </li>
          <li className={activeSection === "portfolio" ? "active" : ""}>
            <a href="#portfolio">Portfólio</a>
          </li>
          <li className={activeSection === "services" ? "active" : ""}>
            <a href="#services">Serviços</a>
          </li>
          <li className={activeSection === "team" ? "active" : ""}>
            <a href="#team">Equipe</a>
          </li>
        </ul>
        <button className="header_contact">CONTATO</button>
      </nav>
    </header>
  );
}
