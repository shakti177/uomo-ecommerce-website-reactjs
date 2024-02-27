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

  return (
    <div>
      <footer className="footer">
        <div className="footerContainer">
          <div className="footerContent">
            <div className="footerLogo">
              <img src={logo} alt="" />
            </div>
            <div className="footerAddress">
              <h6>
                1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
              </h6>
              <div className="footerContact">
                <h4>sale@uomo.com</h4>
                <h4>+1 246-345-0695</h4>
              </div>
            </div>
            <div className="socialLink">
              <FaFacebookF size={15} />
              <FaXTwitter size={15} />
              <FaInstagram size={15} />
              <FaYoutube size={15} />
              <FaPinterest size={15} />
            </div>
          </div>
          <div className="footerContent">
            <h5>Company</h5>
            <div className="linksContainer">
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/about">Careers</Link>
                </li>
                <li>
                  <Link to="/about">Affiliates</Link>
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
          <div className="footerContent">
            <h5>Shop</h5>
            <div className="linksContainer">
              <ul>
                <li>
                  <Link to="/about">New Arrivals</Link>
                </li>
                <li>
                  <Link to="/about">Accessories</Link>
                </li>
                <li>
                  <Link to="/about">Men</Link>
                </li>
                <li>
                  <Link to="/blog">Women</Link>
                </li>
                <li>
                  <Link to="/contact">Shop All</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerContent">
            <h5>Help</h5>
            <div className="linksContainer">
              <ul>
                <li>
                  <Link to="/about">Customer Service</Link>
                </li>
                <li>
                  <Link to="/about">My Account</Link>
                </li>
                <li>
                  <Link to="/about">Find a Store</Link>
                </li>
                <li>
                  <Link to="/blog">Legal & Privacy</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/contact">Gift Card</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerContent">
            <h5>Subscribe</h5>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="subscribe">
              <form action="" onSubmit={handleSubscribe}>
                <input type="text" placeholder="Your email address" required />
                <button type="submit">Join</button>
              </form>
            </div>
            <div className="footerPayments">
              <h6>Secure payments</h6>
              <div className="paymentIcon">
                <img src={paymentIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
