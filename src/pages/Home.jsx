import AboutUs from '../components/Home/AboutUs'
import FAQS from '../components/Home/FAQS'
import HeroSection from '../components/Home/HeroSection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <div>
        <div
          className="hero-section sm:min-h-[80vh] min-h-[70vh] flex justify-between items-center"
        >
          <HeroSection />
        </div>
        <div className="aboutUs mt-20">
          <AboutUs />
        </div>
        <div className="faqs mt-20">
          <FAQS />
        </div>
      </div>
    </div>
  )
}

export default Home