import { Link } from "react-router-dom"
import Image1 from "../../assets/homepage/carousel-image-1.jpg"

const HeroSection = () => {
  return (
    // <div className="sm:flex flex-auto gap-6 justify-center items-center">
    //   <div className="flex-1 sm:w-60 sm:text-left text-center">
    //     <h1 className="lg:text-7xl sm:mb-8 sm:text-5xl text-4xl">Welcome to Ārohaṇa 2025!</h1>
    //     <span className="lg:text-lg">Experience the Rhythm of Culture, the Spirit of Celebration</span>
    //   </div>
    //   <div className="flex-1 sm:mt-0 mt-10 w-84 mx-auto lg:h-[450px] sm:h-[300px] h-[240px] object-center sm:rotate-6 rotate-3 px-4">
    //     <Slider {...settings}>
    //       {images.map((image, index) => (
    //         <div key={`image-${index}`}>
    //           <img src={image} alt="Carousel Image" className="w-full lg:h-[450px] sm:h-[300px] h-[240px]" />
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </div>
    <div className="w-full lg:min-h-screen flex lg:flex-row flex-col-reverse">
      <div className="flex-2 relative lg:min-h-auto min-h-60">
        <div className="absolute p-4 bg-black rounded-full lg:top-40 top-10 lg:left-20 left-6"></div>
        <div className="absolute p-[1px] h-60 bg-gradient-to-b from-black lg:top-40 top-10 lg:left-24 left-10"></div>
        <div className="absolute lg:top-48 top-16 lg:left-32 left-16">
          <p className="sm:text-6xl text-4xl mb-2">Ārohaṇa 2025</p>
          <p className="text-lg">Experience the Rhythm of Culture, the Spirit of Celebration</p>
          <div className="flex lg:gap-10 gap-4 mt-10">
            <Link to={"/events"} className="bg-red-500 px-8 py-2 rounded-full shadow-xl font-bold text-white hover:bg-red-700 transition-all duration-200">Events</Link>
            <Link to={"/timeline"} className="bg-green-500 px-8 py-2 rounded-full shadow-xl font-bold text-white hover:bg-green-700 transition-all duration-200">Timeline</Link>
          </div>
        </div>
      </div>
      <div className="flex-3 max-h-fit relative object-cover diagonal-div">
        <img 
          src={Image1} 
          alt="Img-1" 
          className="lg:max-h-screen w-full" 
        />
      </div>
    </div>
  )
}

export default HeroSection