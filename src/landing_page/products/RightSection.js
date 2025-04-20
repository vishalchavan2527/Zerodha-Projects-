import React from 'react'

function RightSection({ 
    imageURL,
    prductName,
    productDesription,
    leranMore}) {
    return (  
        <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start p-5 mt-3">
            <h1>{prductName}</h1>
            <p>
              {productDesription}
            </p>
           <div>
           <a href={leranMore} className="text-decoration-none">Leran More <i className="fa-solid fa-arrow-right"></i></a>
           </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 text-center p-5">
            <img src={imageURL} alt="product_image" className="img-fluid"/>
          </div>
        </div>
      </div>
    );
}

export default RightSection;