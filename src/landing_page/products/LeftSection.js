import React from "react";

function LeftSection({
  imageURL,
  prductName,
  productDesription,
  tryDemo,
  leranMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12 text-center p-5">
          <img src={imageURL} alt="product_image" className="img-fluid"/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start p-5 mt-3">
          <h1>{prductName}</h1>
          <p>
            {productDesription}
          </p>
         <div>
         <a href={tryDemo} className="mx-3 text-decoration-none"> Try Demo <i className="fa-solid fa-arrow-right"></i></a>
         <a href={leranMore} className="mx-3 text-decoration-none">Leran More <i className="fa-solid fa-arrow-right"></i></a>
         </div>
          <div className="mt-5">
          <a href={googlePlay}>
            <img src="media\image\googlePlayBadge.svg" alt="google_play"/>
            </a>
          <a href={appStore} style={{marginLeft:"50px"}}> 
             <img src="media\image\appstoreBadge.svg" alt="app_store"/>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
