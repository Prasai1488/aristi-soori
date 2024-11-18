import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import aristi from "../../assets/aristi.png"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          {/* Company Section */}
          <div className="col-md-3 col-sm-6">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="/about">About Fonepay</a></li>
              <li><a href="/directors">Board of Directors</a></li>
              <li><a href="/management">Management Team</a></li>
              <li><a href="/partners">Fonepay Partners</a></li>
            </ul>
          </div>

          {/* News & Media Section */}
          <div className="col-md-3 col-sm-6">
            <h5>News & Media</h5>
            <ul className="list-unstyled">
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/notices">Notices</a></li>
              <li><a href="/investor">Investor Relation</a></li>
              <li><a href="/resources">Resources</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="col-md-3 col-sm-6">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="/terms">Terms and Conditions</a></li>
              <li><a href="/fees">Fees & Charges</a></li>
              <li><a href="/policy">Information Security Policy</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-md-3 col-sm-6">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/career">Career</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
          <p>Copyright © 2024 Fonepay Payment Service Limited. All Rights Reserved.</p>
          <p>Subsidiary of <img src={aristi} alt="Logo" className="footer-logo" /></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
