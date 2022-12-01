import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from './SingleCategory/SingleCategory';

const Category = () => {
    const singleData = useLoaderData();
    const { product } = singleData;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                product.map(product => <SingleCategory key={product._id} product={product}></SingleCategory>)
            }

        </div >
    );
};

export default Category;