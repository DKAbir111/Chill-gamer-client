import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLoaderData } from "react-router-dom";


export default function SimpleSlider() {
    const settings = {
        dots: false,
        // fade: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,
        autoplay: true,
        autoplaySpeed: 7000,

    };
    const data = useLoaderData();

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
            <div className="absolute  text-white flex flex-col justify-center items-center w-full h-[550px] top-0 gap-5">
                <h2 className="text-6xl w-1/2 text-center font-bold">Play with anyone, anywhere, on any device</h2>
                <p className="w-1/2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button className="btn  rounded-full h-9 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 border-none text-white">EXPLORE THE GAME</button>
            </div>
            <div className="bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500">
                <div className='container mx-auto flex-col md:flex-row flex justify-between items-center py-7 px-2'>
                    <h2 className='md:w-1/2 text-3xl text-white'>Join Our Membership & Community</h2>
                    <button className="btn rounded-full text-pink-400 hover:bg-black hover:text-white border-none">JOIN MEMBERSHIP</button>
                </div>
            </div>

        </div>
    );
}
