import React from "react";

function Universe() {
  return (
    <div className="container py-4 py-md-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience with partner platforms
        </p>

        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="col-6 col-md-4 p-3 mt-3">
            <img
              src="/media/images/smallcaseLogo.png"
              alt="Partner platform"
              className="img-fluid mb-2"
              style={{ maxWidth: "140px" }}
            />
            <p className="text-muted small">
              Thematic investment platform
            </p>
          </div>
        ))}

        <a
          href="http://localhost:3000/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary fs-5 mt-4"
          style={{ width: "220px", margin: "0 auto" }}
        >
          Signup Now
        </a>
      </div>
    </div>
  );
}

export default Universe;
