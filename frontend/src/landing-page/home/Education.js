import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src="/media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "350px" }}
          />
        </div>

        <div className="col-md-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>

          <p>
            Varsity, the largest online stock market education book covering
            everything from basics to advanced trading.
          </p>

          <a href="/not-found" style={{ textDecoration: "none" }}>
            Varsity →
          </a>

          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India.
          </p>

          <a href="/not-found" style={{ textDecoration: "none" }}>
            TradingQ&A →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
