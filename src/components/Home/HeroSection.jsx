import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/homepage/carousel-image-1.jpg"
import Image2 from "../../assets/homepage/carousel-image-2.jpg"

const HeroSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const images = [
    Image1,
    Image2
  ];

  return (
    <div className="sm:flex flex-auto gap-6 justify-center items-center">
      <div className="flex-1 sm:w-60 sm:text-left text-center">
        <h1 className="lg:text-7xl sm:mb-8 sm:text-5xl text-4xl">Welcome to Ārohaṇa 2025!</h1>
        <span className="lg:text-lg">Experience the Rhythm of Culture, the Spirit of Celebration</span>
      </div>
      <div className="flex-1 sm:mt-0 mt-10 w-84 mx-auto lg:h-[450px] sm:h-[300px] h-[240px] object-center sm:rotate-6 rotate-3 px-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={`image-${index}`}>
              <img src={image} alt="Carousel Image" className="w-full lg:h-[450px] sm:h-[300px] h-[240px]" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default HeroSection