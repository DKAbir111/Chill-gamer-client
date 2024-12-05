export default function Adventure() {
    return (
        <div className="relative h-[550px]">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/game-1.mp4"
                autoPlay
                loop
                muted
            ></video>
            <div className="relative z-10 flex flex-col justify-center h-full bg-black bg-opacity-60 text-white items-center">
                <div className="w-1/2 mx-auto border p-10 rounded-lg backdrop-blur-sm bg-transparent flex justify-center flex-col items-center bg-gray-400 bg-opacity-10">
                    <h1 className="text-6xl font-bold mb-4 text-center">Immersive Adventures Await</h1>
                    <p className="text-3xl font-extralight text-center mb-4">Click here to download the game and embark on an unforgettable gaming journey!</p>
                    <div>
                        <button className="btn  rounded-full h-9 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 border-none text-white">EXPLORE THE GAME</button>
                    </div>
                </div>
            </div>
        </div>
    );
} 