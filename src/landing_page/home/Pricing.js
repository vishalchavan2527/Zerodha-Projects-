import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row mt-4 align-items-center text-center text-md-start">
        {/* Left Section */}
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none">
            See Pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Empty Spacer for Medium & Larger Screens */}
        <div className="d-none d-md-block col-md-2"></div>

        {/* Right Section: Pricing Boxes */}
        <div className="col-12 col-md-5 mb-5">
          <div className="row text-center">
            <div className="col-12 col-sm-6 border p-3">
              <h1 className="mb-3">0</h1>
              <p>Free equity delivery and <br /> direct mutual funds</p>
            </div>
            <div className="col-12 col-sm-6 border p-3">
              <h1 className="mb-3">20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
