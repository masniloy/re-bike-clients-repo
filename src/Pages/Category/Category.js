import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from './BookModal/BookModal';
import SingleCategory from './SingleCategory/SingleCategory';

const Category = () => {
    const singleData = useLoaderData();
    const { product } = singleData;
    const [bookingProduct, setBookingProduct] = useState(null);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                product.map(product => <SingleCategory key={product._id} product={product} setBookingProduct={setBookingProduct}></SingleCategory>)
            }
            {
                bookingProduct &&
                <BookModal booking={bookingProduct} setBookingProduct={setBookingProduct} ></BookModal>
            }

        </div >

    );
};

export default Category;