import React from 'react'

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-3 p-md-5 mt-3 mt-md-5'>
                <div className='col-12 col-md-8 p-3 p-md-4  text-muted'>
                   <a href='#' style={{textDecoration :"none"}}> <h3 className='fs-5 mb-4  text-center text-md-start'>Brokerage Calculator</h3> </a>
                   <ul style={{textAlign : "left", lineHeight:"1.9", fontSize:"13px"}}>
                    <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                    <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                    <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                   </ul>
                </div>
                <div className='col-12 col-md-4 p-3 p-md-4 text-center'>
                <a href='#' style={{textDecoration :"none"}} > <h3 className='fs-5'>List of Charges</h3> </a> 
                </div>
            </div>
        </div>
     );
}

export default Brokerage;