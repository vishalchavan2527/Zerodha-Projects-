import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-3 mt-md-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h4 className="text-muted mt-2 fs-5">
          Free equity investments and flat ₹20 traday and F&0 trades{" "}
        </h4>
      </div>

      <div className="row p-5 mt-5 text center">
        <div className="col-12 col-md-4 p-3 p-md-5">
          <img src="media\image\pricing0.svg" alt="Zerodha Price logo" />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 p-md-5">
          <img src="media\image\intradayTrades.svg" alt="Zerodha Price logo" />
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 p-md-5">
          <img src="media\image\pricingEquity.svg" alt="Zerodha Price logo" />
          <h1 className="fs-4">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
