import React from "react";
import "../index.css";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          {/* Logo + copyright */}
          <div className="col-12 col-sm-6 col-md-3 mb-4 text-center text-md-start">
            <img
              src="/media/images/logo.svg"
              alt="Logo"
              style={{ width: "140px" }}
              className="mb-3"
            />
            <p>
              &copy; 2010 – 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col-12 col-sm-6 col-md-3 mb-4 text-center text-md-start">
            <p className="fw-semibold">Company</p>
            <a href="/about">About</a>
            <br />
            <a href="/product">Products</a>
            <br />
            <a href="/pricing">Pricing</a>
          </div>

          {/* Support */}
          <div className="col-12 col-sm-6 col-md-3 mb-4 text-center text-md-start">
            <p className="fw-semibold">Support</p>
            <a href="/support">Contact</a>
            <br />
            <a href="/support">Support portal</a>
            <br />
            <a href="/pricing">List of charges</a>
          </div>

          {/* Account */}
          <div className="col-12 col-sm-6 col-md-3 mb-4 text-center text-md-start">
            <p className="fw-semibold">Account</p>
            <a
              href="https://zerodha-clone-dusky-beta.vercel.app/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open an account
            </a>
          </div>
        </div>

        {/* Disclaimer text */}
        <div className="mt-4 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633. This is a clone project created for learning and
            portfolio purposes only.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            This project does not provide financial advice or stock tips. Any
            resemblance to real platforms is for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
