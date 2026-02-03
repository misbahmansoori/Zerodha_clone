import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">🚧 Feature Coming Soon</h1>

        <Link
          to="/"
          className="btn btn-outline-primary mt-4"
          style={{ width: "200px", margin: "0 auto" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
