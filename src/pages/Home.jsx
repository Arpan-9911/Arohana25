import AboutUs from '../components/Home/AboutUs'
import FAQS from '../components/Home/FAQS'
import HeroSection from '../components/Home/HeroSection'

const Home = () => {
  return (
    <div className="min-h-screen bg-pink-100 pb-20">
      <div>
        <div className="hero-section">
          <HeroSection />
        </div>
        <div className="aboutUs mt-20 max-w-7xl mx-auto px-4 xl:px-0">
          <AboutUs />
        </div>
        <div className="faqs mt-20 max-w-7xl mx-auto px-4 xl:px-0">
          <FAQS />
        </div>
      </div>
    </div>
  )
}

export default Home