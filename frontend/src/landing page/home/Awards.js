import React from "react";

function Awards() {
  return (
    <div className="container py-4 py-md-5">
      <div className="row align-items-center">
        {/* LEFT SECTION */}
        <div className="col-12 col-md-6 px-3 px-md-4">
          <h1 className="fs-2 fw-bold mb-4">Learn with Confidence</h1>

          <h2 className="fs-5 fw-semibold mt-4">Learning-first design</h2>
          <p className="text-muted lh-lg">
            The platform is designed to help beginners understand how markets
            work through hands-on practice, not pressure or real-money risk.
          </p>

          <h2 className="fs-5 fw-semibold mt-4">No pressure, no real money</h2>
          <p className="text-muted lh-lg">
            Practice investing with virtual funds. Make mistakes, test ideas,
            and learn freely without worrying about losses.
          </p>

          <h2 className="fs-5 fw-semibold mt-4">A skill-building ecosystem</h2>
          <p className="text-muted lh-lg">
            From simulated trades to portfolio analysis and learning resources,
            everything works together to strengthen your financial skills.
          </p>

          <h2 className="fs-5 fw-semibold mt-4">Build smarter money habits</h2>
          <p className="text-muted lh-lg">
            The goal isn’t just placing trades, but helping users understand
            risk, discipline, and long-term thinking in investing.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
          <img
            src="/media/images/ecosystem.png"
            alt="Learning ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "420px" }}
          />

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a
              href="/product"
              style={{ textDecoration: "none", fontWeight: 500 }}
            >
              Explore features →
            </a>

            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", fontWeight: 500 }}
            >
              Try demo portfolio →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
