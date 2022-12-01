import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider';
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser } = useContext(AuthContext)

    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="mx-auto card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-8">

                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"><b>Your Name</b></span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered w-full max-w-xs" {...register("name", { required: "Email Address is required" })} />
                        {errors.mail && <p role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"><b>Email</b></span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs" {...register("email", { required: true })} />
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"><b>Password</b></span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
                    </div>
                    <label className="label">
                        <span className="label-text"><b>IMAGE</b></span>
                        <input type="file" class="file-input file-input-bordered file-input-xs w-full max-w-xs m-3" />
                    </label>



                    <input className='btn btn-primary w-full' value="Sign up" type="submit" />
                    <label className="label">
                        <span className="label-text ">Already have an account.</span><Link to="/login" className='text-cyan-500'>Please login</Link>
                    </label>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline btn-primary w-full'>Continue With Google</button>
                </form>
            </div>
            <br /><br /><br />
        </div >
    );
};

export default Signup;