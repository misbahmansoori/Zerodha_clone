import React from "react";

function RightSection({ imageURL, productName, productDesription }) {
  return (
    <div className="container py-4 py-md-5">
      <div className="row align-items-center">
        {/* Content */}
        <div className="col-12 col-md-6 px-3 px-md-5 order-2 order-md-1">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDesription}</p>

          <a href="/not-found">Learn More</a>
        </div>

        {/* Image */}
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
