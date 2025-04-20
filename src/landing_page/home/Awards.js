import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Left Column: Image */}
        <div className="col-12 col-md-6 p-4 text-center">
          <img src="media/image/largestBroker.svg" className="img-fluid" alt="Largest Broker" />
        </div>

        {/* Right Column: Content */}
        <div className="col-12 col-md-6 p-4">
          <h1 className="mt-4 mb-4">Largest Stock Broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* List Section */}
          <div className="row mb-4">
            <div className="col-6">
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity Derivatives</p></li>
                <li><p>Currency Derivatives</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct Mutual Funds</p></li>
                <li><p>Bonds and Govt Securities</p></li>
              </ul>
            </div>
          </div>

          {/* Press Logos Image */}
          <div className="text-center">
            <img src="media/image/pressLogos.png" className="img-fluid w-90" alt="Press Logos" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
