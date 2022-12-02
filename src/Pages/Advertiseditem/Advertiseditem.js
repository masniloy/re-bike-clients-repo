import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleAdvertise from './SingleAdvertise';
const Advertiseditem = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch('https://re-bike.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, []);
    return (
        <div className=' flex-row'>
            {/* <div >

                

            </div>
            <div>
                <img src="" alt="" />
            </div> */}


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src="https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="max-w-sm rounded-lg shadow-2xl lg:mr-48 mb-9" />
                    <div>
                        <h1 className="text-4xl font-bold">{
                            categories.map(category => <SingleAdvertise key={category._id}
                                category={category}></SingleAdvertise>)
                        }</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertiseditem;