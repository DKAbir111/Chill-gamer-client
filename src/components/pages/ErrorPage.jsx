import { Link } from "react-router-dom";
import Title from "../title/Title";

export default function ErrorPage() {
    return (
        <div className='flex justify-center items-center h-screen bg-black'>
            <Title title="Error|ChillGam" />
            <div className="bg-gray-800 p-7 shadow-lg flex flex-col gap-3 justify-center items-center w-1/3 rounded-lg">
                <h2 className="text-white text-7xl font-bold text-center">404</h2>
                <h3 className="text-2xl text-white text-center">Page not Found</h3>
                <p className="text-gray-400 text-center ">The page you are looking for no longer exists. Perhaps you can return back to the site’s homepage.</p>
                <Link to={'/'} className="btn text-white bg-gradient-to-r  to-indigo-500 via-purple-500 from-pink-500 border-none rounded-full">Back Home</Link>
            </div>
        </div>
    )
}
