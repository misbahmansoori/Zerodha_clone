import React from "react";

function OpenAccount() {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-4">Open a Zerodha account</h1>

        <p className="mt-2">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <a
          href="http://localhost:3000/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary fs-5 mt-3"
          style={{
            width: "220px",
            margin: "0 auto",
            display: "block",
          }}
          aria-label="Open account signup"
        >
          Signup Now
        </a>
      </div>
    </div>
  );
}

export default OpenAccount;
