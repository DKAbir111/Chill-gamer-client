import { useNavigate } from "react-router-dom";

const ReviewDetails = () => {
    const gameData = {
        cover: "https://c4.wallpaperflare.com/wallpaper/292/805/107/battlefield-1-battlefield-wallpaper-preview.jpg",
        title: "Battle Royale Pro",
        year: "2022",
        genre: "Adventure",
        rating: "7",
        review: "It is an incredible journey through stunning landscapes with challenging puzzles.",
        email: "darun15-14188@diu.edu.bd",
        name: "DARUN KARAS ABIR 201-15-14188",
    };
    const navigate = useNavigate()
    return (
        <div className="bg-gradient-to-t relative from-gray-900 to-black h-[600px] flex flex-col justify-center items-center">


            <div className="container gap-5 mx-auto p-5 border border-gray-700 rounded-lg flex justify-between relative  bg-gray-800 bg-opacity-30">
                <div className="absolute -top-16">
                    <button onClick={() => navigate(-1)} className="btn  rounded-full h-9 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 border-none text-white">← Go Back</button>
                </div>
                <div className="flex flex-col gap-3 w-1/2">
                    <div className="flex-1 space-y-4">
                        <p className="text-lg font-thin text-pink-400">Review Details</p>
                        <h2 className="text-white text-4xl">{gameData.title}</h2>
                        <p className="text-gray-400">{gameData.review} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus provident corrupti facilis? Et numquam debitis ab sunt, aperiam magnam commodi.</p>
                        <p className="text-gray-400">Published Year: {gameData.year}</p>
                        <p className="text-gray-400">Genre: {gameData.genre}</p>
                    </div>

                    <div className="text-center border-t border-gray-700 pt-4 italic">
                        <p className="text-sm text-gray-500">Reviewed by:</p>
                        <p className="text-white">{gameData.name}</p>
                        <p className="text-pink-400 text-sm">{gameData.email}</p>
                    </div>
                </div>
                <div className="w-1/2 relative">
                    <img src={gameData.cover} alt={gameData.title} className="object-cover h-full w-full rounded-lg" />
                    <div className="h-44 w-44 bg-gradient-to-r flex flex-col justify-center items-center  to-indigo-500 via-purple-500 from-pink-500 
                    rounded-full absolute -top-20 -right-20">
                        <h2 className="text-white text-5xl font-bold text-center">{gameData.rating}+</h2>
                        <p className="text-lg font-bold text-white">Rating</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;
