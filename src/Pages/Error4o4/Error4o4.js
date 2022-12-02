import React from 'react';
import { Link } from 'react-router-dom';

const Error4o4 = () => {
    return (
        <div className="lg:px-96">
            <img src="https://img.freepik.com/premium-vector/page-found-404-error-concept-illustration_270158-294.jpg?w=740" alt="4 o 4" />
            <Link to="/home"><button className='btn btn-primary'>Go back to home</button></Link>

        </div>
    );
};

export default Error4o4;