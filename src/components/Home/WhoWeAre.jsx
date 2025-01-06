import { Link } from 'react-router-dom';
import whoImg from '/who-we-are.jpg';

export default function WhoWeAre() {
    return (
        <div className="bg-gradient-to-t from-gray-900 to-black min-h-screen flex flex-col justify-center items-center dark:bg-black">
            <h4 className="text-pink-500 font-bold text-sm uppercase mb-2 w-11/12 md:w-10/12 lg:w-11/12 gap-5 mx-auto p-5 self-start">
                Who We Are
            </h4>
            <div className="w-11/12 md:w-10/12 lg:w-11/12 gap-5 mx-auto p-5 rounded-lg flex flex-col lg:flex-row justify-between items-center relative bg-gradient-to-t from-gray-900 to-black dark:bg-black">
                <div className="flex flex-col gap-7 lg:w-1/2">
                    <div className="flex-1 space-y-2">
                        <h2 className="text-white text-4xl mb-5 font-semibold">
                            Welcome to ChilGam: Your Ultimate Game Review Destination
                        </h2>
                        <p className="text-gray-400">
                            At ChilGam, we redefine the gaming experience by bringing gamers together to discover, review, and discuss their favorite games. Whether you’re into action-packed adventures, immersive RPGs, or competitive esports, ChilGam is your platform to explore detailed reviews, share your opinions, and connect with a passionate gaming community.
                        </p>
                        <p className="text-gray-400">
                            Our mission is to empower gamers with authentic reviews, help them find hidden gems, and create a hub for sharing insights on the latest releases and timeless classics. Join us to make informed gaming choices and add your voice to the ever-growing world of gaming enthusiasts.
                        </p>
                    </div>

                    <div>
                        <Link to="/allreview" className="btn rounded-full h-9 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none text-white">
                            DISCOVER MORE
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 relative order-first lg:order-last">
                    <img
                        src={whoImg}
                        alt="Who We Are"
                        className="object-cover min-h-44 md:h-full w-full rounded-lg"
                    />
                    <div
                        className="h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 bg-gradient-to-r flex flex-col justify-center items-center to-indigo-500 via-purple-500 from-pink-500 
                        rounded-full absolute -top-20 -right-6 md:-right-20" data-aos="fade-top"
                    >
                        <h2 className="text-white text-3xl md:text-5xl font-bold text-center" >
                            7M+
                        </h2>
                        <p className="text-lg font-bold text-white">Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
