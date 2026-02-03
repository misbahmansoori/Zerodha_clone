import React from "react";
import { Link } from "react-router-dom";

function RightSection({ imageURL, productName, productDesription }) {
  return (
    <div className="container py-4 py-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 px-3 px-md-5 order-2 order-md-1">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDesription}</p>

          <Link to="/not-found">Learn More</Link>
        </div>

        <div className="col-12 col-md-6 text-center mb-4 mb-md-0 order-1 order-md-2">
          <img
            src={imageURL}
            className="img-fluid product-image"
            alt={productName}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
