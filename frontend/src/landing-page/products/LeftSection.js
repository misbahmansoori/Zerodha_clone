import React from "react";
import { Link } from "react-router-dom";

function LeftSection({ imageURL, productName, productDesription }) {
  return (
    <div className="container py-4 py-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            className="img-fluid product-image"
            alt={productName}
          />
        </div>

        <div className="col-12 col-md-6 px-3 px-md-5">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDesription}</p>

          <div className="d-flex flex-wrap gap-3 mb-3">
            <a
              href="https://zerodha-clone-dusky-beta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Demo
            </a>

            <Link to="/not-found">Learn More</Link>
          </div>

          <div className="d-flex gap-3">
            <img
              src="/media/images/googlePlayBadge.svg"
              className="store-badge"
              alt="Google Play"
            />
            <img
              src="/media/images/appstoreBadge.svg"
              className="store-badge"
              alt="App Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
