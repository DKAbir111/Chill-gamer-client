import Slider from "react-slick";
import inventor from '../../assets/warrior.png'
import warrior from '../../assets/inventor.png'
import reveger from '../../assets/raveger.png'
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
        <div className="slider-container">
            <Slider {...settings}>
                <img src={warrior} alt="" />
                <img src={reveger} alt="" />
                <img src={inventor} alt="" />
            </Slider>
        </div>
    );
}

export default ReviewSlider;
