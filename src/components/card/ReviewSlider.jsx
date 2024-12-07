import Slider from "react-slick";
import inventor from '../../assets/warrior.png'
import warrior from '../../assets/inventor.png'
import reveger from '../../assets/raveger.png'
import fire from '../../assets/fire.json'
import Lottie from "lottie-react";
function ReviewSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

    };
    return (

        <div className="slider-container ml-20 overflow-hidden relative">
            <Slider {...settings}>
                <img src={warrior} alt="" />
                <img src={reveger} alt="" />
                <img src={inventor} alt="" />
            </Slider>
            <Lottie animationData={fire} loop={true} className="absolute top-0" />
        </div>

    );
}

export default ReviewSlider;
