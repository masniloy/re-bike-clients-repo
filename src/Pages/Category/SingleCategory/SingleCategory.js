import React, { } from 'react';
const SingleCategory = ({ product }) => {
    console.log(product);
    const { product_name, seler_name, email, img, original_price, resale_price, use, description, location, phone } = product;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="p-3">
                    <h2 className="card-title ">Product Name: {product_name}</h2>
                    <p><b>Description:</b> {original_price} </p>
                    <p><b>Resale Price:</b> {resale_price} </p>
                    <p><b>Used:</b> {use}</p>
                    <p><b>Seler Name:</b> {seler_name}</p>
                    <p><b>Email:</b> {email}</p>
                    <p><b>Phone:</b> {phone}</p>
                    <p><b>Location:</b> {location}</p><br />
                    <p> <b>Description:</b> {description}</p><br />

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;