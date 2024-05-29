import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

import { RiMenu2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { RiShoppingBagLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="navBar">
        <div className="logoLinkContainer">
          <div className="logoContainer">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="linkContainer">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="iconContainer">
          <FiSearch size={22} />
          <Link to="/loginSignUp">
            <FaRegUser size={22} />
          </Link>

          <Badge
            badgeContent={3}
            color="primary"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <RiShoppingBagLine size={22} />
          </Badge>
          <FiHeart size={22} />
          <RiMenu2Line size={22} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav>
        <div className="mobile-nav">
          <RiMenu2Line size={22} onClick={toggleMobileMenu} />
          <div className="logoContainer">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <Badge
            badgeContent={3}
            color="primary"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <RiShoppingBagLine size={22} />
          </Badge>
        </div>
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMobileMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={toggleMobileMenu}>
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={toggleMobileMenu}>
                BLOG
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMobileMenu}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMobileMenu}>
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="mobile-menuFooter">
            <Link to="/loginSignUp">
              <FaRegUser />
              <p>My Account</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
