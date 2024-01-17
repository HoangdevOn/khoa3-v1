import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/products" className="footer-link">
            Products
          </Link>
          <Link to="/services" className="footer-link">
            Services
          </Link>
          <Link to="/about" className="footer-link">
            About Us
          </Link>
        </div>
        <div className="footer-copyright">
          &copy; 2024 Công ty Cổ phần MXH Tinh Tế. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
