import { Link, useNavigate } from 'react-router-dom';
import boyGame from '../../assets/boy-game.png';
import gameAnim from '../../assets/game-anim.gif';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import Title from '../title/Title';
import { MdFileUpload } from "react-icons/md";

export default function Register() {
    const { createUser, DbUserInfo, darkMode } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [photo, setPhoto] = useState('')
    const navigate = useNavigate()
    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasDigit = /\d/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUpperCase) return "Password must contain at least one uppercase letter.";
        if (!hasLowerCase) return "Password must contain at least one lowercase letter.";
        if (!hasSpecialChar) return "Password must contain at least one special character.";
        if (!hasDigit) return "Password must contain at least one digit.";
        if (!isValidLength) return "Password must be at least 6 characters long.";
        return null;
    };

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;
        const newUser = { name, email, photo };

        const validationError = validatePassword(password);
        if (validationError) {
            toast.error(validationError);
            return;
        }

        createUser(email, password)
            .then((result) => {
                if (result) {
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photo,
                    });
                    DbUserInfo(newUser);
                    toast.success("Account created successfully!");
                    event.target.reset();
                    navigate('/')
                }
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };
    const ImageRef = useRef(null)
    const handlePhotoUpload = (e) => {
        const photo = e.target.files[0];
        if (!photo) return;
        const formData = new FormData();
        formData.append('image', photo)
        try {
            fetch('https://api.imgbb.com/1/upload?key=5c73e82c6c39c531a41a2361f2681168', {
                method: 'POST',
                body: formData

            }).then(res => res.json())
                .then(data => {
                    setPhoto(data.data.
                        display_url)
                })

        } catch (err) {
            console.error(err);
            return;
        }
    }

    return (
        <section className={darkMode ? "dark" : ""}>
            <Title title="Register|ChillGam" />
            <div className="flex flex-col lg:flex-row justify-center items-center bg-gray-900 py-10 lg:py-20 p-2 dark:bg-black">
                <div data-aos="fade-right" className="relative flex justify-center">
                    <img src={boyGame} alt="Boy playing game" className="w-3/5 md:w-full animate-flooting" />
                    <img src={gameAnim} alt="Game animation" className="absolute -z-10 opacity-70" />
                </div>
                <div
                    className="card w-full bg-gray-800 max-w-md shrink-0 shadow-lg text-white dark:bg-gray-900"
                    data-aos="fade-up"
                >
                    <form className="card-body" onSubmit={handleRegister}>
                        <h2 className="text-xl font-semibold text-center">Register</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                className="input input-bordered bg-gray-700 text-white"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="input input-bordered bg-gray-700 text-white"
                                required
                            />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white">Photo</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Photo URL"
                                name="photo"
                                defaultValue={photo}
                                className="input input-bordered bg-gray-700 text-white"
                                required
                            />
                            <input type="file" className='hidden' name='file' ref={ImageRef} onChange={handlePhotoUpload} />
                            <span onClick={() => ImageRef.current.click()} className='btn btn-sm absolute bg-gray-700 text-white border-none right-1 top-11'><MdFileUpload /></span>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input
                                type={showPass ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                className="input input-bordered bg-gray-700 text-white"
                                required
                            />
                            <div className="absolute right-1 top-11">
                                <span
                                    onClick={() => setShowPass(!showPass)}
                                    className="btn btn-sm bg-gray-700 border-none hover:bg-gray-700 shadow-none text-white"
                                >
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn text-white bg-gradient-to-r to-indigo-500 via-purple-500 from-pink-500 border-none">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="flex justify-center pb-5">
                        <small className="text-center">
                            Already have an account?
                            <Link to="/login" className="text-pink-500 hover:underline ml-1">
                                Login
                            </Link>
                        </small>
                    </div>
                </div>
            </div>
        </section>
    );
}
