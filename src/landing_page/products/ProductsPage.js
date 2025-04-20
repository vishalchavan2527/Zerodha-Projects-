import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/image/kite.png "
        prductName="Kite"
        productDesription="Our ultra-fast flagship trading platform with
            streaming market data, advanced charts, an elegant UI, and more.
            Enjoy the Kite experience seamlessly on your Android and iOS
            devices."
        tryDemo=""
        leranMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
       imageURL="media\image\console.png"
       prductName="Console"
       productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and 
             investments with in-depth reports and visualisations."
       leranMore=""
      />

      <LeftSection
        imageURL="media\image\coin.png"
        prductName="Coin"
        productDesription="Buy direct mutual funds online, commission-free,
         delivered directly to your Demat account. 
         Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        leranMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection 
       imageURL="media\image\kiteconnect.png"
       prductName="Kite Connect API"
       productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. 
                     If you are a startup, build your investment app and showcase it to our clientbase."
       leranMore=""
      />

      <LeftSection
        imageURL="media\image\varsity.png"
        prductName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        leranMore=""
        googlePlay=""
        appStore=""
      />

      <p className="text-center mt-3 mb-3 fs-5">Want to know more about our technology stack? Check out the <a href="#" className="text-decoration-none">Zerodha.tech blog.</a></p>
      <Universe />
    </>
  );
}

export default ProductsPage;
