import Slider from "react-slick";  // Import the Slider from react-slick
import "slick-carousel/slick/slick.css";  // Import the slick CSS
import "slick-carousel/slick/slick-theme.css";  // Import the slick theme CSS
import intoImg from '../assets/images/intro.jpeg';
import into1Img from '../assets/images/intro1.jpeg';
import into2Img from '../assets/images/intro2.jpeg';


const ImageSlider = () => {
    const images = [into1Img, into2Img]; // Add your images here

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index}`} className="rounded-md h-full w-full" />
                </div>
            ))}
        </Slider>
    );
};

export default ImageSlider;