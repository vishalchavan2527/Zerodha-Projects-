import React from 'react'

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row justify-content-center text-center'>
                <h1 className='mb-3'>The Zerodha Universe</h1>
                <p className='fs-5 mt-3 mb-4'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-lg-4 col-md-6 col-sm-12 p-3 mt-4 text-center'>
                    <img src='media\image\zerodhaFundhouse.png' className='img-fluid' style={{width:"60%"}} alt='Zerodha Fundhouse logo' />
                    <p className='text-small  text-muted mt-3'>
                        Our asset management venture that is creating 
                        simple and transparent index funds to help you save for your goals..</p>
                </div>
                

                <div className='col-lg-4 col-md-6 col-sm-12 p-3 mt-4 text-center'>
                    <img src='media\image\sensibullLogo.svg' className='img-fluid' style={{width:"50%"}} alt='Zerodha Fundhouse logo' />
                    <p className='text-small  text-muted mt-5'>
                       Options trading platform that lets you
                       create strategies, analyze positions, and examine
                       data points like open interest, FII/DII, and more.
                     </p>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 p-3 mt-4 text-center'>
                    <img src='media\image\smallcaseLogo.png' className='img-fluid' style={{width:"60%"}} alt='Zerodha Fundhouse logo' />
                    <p className='text-small  text-muted mt-3'>Thematic investing platform
                       that helps you invest in diversified
                       baskets of stocks on ETFs.</p>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 p-3 mt-4 text-center'>
                    <img src='media\image\dittoLogo.png' className='img-fluid' style={{width:"40%"}} alt='Zerodha Fundhouse logo' />
                    <p className='text-small  text-muted m-3'>Thematic investing platform
                       that helps you invest in diversified
                       baskets of stocks on ETFs.</p>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 p-3 mt-4 text-center'>
                    <img src='media\image\goldenpiLogo.png' className='img-fluid' style={{width:"60%"}} alt='Zerodha Fundhouse logo' />
                    <p className='text-small  text-muted m-3'>Investment research platform
                       that offers detailed insights on stocks,
                       sectors, supply chains, and more.
                     </p>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 p-3 mt-4 text-center'>
                    <img src='media\image\streakLogo.png' className='img-fluid' style={{width:"50%"}} alt='Zerodha Fundhouse logo' />
                    <p className='text-small  text-muted m-3'>Systematic trading platform
                       that allows you to create and backtest
                       strategies without coding.
                     </p>
                </div>

                <button className='btn btn-primary mb-4  w-md-auto'  style={{width:"22%"}}>Sign Up</button>
            </div>
        </div>
     );
}

export default Universe