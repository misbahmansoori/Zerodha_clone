import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="py-4" id="supportWrapper">
        <h4 className="mb-0 fw-semibold">Help & Support</h4>

        {/* external link is fine */}
        <a
          href="https://zerodha-clone-dusky-beta.vercel.app/support"
          className="fw-medium"
        >
          View past questions
        </a>
      </div>

      <div className="container py-5">
        <div className="row align-items-start">
          <div className="col-md-6 mb-4">
            <h1 className="fs-4 fw-semibold mb-4">
              Find answers or explore topics to get guidance
            </h1>

            <input
              placeholder="Eg. how does a demo portfolio work?"
              className="support-search mb-4"
            />

            <div className="support-links">
              <Link to="/support">Getting started</Link>
              <Link to="/support">Using the simulator</Link>
              <Link to="/support">Understanding portfolios</Link>
              <Link to="/support">Learning resources</Link>
            </div>
          </div>

          <div className="col-md-6">
            <h2 className="fs-5 fw-semibold mb-3">Popular topics</h2>
            <ol className="featured-list">
              <li>
                <Link to="/support">How demo portfolios are designed</Link>
              </li>
              <li>
                <Link to="/support">Common beginner mistakes to avoid</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
