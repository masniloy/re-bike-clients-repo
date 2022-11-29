import React from 'react';
import banner from '../Banner/banner.gif';

const Banner = () => {
    return (
        <div className="hero min-h-full  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} className="max-w-full rounded-lg my-10" />
                <div>
                    <h1 className="text-5xl font-bold">Complete your dream!</h1>
                    <p className="py-6">Re-bike is a trusted shop to buy a second hand bike. Bikes in good condition are available here. Without doubt you can buy bike from Re-bike</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;