import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container border-bottom mb-4 mb-md-5">
      <div className="text-center mt-4 mt-md-5 py-3">
        <h1>Technology</h1>

        <h3 className="text-muted mt-2 fs-6 fs-md-4">
          Sleek, modern and intuitive trading platforms
        </h3>

        <p className="mt-3 mb-4">
          Check out our{" "}
          <Link to="/product" style={{ textDecoration: "none" }}>
            investment offerings →
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
