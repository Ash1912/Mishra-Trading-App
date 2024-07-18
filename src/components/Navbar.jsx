import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/images/Logo_MTC.jpg";


function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);

  // Setup event listener correctly in useEffect to avoid memory leaks and ensure it only runs once
  useEffect(() => {
    const html = document.querySelector("html");
    const handleHtmlClick = () => setNavState(false);
    html.addEventListener("click", handleHtmlClick);
    return () => html.removeEventListener("click", handleHtmlClick);
  }, []);

  return (
    <nav>
      <div className="container py-3 mx-3">
        <div className="brand">
          <img src={logo} alt="Mishra Trading Company Logo" className="logo" />
          <span>Mishra Traders </span>
          <span className="dot">.</span>
        </div>
        <div className="links-container" onClick={(e) => e.stopPropagation()}>
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavState(true);
                }}
              />
            )}
            <div onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <ImSun className="sun" />
              ) : (
                <BsFillMoonFill className="moon" />
              )}
            </div>
          </div>
          <div className={`links ${navState ? "responsive-toggle" : ""}`}>
            <ul>
              <li>
              <Link to="home" smooth={true} duration={1000} className="nav-link" activeClass="active" exact>
              Home
             </Link>
              </li>
              <li>
              <Link to="about" smooth={true} duration={1000} className="nav-link" activeClass="active">
              About
             </Link>
              </li>
              <li>
              <Link to="services-container" smooth={true} duration={1000} className="nav-link" activeClass="active">
              Services
              </Link>
              </li>
              <li>
              <Link to="categories-container" smooth={true} duration={1000} className="nav-link" activeClass="active">
              Categories
             </Link>
              </li>
              <li>
              <Link to="contact" smooth={true} duration={1000} className="nav-link" activeClass="active">
              Contact
             </Link>
              </li>
              <li onClick={changeTheme} className="color-mode">
                {currentTheme === "dark" ? (
                  <ImSun className="sun" />
                ) : (
                  <BsFillMoonFill className="moon" />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
