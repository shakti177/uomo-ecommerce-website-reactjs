import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.png";
import paymentIcon from "../../Assets/paymentIcon.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed Successfully");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer_left">
            <div className="footer_logo_container">
              <img src={logo} alt="" Z />
            </div>

            <p>1418 River Drive, Suite 35 Cottonhall, CA 9622 United States</p>

            <div className="footer_address">
              <strong> sale@uomo.com </strong>
              <strong> +1 246-345-0695 </strong>
            </div>

            <div className="social_links">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaPinterest />
            </div>
          </div>

          <div className="footer_content">
            <h5>Company</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/about">Career</Link>
                </li>
                <li>
                  <Link to="*">Affilates</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_content">
            <h5>Shop</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/shop">New Arrivals</Link>
                </li>
                <li>
                  <Link to="/shop">Accessories</Link>
                </li>
                <li>
                  <Link to="/shop">Men</Link>
                </li>
                <li>
                  <Link to="/shop">Women</Link>
                </li>
                <li>
                  <Link to="/shop">Shop All</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_content">
            <h5>Help</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/contact">Customer Service</Link>
                </li>
                <li>
                  <Link to="/loginSignUp">My Account</Link>
                </li>
                <li>
                  <Link to="/contact">Find a Store</Link>
                </li>
                <li>
                  <Link to="/about">Legal & Privacy</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/">Gift Card</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_right">
            <h5>Subscribe</h5>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>

            <form onSubmit={handleSubscribe}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Join</button>
            </form>

            <h6>Secure Payments</h6>
            <div className="paymentIconContainer">
              <img src={paymentIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>
            © 2024 Uomo. All Rights Reserved | Made By{" "}
            <a
              href="https://github.com/shakti177"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#C22928", textDecoration: "none" }}
            >
              Shakti Tamrakar
            </a>{" "}
            with ❤️
          </p>
          <div className="footerLangCurrency">
            <div className="footerLang">
              <p>Language</p>
              <select name="language" id="language">
                <option value="english">United States | English</option>
                <option value="Hindi">Hindi</option>
                <option value="Germany">Germany</option>
                <option value="French">French</option>
              </select>
            </div>
            <div className="footerCurrency">
              <p>Currency</p>
              <select name="currency" id="currency">
                <option value="USD">$ USD</option>
                <option value="INR">₹ INR</option>
                <option value="EUR">€ EUR</option>
                <option value="GBP">£ GBP</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
