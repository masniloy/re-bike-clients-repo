import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <button type="button" class=" ..." disabled>
            <svg class="animate-spin h-10 w-10 mr-3 bg-indigo-500 ..." viewBox="0 0 24 24">
            </svg>
            Processing...
        </button>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;