import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import "./Products.css";

function ProductsPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="/media/images/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more."
      />

      <RightSection
        imageURL="/media/images/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account with detailed reports and insights."
      />

      <LeftSection
        imageURL="/media/images/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account."
      />

      <RightSection
        imageURL="/media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with simple HTTP/JSON APIs."
      />

      <LeftSection
        imageURL="/media/images/varsity.png"
        productName="Varsity mobile"
        productDesription="An easy-to-grasp collection of stock market lessons with in-depth coverage."
      />

      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack?{" "}
        <a href="/not-found" style={{ textDecoration: "none" }}>
          Visit our tech blog →
        </a>
      </p>

      <Universe />
    </>
  );
}

export default ProductsPage;
