import React from 'react';
import { Link } from 'react-router-dom';

const SingleAdvertise = ({ category }) => {
    return (
        <div className=''>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <p>{category.categoryName}</p>
                    <div className="card-actions justify-end">
                        <Link className='btn' to={`/category/${category._id}`} >Products</Link>
                    </div>
                </div>
            </div><br />
        </div >
    );
};

export default SingleAdvertise;