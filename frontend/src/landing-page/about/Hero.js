import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row py-4 py-md-5 mt-4 mb-4 text-center">
        <h1 className="fs-4 fs-md-2">
          We pioneered the discount broking model in India
          <br className="d-none d-md-block" />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      {/* Content */}
      <div className="row py-4 py-md-5 border-top text-muted">
        <div className="col-12 col-md-6 px-3 px-md-5 mb-4 mb-md-0">
          <p className="lh-lg">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology.
          </p>

          <p className="lh-lg">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p className="lh-lg">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms.
          </p>
        </div>

        <div className="col-12 col-md-6 px-3 px-md-5">
          <p className="lh-lg">
            In addition, we run a number of popular open online educational and
            community initiatives.
          </p>

          <p className="lh-lg">
            <a
              href="https://rainmatter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups.
          </p>

          <p className="lh-lg">
            Catch up on the latest updates on our{" "}
            <a
              href="https://zerodha.tech"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              tech blog
            </a>{" "}
            or see what the media is saying about us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
