import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

const Header = () => {
  const [isHoveredCustomers, setIsHoveredCustomers] = useState(false);
  const [isHoveredBusiness, setIsHoveredBusiness] = useState(false);
  const [isHoveredPartners, setIsHoveredPartners] = useState(false);

  return (
    <div className="header-container">
      {/* For Customers Dropdown */}
      <div
        className="dropdown"
        onMouseEnter={() => setIsHoveredCustomers(true)}
        onMouseLeave={() => setIsHoveredCustomers(false)}
      >
        <button
          className="btn btn-danger dropdown-toggle"
          type="button"
          aria-expanded={isHoveredCustomers}
        >
          For Customers
        </button>
        <ul className={`dropdown-menu ${isHoveredCustomers ? "show" : ""}`}>
          <li>
            <a className="dropdown-item" href="/customers/qr-payment">
              QR Payments
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/customers/fonepay-direct">
              Fonepay Direct
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/customers/fonepay-bills">
              Fonepay Bills
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/customers/fonepay-app">
              Fonepay App
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/customers/fonetag">
              FoneTAG
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/customers/fonepay-credit-card">
              Fonepay Credit Card
            </a>
          </li>
        </ul>
      </div>

      {/* For Business Dropdown */}
      <div
        className="dropdown"
        onMouseEnter={() => setIsHoveredBusiness(true)}
        onMouseLeave={() => setIsHoveredBusiness(false)}
      >
        <button
          className="btn btn-danger dropdown-toggle"
          type="button"
          aria-expanded={isHoveredBusiness}
        >
          For Business
        </button>
        <ul className={`dropdown-menu ${isHoveredBusiness ? "show" : ""}`}>
          <li>
            <a className="dropdown-item" href="/business/grow">
              Grow your Business
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/business/app">
              Business App
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/business/download-qr">
              Download your QR
            </a>
          </li>
        </ul>
      </div>
      {/* For Partners Dropdown */}
      <div
        className="dropdown"
        onMouseEnter={() => setIsHoveredPartners(true)}
        onMouseLeave={() => setIsHoveredPartners(false)}
      >
        <button
          className="btn btn-danger dropdown-toggle"
          type="button"
          aria-expanded={isHoveredPartners}
        >
          For Partners
        </button>
        <ul className={`dropdown-menu ${isHoveredPartners ? "show" : ""}`}>
          <li>
            <a className="dropdown-item" href="/business/grow">
              Become our partner
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/business/app">
             BFI Portal
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
