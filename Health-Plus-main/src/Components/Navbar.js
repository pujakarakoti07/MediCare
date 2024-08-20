import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "./security/AuthProvider";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/" className="logo">
          Health <span className="navbar-sign">+</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">Home</Link>
        </li>
        <li>
          <Link to="/services" className="navbar-links">Services</Link>
        </li>
        <li>
          <a href="#about" className="navbar-links">About</a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">Reviews</a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">Doctors</a>
        </li>
        {isAuthenticated ? (
          <li>
            <button onClick={logout} className="navbar-links">Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/login" className="navbar-links">Patient Login</Link>
          </li>
        )}
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faCommentDots} /> Live Chat
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">Home</Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">Services</a>
          </li>
          <li>
            <a onClick={openNav} href="#about">About</a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">Reviews</a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">Doctors</a>
          </li>
          {isAuthenticated ? (
            <li>
              <button onClick={() => { openNav(); logout(); }} className="mobile-navbar-links">Logout</button>
            </li>
          ) : (
            <li>
              <Link onClick={openNav} to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
