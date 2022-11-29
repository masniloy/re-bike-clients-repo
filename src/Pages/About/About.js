import React from 'react';
import about from '../About/About.jpg';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6">It's a certified second hand bike company. We buy best quality bike and sale it in reasonable price. For buying a second hand product Trust is so important. Our company is fully trusted and our users are toitally satisfied of aur services. Re-Bike is the best platform to buy/sell second hand motorcycle. You can simply post your free add and get call from interested buyer from anywhere. Check valid document/papers, current condition of the bike and deal with the seller in right way.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;