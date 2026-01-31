import React from "react";


function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Top bar */}
      <div className="py-4" id="supportWrapper">
        <h4 className="mb-0 fw-semibold">Help & Support</h4>
        <a href="" className="fw-medium">
          View past questions
        </a>
      </div>

      {/* Main content */}
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
              <a href="">Getting started</a>
              <a href="">Using the simulator</a>
              <a href="">Understanding portfolios</a>
              <a href="">Learning resources</a>
            </div>
          </div>

          <div className="col-md-6">
            <h2 className="fs-5 fw-semibold mb-3">Popular topics</h2>
            <ol className="featured-list">
              <li>
                <a href="">How demo portfolios are designed</a>
              </li>
              <li>
                <a href="">Common beginner mistakes to avoid</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
