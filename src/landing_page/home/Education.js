import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Column - Image */}
        <div className="col-12 col-md-6 text-center">
          <img src="media/image/education.svg" className="img-fluid w-90" alt="Education" />
        </div>

        {/* Right Column - Text & Links */}
        <div className="col-12 col-md-6">
          <h1 className="mb-4 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none text-primary fw-bold">
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a href="#" className="text-decoration-none text-primary fw-bold">
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
