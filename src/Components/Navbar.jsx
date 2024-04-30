import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  //   const [isContentVisible, setContentVisible] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleLinkClick = (buttonId) => {
    setActiveButton(buttonId);
    // setContentVisible(true);
  };

  return (
    <div>
      <nav>
        <NavLink to="/" onClick={() => handleLinkClick(1)}>
          <li>
            <button className={activeButton === 1 ? "red" : "basic-button"}>
              Home
            </button>
          </li>
        </NavLink>
        <NavLink to="/menu" onClick={() => handleLinkClick(2)}>
          <li>
            <button className={activeButton === 2 ? "red" : "basic-button"}>
              Menu
            </button>
          </li>
        </NavLink>
        <NavLink to="/about-us" onClick={() => handleLinkClick(3)}>
          <li>
            <button className={activeButton === 3 ? " red" : "basic-button"}>
              About Us
            </button>
          </li>
        </NavLink>
      </nav>
      {/* {isContentVisible && (
        <div>
          <p>This content will appear after clicking a link.</p>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
