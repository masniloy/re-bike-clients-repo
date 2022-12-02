import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../logo.png';
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    useEffect(() => {

        fetch('https://re-bike.vercel.app/category')
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
                        <div className="dropdown dropdown-right">
                            <Link className='btn btn-ghost m-1' to="/"><li><a>Home</a></li></Link>
                            <Link to="/blogs" className='btn btn-ghost'><li><a>Blogs</a></li></Link>
                            <Link tabIndex={0} className="btn btn-ghost m-1">Category</Link>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    categories.map(category => <li key={category._id}><Link to={`/category/${category._id}`}>{category.categoryName}</Link></li>)
                                }
                            </ul>

                        </div>

                    </ul>
                </div>
                <Link to='/' className='flex '>
                    <img src={logo} className="w-20" ></img>
                    <a className="ml-4 text-2xl"><b>Re-Bike</b> </a>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link className='btn btn-ghost m-1' to="/"><li><a>Home</a></li></Link>
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

                <Link>
                    {
                        user?.uid ?
                            <>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://placeimg.com/80/80/people" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <Link onClick={handleLogOut}><li><a>Log Out</a></li></Link>
                                    </ul>
                                </div>
                            </>
                            : <>

                                <Link to="/login"><FaUserAlt />Login</Link>


                            </>
                    }
                </Link>


            </div><br /><br />


        </div>
    );
};

export default Navbar;