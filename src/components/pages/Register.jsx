
import { Link } from 'react-router-dom'
import boyGame from '../../assets/boy-game.png'
import gameAnim from '../../assets/game-anim.gif'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { updateProfile } from 'firebase/auth'
import auth from '../../Firebase/firebase.init'
export default function Register() {
    const { createUser, DbUserInfo } = useContext(AuthContext)
    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;
        const newUser = { name, email, photo };
        createUser(email, password)
            .then(result => {
                if (result) {
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photo
                    })
                    DbUserInfo(newUser)
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="flex flex-col md:flex-row justify-center items-center bg-gray-900 py-20 p-2">
            <div data-aos="fade-right" className='relative flex justify-center'>
                <img src={boyGame} alt="" className='w-3/5' />
                <img src={gameAnim} alt="" className='absolute -z-10 opacity-70' />
            </div>
            <div className="card w-full bg-gray-800 max-w-md shrink-0 shadow-lg text-white" data-aos="fade-left">
                <form className="card-body " onSubmit={handleRegister}>
                    <h2 className='text-xl font-semibold text-center'>Register</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered bg-gray-700 text-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name='email' className="input input-bordered bg-gray-700 text-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered bg-gray-700 text-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name='password' className="input input-bordered bg-gray-700 text-white" required />
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
