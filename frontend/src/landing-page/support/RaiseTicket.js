import React from "react";
import { Link } from "react-router-dom";

function RaiseTicket() {
  return (
    <div className="container">
      <div className="row py-5">
        <h1 className="fs-3 fw-semibold mb-5 text-center">
          Choose a topic to get help or guidance
        </h1>

        <div className="col-md-4 mb-4">
          <div className="ticket-card">
            <h4 className="ticket-title">
              <i className="fa fa-plus-circle me-2" /> Getting Started
            </h4>

            <div className="ticket-links">
              <Link to="/support">How demo portfolios work</Link>
              <Link to="/support">Understanding virtual funds</Link>
              <Link to="/support">First steps for beginners</Link>
              <Link to="/support">Navigating the platform</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="ticket-card">
            <h4 className="ticket-title">
              <i className="fa fa-plus-circle me-2" /> Using the Simulator
            </h4>

            <div className="ticket-links">
              <Link to="/support">Placing simulated trades</Link>
              <Link to="/support">Understanding outcomes</Link>
              <Link to="/support">Testing ideas safely</Link>
              <Link to="/support">Common mistakes to avoid</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="ticket-card">
            <h4 className="ticket-title">
              <i className="fa fa-plus-circle me-2" /> Learning & Feedback
            </h4>

            <div className="ticket-links">
              <Link to="/support">Learning resources overview</Link>
              <Link to="/support">Concept explanations</Link>
              <Link to="/support">Share feedback or suggestions</Link>
              <Link to="/support">Report an issue</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaiseTicket;
