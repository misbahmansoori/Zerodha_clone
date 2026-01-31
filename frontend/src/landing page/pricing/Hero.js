import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Header */}
      <div className="row py-4 py-md-5 mt-4 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-2 fs-6 fs-md-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Pricing Cards */}
      <div className="row py-4 py-md-5 text-center">
        <div className="col-12 col-md-4 p-3">
          <img
            src="/media/images/pricingEquity.svg"
            alt="Free equity delivery"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px" }}
          />
          <h2 className="fs-5">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3">
          <img
            src="/media/images/intradayTrades.svg"
            alt="Intraday and F&O trades"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px" }}
          />
          <h2 className="fs-5">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order across
            equity, currency, and commodity trades.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3">
          <img
            src="/media/images/pricingEquity.svg"
            alt="Free direct mutual funds"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px" }}
          />
          <h2 className="fs-5">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
