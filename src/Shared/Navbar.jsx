import { Link, } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";

const Navbar = () => {
    // const {user, logOut} = useAuth();
    // const handleSignOut = ()=>{
    //     logOut()
    //     .then()
    //     .catch()
    // }

    const navItems = <>
        <li className="font-semibold font-serif gap-5"><Link to='/'>Home</Link></li>
        <li className="font-semibold font-serif gap-5"><Link to='/alltourists'>All Tourists Spot</Link></li>
        <li className="font-semibold font-serif gap-5"><Link to='/addTourSpots'>Add Tourists Spot</Link></li>
        <li className="font-semibold font-serif gap-5"><Link to='/mylist'>My List</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
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
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/'><img className="w-[50%]" src="/Images/I_ll_Design_Your_Travel_Logo-removebg-preview.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    {
                        user ? <>
                            <span className="font-bold">{user?.displayName}</span>
                            <img className="w-7 lg:w-10 rounded-full" src={user?.photoURL} />
                            <button onClick={handleSignOut} className="btn text-white bg-teal-500 hover:text-teal-500 hover:bg-white font-bold">Log Out</button>
                        </>
                            :
                            <Link to="/login"><button className="btn text-white bg-teal-500 font-bold hover:text-teal-500 hover:bg-white">Login</button></Link>
                    }
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;