import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Timeline from "./pages/Timeline"
import Sponsors from "./pages/Sponsors"
import Teams from "./pages/Teams"
import LoginSignUp from "./pages/LoginSignUp"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { useState, useEffect } from "react"
import Loader from "./components/Loader/Loader"

const App = () => {
  const [loading, setLoading] = useState(!sessionStorage.getItem("loaderShown"));
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("loaderShown", "true");
      }, 2500);
    }
  }, [loading]);

  return loading ? (
    <Loader setLoading={setLoading} />
  ) : (
    <BrowserRouter>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/login_signup" element={<LoginSignUp />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App