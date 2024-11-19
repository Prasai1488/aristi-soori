// HomePage.jsx
import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="container">
            <div className="row min-vh-100 align-items-center justify-content-center">
              <div className="col-md-8 text-center">
                <p className="tagline mb-3">
                  Shaping the future of Digital Nepal
                </p>
                <h1 className="hero-title">
                  <span className="text-danger">Seamless Payments</span>
                  <br />
                  <span className="text-white">Anytime, Anywhere.</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Section */}
      <div className="qr-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="qr-content pe-lg-5">
                <h2 className="qr-title">
                  <span className="text-danger">Fonepay</span> QR
                </h2>
                <p className="qr-description mt-3">
                  Make digital payments instantly through your mobile banking
                  app.
                </p>
                <button className="learn-more-btn mt-4">
                  Learn More <span>&gt;</span>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="qr-image-container">
                <img
                  src="https://d2kbvjszk9d5ln.cloudfront.net/yshop/upload/pic/can-all-phones-scan-QR-codes-20231225074235758.jpg"
                  alt="Fonepay QR scanning interface"
                  className="img-fluid qr-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Section */}
      <div className="qr-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="qr-image-container">
                <img
                  src="https://img.freepik.com/premium-photo/mobile-online-banking-concept_12892-62.jpg?semt=ais_hybrid"
                  alt="Fonepay QR scanning interface"
                  className="img-fluid qr-image"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="qr-content ps-lg-5">
                <h2 className="qr-title">
                  <span className="text-danger">Fonepay</span> Direct
                </h2>
                <p className="qr-description mt-3">
                  Make your money Transfer-Instant, Convenient & secure.
                </p>
                <button className="learn-more-btn mt-4">
                  Learn More <span>&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
