import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";
import Title from "../title/Title";

const ReviewDetails = () => {
    const { user } = useContext(AuthContext)

    const gameData = useLoaderData()
    const navigate = useNavigate()
    const location = useLocation()
    const handleWatchList = async () => {

        const watchList = {
            ...gameData,
            name: user.displayName,
            email: user.email,
            insertedId: gameData._id
        }
        delete watchList._id;
        try {
            await fetch('https://chill-gamer-server-sandy.vercel.app/watchlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(watchList)
            }).then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('Game added to watchlist')
                        return;
                    }
                    toast.error(data.message)
                })

        } catch {
            toast.error('Failed to add game to watchlist')
        }

    }
    return (
        <div className="bg-gradient-to-t relative from-gray-900 to-black h-screen lg:h-[600px] flex flex-col justify-center items-center">
            <Title title="Review Details|ChillGam" />
            {
                gameData ? (<div className="w-11/12 md:w-10/12 gap-5 mx-auto p-5 border border-gray-700 rounded-lg flex flex-col lg:flex-row justify-between relative  bg-gray-800 bg-opacity-30">
                    <div className="absolute -top-16">
                        <button onClick={() => { navigate(location.state ? "/" : -1) }} className="btn  rounded-full h-9 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 border-none text-white"><FaArrowLeft />Go Back</button>
                    </div>
                    <div className="flex flex-col gap-3 lg:w-1/2">
                        <div className="flex-1 space-y-2">
                            <p className="text-lg font-thin text-pink-400">Review Details</p>
                            <h2 className="text-white text-4xl">{gameData.title}</h2>
                            <p className="text-gray-400">{gameData.review}</p>
                            <p className="text-gray-400">Published Year: {gameData.year}</p>
                            <p className="text-gray-400">Genre: {gameData.genre}</p>
                        </div>

                        <div>
                            <button onClick={handleWatchList} className="btn border-pink-400 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Add to WatchList
                            </button>

                        </div>
                        <div className="text-center border-t border-gray-700 pt-4 italic">
                            <p className="text-sm text-gray-500">Reviewed by:</p>
                            <p className="text-white">{gameData.name}</p>
                            <p className="text-pink-400 text-sm">{gameData.email}</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative order-first lg:order-last">
                        <img src={gameData.cover} alt={gameData.title} className="object-cover min-h-44 md:h-full w-full rounded-lg" />
                        <div className="h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 bg-gradient-to-r flex flex-col justify-center items-center  to-indigo-500 via-purple-500 from-pink-500 
                rounded-full absolute -top-20 -right-6 md:-right-20">
                            <h2 className="text-white text-3xl md:text-5xl font-bold text-center">{gameData.rating}+</h2>
                            <p className="text-lg font-bold text-white">Rating</p>

                        </div>
                    </div>
                </div>) : <div className="p-10 text-center">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">
                        No data available at the moment. It may have been removed or is currently inaccessible.
                    </h3>
                    <button
                        onClick={() => navigate(-1)}
                        className="btn rounded-full px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold border-none">
                        <FaArrowLeft />Go Back
                    </button>
                </div>


            }
        </div>
    );
};

export default ReviewDetails;
