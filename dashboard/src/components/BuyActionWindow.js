import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = async () => {
    await axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    closeBuyWindow();
  };

  return (
    <>
      {/* Backdrop */}
      <div className="buy-backdrop" onClick={closeBuyWindow}></div>

      {/* Modal */}
      <div className="buy-modal">
        <div className="buy-header">
          <h3>Buy {uid}</h3>
          <span className="close" onClick={closeBuyWindow}>×</span>
        </div>

        <div className="buy-body">
          <div className="field">
            <label>Quantity</label>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Price</label>
            <input
              type="number"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </div>

          <p className="margin">Margin required ₹140.65</p>
        </div>

        <div className="buy-footer">
          <button className="cancel-btn" onClick={closeBuyWindow}>
            Cancel
          </button>
          <button className="buy-btn" onClick={handleBuyClick}>
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default BuyActionWindow;
