import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')

    const handleSignIn = (data) => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            });
    }


    return (
        <div className="">
            <div className="mx-4 hero ">
                <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                    <div className="mx-auto text-center lg:text-left">
                        <h1 className=" text-center text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Re-Bike is the best platform to buy/sell second hand motorcycle. You can simply post your free add and get call from interested buyer from anywhere. Check valid document/papers, current condition of the bike and deal with the seller in right way.</p>
                    </div>
                    <div className="mx-auto card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-8">

                        <form onSubmit={handleSubmit(handleSignIn)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"><b>Email</b></span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email Address is required" })} />
                                {errors.mail && <p role="alert">{errors.email?.message}</p>}
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"><b>Password</b></span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
                                <label className="label">
                                    <span className="label-text ">Fotrget Password?</span>
                                </label>
                            </div>
                            <div>
                                {
                                    loginError && <p className="text-red-500">{loginError}</p>
                                }
                            </div>

                            <br />
                            <input className='btn btn-primary w-full' value="Login" type="submit" />
                            <label className="label">
                                <span className="label-text ">I don't have any account !</span><Link to="/signup" className='text-cyan-500'>Creat new account</Link>
                            </label>
                            <div className="divider">OR</div>
                            <button className='btn btn-outline btn-primary w-full'>Continue With Google</button>
                        </form>
                    </div>
                </div>
            </div><br /><br />

        </div >
    );
};

export default Login;