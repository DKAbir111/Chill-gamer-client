import { useLoaderData } from "react-router-dom";
import FeaturedCard from "../card/FeaturedCard";
import game from '../../assets/boy-game-2.png'

const Trending = () => {
    const data = useLoaderData()
    const featuredData = data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 3)
    return (
        <div className="bg-gray-900 text-white py-16 px-4 md:px-16 dark:bg-black">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Section */}
                <div>
                    <h4 className="text-pink-500 font-bold text-sm uppercase mb-2">
                        Trending Game
                    </h4>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Elevate Your Play with <br /> gameq’s Innovative Game Development
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Sodales neque odio fames molestie porttitor turpis. Ultricies eros
                        sollicitudin dictumst vestibulum natoque netus vitae mattis facilisi
                        phasellus. Ad ac suspendisse cursus hac suscipit lacinia et senectus.
                    </p>

                    {/* Feature List */}
                    <div className="space-y-6 border-t">
                        {
                            featuredData.map(datum => <FeaturedCard key={datum._id} datum={datum} />)

                        }
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex justify-center">
                    <img
                        src={game}
                        alt="Game Illustration"
                        className="w-3/4 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Trending;
