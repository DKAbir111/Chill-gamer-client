
import { Link, useNavigate } from 'react-router-dom'
import boyGame from '../../assets/boy-game.png'
import gameAnim from '../../assets/game-anim.gif'
import 'aos/dist/aos.css';
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Login() {
    const { googleSignIn, signIn } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                if (result?.user?.email) {
                    toast.success('Logged in successfully')
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
            });
    }
    const handleSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(result => {
                if (result?.user?.email) {
                    toast.success('Logged in successfully')
                    e.target.reset();
                    navigate('/')
                }
            }).catch(error => {
                toast.error(error.message)
            })

    }
    return (
        <div className="flex flex-col md:flex-row  justify-center items-center bg-gray-900 md:py-20 pb-20 p-2">
            <div data-aos="fade-right" className='relative flex justify-center'>
                <img src={boyGame} alt="" className='w-3/5' />
                <img src={gameAnim} alt="" className='absolute -z-10 opacity-70' />
            </div>
            <div className="card w-full bg-gray-800 max-w-md shrink-0 shadow-lg text-white" data-aos="fade-left">
                <form className="card-body " onSubmit={handleSignIn}>
                    <h2 className='text-xl font-semibold text-center'>Login</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name='email' className="input input-bordered bg-gray-700 text-white" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type={showPass ? "text" : "password"} placeholder="Password" name='password' className="input input-bordered bg-gray-700 text-white" required />
                        <div className='absolute right-1 top-11'>
                            <span onClick={() => setShowPass(!showPass)} className='btn btn-sm bg-gray-700 border-none hover:bg-gray-700 shadow-none text-white'>{
                                showPass ? <FaEyeSlash /> : <FaEye />
                            } </span>
                        </div>
                        <label>
                            <Link className="text-xs text-white hover:underline">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn text-white bg-gradient-to-r  to-indigo-500 via-purple-500 from-pink-500 border-none">Login</button>
                    </div>
                </form>
                <div className="px-20 cursor-pointer mb-4">
                    <span
                        className="flex items-center gap-1 rounded-md p-2 justify-center text-sm" onClick={handleGoogleSignIn}>
                        <FcGoogle className="text-2xl" /> Sign in with Google
                    </span>
                </div>
                <div className="flex justify-center pb-5">
                    <small className="text-center">
                        Don’t Have An Account?
                        <Link to="/register" className="text-pink-500 hover:underline ml-1">
                            Register
                        </Link>
                    </small>
                </div>
            </div>
        </div>


    )
}
