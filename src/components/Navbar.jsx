import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            {/* <div className="navbar bg-base-100 font-roboto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl gap-0">Sayeed<span className="text-[#70ff00]">Hossain</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                        <li><a><FaGithub className="text-2xl" /></a></li>
                        <li><a><FaLinkedin className="text-2xl" /></a></li>
                        
                    </ul>
                </div>
            </div> */}

            <div className="navbar bg-base-100 font-inter">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl gap-0">Sayeed<span className="text-[#70ff00]">Hossain</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-ghost"><FaGithub className="text-2xl" /></a>
                    <a className="btn btn-ghost"><FaLinkedin className="text-2xl" /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;