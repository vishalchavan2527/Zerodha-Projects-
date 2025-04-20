import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center mt-5 p-3">
        <h1>Zerodha Products</h1>
        <h3 className="fs-4 text-muted mt-3">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3">
          Check out our
          <a href="#" className="mx-2 text-decoration-none">
            investment offerings <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
