import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <div className='container p-5 mb-4'>
            <div className='row justify-content-center text-center'>
                <div className='col-12 col-md-8'>
                    <img 
                        src='media/image/homeHero.png' 
                        alt='Hero Image' 
                        className='img-fluid w-100 mb-4'
                    />
                    <h1 className='mt-4'>Invest in everything</h1>
                    <p className="lead">
                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    </p>
                    <button className='btn btn-primary mb-4 w-50 w-md-auto'>Sign Up</button>
                    
                </div>
            </div>
        </div>
    );
}

export default Hero;
