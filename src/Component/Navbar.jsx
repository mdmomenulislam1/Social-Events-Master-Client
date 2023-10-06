import { NavLink } from "react-router-dom";
import { BsPersonAdd } from "react-icons/bs";


const Navbar = () => {


    return (
        <div className="navbar bg-orange-200 lg:px-16 lg:py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
                        }
                    >
                        Home
                    </NavLink></li>

                    <li><NavLink
                        to="/myEvents"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
                        }
                    >
                        My Events
                    </NavLink></li>

                    <li><NavLink
                        to="/explore"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
                        }
                    >
                        Explore
                    </NavLink></li>

                    <li><NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
                        }
                    >
                        Login
                    </NavLink></li>

                    <li><NavLink
                        to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
                        }
                    >
                        Register
                    </NavLink></li>


                    </ul>
                </div>
                <h2 className="text-3xl text-white font-bold">Social Events Master</h2>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">

                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
                        }
                    >
                        Home
                    </NavLink></li>

                    <li><NavLink
                        to="/myEvents"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
                        }
                    >
                        My Events
                    </NavLink></li>

                    <li><NavLink
                        to="/explore"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
                        }
                    >
                        Explore
                    </NavLink></li>


                    <li><NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
                        }
                    >
                        Login
                    </NavLink></li>


                    <li><NavLink
                        to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
                        }
                    >
                        Register
                    </NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <BsPersonAdd className="text-3xl font-bold mx-5"></BsPersonAdd>
                <a className="btn">Log In / Log Out </a>

            </div>
        </div>
    );
};

export default Navbar;