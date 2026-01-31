import React from "react";

function Hero() {
  return (
    <div className="container py-4 py-md-5 mb-5">
      <div className="row text-center">
        {/* Hero Image */}
        <img
          src="/media/images/homeHero.png"
          alt="Hero illustration"
          className="img-fluid mb-4 mb-md-5"
        />

        {/* Heading */}
        <h1 className="mt-3 mt-md-4">
          Invest in everything
        </h1>

        {/* Subtitle */}
        <p className="px-2 px-md-0">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

        {/* CTA */}
        <a
          href="http://localhost:3000/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary fs-5 mt-3"
          style={{
            width: "220px",
            margin: "0 auto",
          }}
        >
          Signup Now
        </a>
      </div>
    </div>
  );
}

export default Hero;
