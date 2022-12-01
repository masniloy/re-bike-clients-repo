import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';

const Navbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, []);

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/category"><li><a>Category</a></li></Link>
                        <Link to="/blogs"><li><a>Blogs</a></li></Link>
                    </ul>
                </div>
                <Link to='/' className='flex '>
                    <img src={logo} className="w-20" ></img>
                    <a className="ml-4 text-2xl"><b>Re-Bike</b> </a>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <div className="dropdown">
                        <Link tabIndex={0} className="btn btn-ghost m-1">Category</Link>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                categories.map(category => <li key={category._id}><Link to={`/category/${category._id}`}>{category.categoryName}</Link></li>)
                            }
                        </ul>
                    </div>

                    <Link className='btn btn-ghost m-1' to="/blogs"><li><a>Blogs</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <Link to="/login"><li><a>Login</a></li></Link>

                    </ul>
                </div>
            </div><br /><br />


        </div>
    );
};

export default Navbar;