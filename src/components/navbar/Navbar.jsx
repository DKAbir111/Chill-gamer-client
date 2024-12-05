import { Link, NavLink, useNavigate } from "react-router-dom"
import Logo from '/game.png'
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { toast } from "react-toastify";

export default function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .cath(error => {
                toast.error(error.message)
            })
    }
    const links = <>
        <NavLink to='/' className={({ isActive }) =>
            isActive ? "text-pink-300" : "text-white"
        }>Home</NavLink>
        <NavLink to='/allreview' className={({ isActive }) =>
            isActive ? "text-pink-300" : "text-white"
        }>All Reviews</NavLink>
        {
            user && <>
                <NavLink to='/addreview' className={({ isActive }) =>
                    isActive ? "text-pink-300" : "text-white"
                }>Add Review</NavLink>
                <NavLink to={'/myreview'} className={({ isActive }) =>
                    isActive ? "text-pink-300" : "text-white"
                }>My Reviews </NavLink>
                <NavLink to={`/game-watch-list/${user.email}`} className={({ isActive }) =>
                    isActive ? "text-pink-300" : "text-white"
                }>Game WatchList </NavLink>
            </>
        }
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
                        <img src={Logo} alt="" className="h-full hidden md:block" />
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
                    {
                        user?.email ?
                            <>
                                <span className="tooltip tooltip-left p-1 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 rounded-full" data-tip={user?.displayName}><img src={user?.photoURL} alt="user" className="rounded-full w-9 h-9" /></span>
                                <button onClick={handleLogOut} className="btn btn-sm rounded-full h-9 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 border-none text-white">Log Out</button>
                            </> :
                            <> <Link to='/login' className="btn btn-sm rounded-full h-9 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 border-none text-white">Login</Link>
                                <Link to='/register' className="btn btn-sm rounded-full h-9 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 border-none text-white">Register</Link></>
                    }
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-9 w-9 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-9 w-9 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
            </div>
        </nav>
    )
}
