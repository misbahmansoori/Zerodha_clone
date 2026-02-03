import React from "react";
import { Link } from "react-router-dom";

function Brokerage() {
  return (
    <div className="container">
      <div className="row py-4 py-md-5 mt-5 border-top align-items-start">
        <div className="col-12 col-md-8 mb-4 mb-md-0">
          <h3 className="fs-6 fw-semibold text-center mb-4">
            What You Can Do on the Platform
          </h3>

          <ul className="text-muted small" style={{ lineHeight: "2.2" }}>
            <li>Create and manage a demo investment portfolio.</li>
            <li>Simulate trades to understand market movements.</li>
            <li>Track portfolio performance with clear insights.</li>
            <li>Experiment with strategies without real-money risk.</li>
            <li>Learn core investing concepts through hands-on practice.</li>
            <li>Build confidence before entering real financial markets.</li>
          </ul>

          <div className="text-center mt-4">
            <Link
              to="/project-scope"
              style={{ textDecoration: "none", fontWeight: 500 }}
            >
              Learn more about platform features →
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-4 text-center">
          <img
            src="/media/images/featuresOverview.jpg"
            alt="Platform features overview"
            className="img-fluid mb-3 rounded-circle bg-light p-3"
            style={{ maxWidth: "180px" }}
          />
          <h3 className="fs-6 fw-semibold">Learning-first experience</h3>
          <p className="text-muted small">
            Everything is designed to support clarity, practice, and gradual
            skill-building.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
