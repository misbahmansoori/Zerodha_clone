import React from "react";


function RaiseTicket() {
  return (
    <div className="container">
      <div className="row py-5">
        <h1 className="fs-3 fw-semibold mb-5 text-center">
          Choose a topic to get help or guidance
        </h1>

        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="ticket-card">
            <h4 className="ticket-title">
              <i className="fa fa-plus-circle me-2" /> Getting Started
            </h4>

            <div className="ticket-links">
              <a href="/support">How demo portfolios work</a>
              <a href="/support">Understanding virtual funds</a>
              <a href="/support">First steps for beginners</a>
              <a href="/support">Navigating the platform</a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="ticket-card">
            <h4 className="ticket-title">
              <i className="fa fa-plus-circle me-2" /> Using the Simulator
            </h4>

            <div className="ticket-links">
              <a href="/support">Placing simulated trades</a>
              <a href="/support">Understanding outcomes</a>
              <a href="/support">Testing ideas safely</a>
              <a href="/support">Common mistakes to avoid</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="ticket-card">
            <h4 className="ticket-title">
              <i className="fa fa-plus-circle me-2" /> Learning & Feedback
            </h4>

            <div className="ticket-links">
              <a href="/support">Learning resources overview</a>
              <a href="/support">Concept explanations</a>
              <a href="/support">Share feedback or suggestions</a>
              <a href="/support">Report an issue</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RaiseTicket;
