import React from "react";

function Stats() {
  return (
    <div className="container">
      <div className="row py-4 py-md-5 mt-5 text-center border-top">
        <div className="col-12 col-md-8 p-3 p-md-4 text-start">
          <a href="/pricing" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>

          <ul style={{ lineHeight: "2.2", fontSize: "13px" }}>
            <li>Call & Trade: ₹50 + GST per order</li>
            <li>Digital contract notes via email</li>
            <li>Physical notes: ₹20 per note + courier</li>
            <li>NRI (non-PIS): 0.5% or ₹100 per order</li>
            <li>NRI (PIS): 0.5% or ₹200 per order</li>
            <li>Debit balance orders: ₹40 per order</li>
          </ul>
        </div>

        <div className="col-12 col-md-4 p-3 p-md-4 text-start text-md-center">
          <a href="/pricing" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stats;
