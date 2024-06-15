import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Define your mobile breakpoint

  useEffect(() => {
    // Update isMobile state when window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    setDropdownVisible(false); // Close the dropdown when opening the menu
  };

  const toggleDropdown = () => {
    if (isMobile) {
      // Close the dropdown on mobile when an item is clicked
      setDropdownVisible(false);
    } else {
      setDropdownVisible(!dropdownVisible);
    }
  };
  

  return (
    <>
      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        <Link to="/" className="navbar-logo">
          <h3> Schemes </h3>
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-items ${menuActive ? "active" : ""}`}>
          {navItems.map((item) => {
            if (item.title === "Category") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                >
                  <Link to={item.path} onClick={toggleDropdown}>
                    {item.title}
                  </Link>
                  {dropdownVisible && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
