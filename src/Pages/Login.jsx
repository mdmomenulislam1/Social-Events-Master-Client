import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="px-14 mx-auto">

            <div className="py-10 flex justify-center items-center" style={{ backgroundImage: 'url(https://i.ibb.co/d28FwhB/wedding-1846114-960-720.jpg' }}>
                <div className="rounded-2xl bg-green-900 text-white">
                    <div className="shadow-2xl">
                        <form className="card-body w-[500px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-2xl font-semibold">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-2xl font-semibold">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt text-white link link-hover font-semibold">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-red-700 font-bold text-center text-white p-3 rounded-lg">Login</button>
                            </div>
                        </form>

                        <p className="flex p-10 font-semibold"> Are you New? Please <Link to="/register" className="px-2"><span> Register</span></Link></p>



                    </div>


                    <h3 className="text-center text-3xl p-5 font-bold"> Or </h3>
                    <div className="flex justify-center items-center gap-10 mb-10">
                        <Link className=" gap-2 flex justify-center items-center">
                            <BsFacebook className="text-2xl"></BsFacebook>
                            <button className="p-5 btn">Facebook</button>
                        </Link>
                        <Link className=" gap-2 flex justify-center items-center">
                            <BsGoogle className="text-2xl"></BsGoogle>
                            <button className="p-5 btn">Google</button>
                        </Link>
                        <Link className=" gap-2 flex justify-center items-center">
                            <BsGithub className="text-2xl"></BsGithub>
                            <button className="p-5 btn">Github</button>
                        </Link>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Login;