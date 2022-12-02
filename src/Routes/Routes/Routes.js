import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import Category from '../../Pages/Category/Category';
import Error4o4 from '../../Pages/Error4o4/Error4o4';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DeshboardLayout from '../../Layout/DeshboardLayout';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Booked from '../../Pages/Booked/Booked';


const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error4o4></Error4o4>,
        children: [
            {
                path: '/',
                errorElement: <Error4o4></Error4o4>,
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/category/:id',
                loader: async ({ params }) => {
                    return fetch(`https://re-bike.vercel.app/category/${params.id}`)
                },
                element: <PrivateRoute><Category></Category></PrivateRoute>
            },

        ]
    },
    {

        path: '/dashboard',
        element: <PrivateRoute><DeshboardLayout></DeshboardLayout> </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/booked',
                element: <Booked></Booked>
            },
        ]

    }
])




export default router;