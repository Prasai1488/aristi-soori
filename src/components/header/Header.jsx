import React, { useState, useEffect } from "react";
import { navigationItems } from "./navigation.data";
import { DropdownMenu } from "./DropdownMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import aristi from "../../assets/aristi.png";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src={aristi} alt="logo" className="main-logo" />
      </div>
      <nav className="nav-container">
        {navigationItems.map((nav, index) => (
          <DropdownMenu
            key={index}
            title={nav.title}
            items={nav.items}
            isHovered={hoveredItem === index}
            onHover={() => setHoveredItem(index)}
            onLeave={() => setHoveredItem(null)}
          />
        ))}
      </nav>
    </header>
  );
};

export default Header;