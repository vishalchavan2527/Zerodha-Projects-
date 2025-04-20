import React from 'react'

function Hero() {
    return ( 
     <section className="container-fluit py-5 " id='support_hero'>
      <div className=" text-center mb-4" id='support_title'>
        <h4> Support Portal</h4>
        <a href='#'>Track ticket</a>
        </div>

      <div className=" row mb-4" id='support_title'>
       <div className=" col-md-6 p-3 ">
         <h1 className='fs-3 mb-3'>Search for an answer or browse help topics to create a ticket</h1>
         <input type='text' className="form-control mb-3"placeholder='Eg: how to i activate F&O, why is my order rejected...'/><br/>
         <div className='d-flex flex-wrap gap-3'>
         <a href='#'>Track account opening</a>
         <a href='#'>Track segment activation</a>
         <a href='#'> Intraday margins</a>
         <a href='#'>Kite user manual</a>
         </div>
        
       </div>
       <div className=" col-md-6  p-4" >
       <h1 className='fs-3 ps-2'>Featured</h1>

       <ol className='ps-3 gap-3'>
         <li><a href='#'>Surveillance measure on scrips - March 2025</a></li>
         <li><a href='#'>Latest Intraday leverages and Square-off timings</a></li>
       </ol>
         
         
       </div>
        </div>
      </section>
     );
}

export default Hero;