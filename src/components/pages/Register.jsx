
import { Link } from 'react-router-dom'
import boyGame from '../../assets/boy-game.png'
import gameAnim from '../../assets/game-anim.gif'
export default function Register() {

    return (
        <div className="flex justify-center items-center bg-gray-900 py-20">
            <div data-aos="fade-right" className='relative'>
                <img src={boyGame} alt="" className='w-3/5' />
                <img src={gameAnim} alt="" className='absolute top-0 -z-10 -left-10 opacity-70' />
            </div>
            <div className="card w-full bg-gray-800 max-w-md shrink-0 shadow-2xl text-white" data-aos="fade-left">
                <form className="card-body ">
                    <h2 className='text-xl font-semibold text-center'>Register</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered bg-gray-700 text-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered bg-gray-700 text-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Photo</span>
                        </label>
                        <input type="url" placeholder="Photo URL" className="input input-bordered bg-gray-700 text-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered bg-gray-700 text-white" required />
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn text-white bg-gradient-to-r  to-indigo-500 via-purple-500 from-pink-500 border-none">Register</button>
                    </div>
                </form>
                <div className="flex justify-center pb-5">
                    <small className="text-center">
                        Already An Account?
                        <Link to="/login" className="text-pink-500 hover:underline ml-1">
                            Login
                        </Link>
                    </small>
                </div>
            </div>
        </div>


    )
}
