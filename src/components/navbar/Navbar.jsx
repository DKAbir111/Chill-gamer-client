import { Link, NavLink } from "react-router-dom"
import Logo from '/game.png'

export default function Navbar() {
    const links = <>
        <NavLink to='/' className={({ isActive }) =>
            isActive ? "text-pink-300" : "text-white"
        }>Home</NavLink>
        <NavLink to='/allreview' className={({ isActive }) =>
            isActive ? "text-pink-300" : "text-white"
        }>All Reviews</NavLink>
        <NavLink to='/addreview' className={({ isActive }) =>
            isActive ? "text-pink-300" : "text-white"
        }>Add Review</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "text-pink-300" : "text-white"
        }>My Reviews </NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "text-pink-300" : "text-white"
        }>Game WatchList </NavLink>
    </>
    return (
        <nav className="bg-black">
            <div className="navbar text-white container mx-auto py-4">
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
                            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost">
                        <img src={Logo} alt="" className="h-full" />
                        <span className="text-2xl font-bold">ChilGam</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-5 font-semibold">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <Link className="btn btn-sm rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none text-white">Login</Link>
                    <Link className="btn btn-sm rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none text-white">Register</Link>
                </div>
            </div>
        </nav>
    )
}
