import { useContext } from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../Firebase/AuthProvider";
import { Result } from "postcss";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";


const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, provider)
        .then()
        .catch
    }


    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location i n the login page', location)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                // navigate after login
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="px-14 mx-auto">

            <div className="py-10 flex justify-center items-center" style={{ backgroundImage: 'url(https://i.ibb.co/d28FwhB/wedding-1846114-960-720.jpg' }}>
                <div className="rounded-2xl bg-green-900 text-white">
                    <div className="shadow-2xl">
                        <form onSubmit={handleLogin}  className="card-body w-[500px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-2xl font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-2xl font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered  text-black" required />
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
                        <Link onClick={handleLogin} className=" gap-2 flex justify-center items-center">
                            <BsGoogle className="text-2xl"></BsGoogle>
                            <button onClick={handleGoogleSignIn} className="p-5 btn">Google</button>
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