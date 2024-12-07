import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

export default function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,
        autoplay: true,
        autoplaySpeed: 7000,
    };
    const data = useLoaderData();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <div className="slider-container relative bg-black overflow-hidden">
            <Slider {...settings}>
                {data.map((banner) => (
                    <div key={banner._id} className="h-[550px] relative overflow-hidden">
                        <img src={banner.cover} alt={banner.title} className="object-cover w-full h-full" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70"></div> {/* Black overlay */}
                    </div>
                ))}
            </Slider>
            <div className="absolute text-white flex flex-col justify-center items-center w-full h-[550px] top-0 gap-5">
                <h2 className="text-6xl md:w-10/12 lg:w-1/2 text-center font-bold">
                    Dive Into Gaming Bliss
                </h2>
                <p className="md:w-10/12 lg:w-1/2 text-center">
                    Explore the world of gaming through detailed reviews, community insights, and curated recommendations. Your next favorite game awaits!
                </p>
                <Link to={'/allreview'} className="btn rounded-full h-9 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none text-white">
                    EXPLORE REVIEWS
                </Link>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="container mx-auto gap-5 flex-col md:flex-row flex justify-between items-center py-7 px-2">
                    <h2 className="text-center md:text-left md:w-1/2 text-3xl text-white">
                        Become Part of the Chill Gamer Community
                    </h2>
                    <button onClick={() => {
                        user?.email ? toast.success("You're already a member! 🎉") : navigate('login')
                    }} className="btn rounded-full text-pink-400 hover:bg-black hover:text-white border-none">
                        {
                            user?.email ? "JOINED" : "JOIN NOW"
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}
