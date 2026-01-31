import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Title */}
      <div className="row py-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      {/* Content */}
      <div className="row py-4 align-items-center text-muted">
        {/* Image */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="/media/images/nithin-kamath.jpg"
            alt="Team member profile"
            className="img-fluid mb-3"
            style={{
              borderRadius: "50%",
              maxWidth: "220px",
            }}
          />
          <h4 className="mt-2">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        {/* Text */}
        <div className="col-12 col-md-6 px-3 px-md-4 text-start text-md-start">
          <p className="lh-lg">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader.
          </p>

          <p className="lh-lg">
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="lh-lg">Playing basketball is his zen.</p>

          <p>
            🔗{" "}
            <a
              href="https://www.linkedin.com/in/misbah-mansoori/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Connect on LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
