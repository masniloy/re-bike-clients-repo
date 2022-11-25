import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="">
            <div className="mx-4 hero ">
                <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                    <div className="mx-auto text-center lg:text-left">
                        <h1 className=" text-center text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Re-Bike is the best platform to buy/sell second hand motorcycle. You can simply post your free add and get call from interested buyer from anywhere. Check valid document/papers, current condition of the bike and deal with the seller in right way.</p>
                    </div>
                    <div className="mx-auto card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p>Don't have Account <Link className='text-sky-500' to='/Signup' >Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div><br /><br />

        </div>
    );
};

export default Login;