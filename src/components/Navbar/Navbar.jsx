import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx"


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false)
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);
  const navLinks = [
    { name: "Events", path: "/events" },
    { name: "Timeline", path: "/timeline" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Teams", path: "/teams" },
  ];

  return (
    <nav className={`w-full p-4 fixed top-0 z-20 transition-all duration-300
      ${scrolled ? "bg-white shadow" : "bg-transparent"}
    `}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-6">
          <Link
            to="/"
            className="text-2xl font-bold"
            onClick={() => setToggle(false)}
          >
            AROHANA
          </Link>
          <div className="hidden sm:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`opacity-50 hover:opacity-100 ${
                  location.pathname === link.path ? "opacity-100 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/login_signup"
            className="bg-blue-500 hidden sm:block px-8 py-1 rounded-full text-white font-semibold hover:bg-blue-700 transition-all duration-200"
          >
            Login
          </Link>

          <button onClick={() => setToggle(!toggle)} className="sm:hidden">
            {toggle ? <RxCross2 size={30} /> : <FiMenu size={30} />}
          </button>
          {toggle && (
            <div className="absolute flex flex-col gap-10 top-16 left-0 w-full transition-all h-screen bg-[#c0c0c0] z-50 py-4 px-6">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`opacity-50 py-2 ${
                      location.pathname === link.path ? "opacity-100 font-semibold" : ""
                    }`}
                    onClick={() => setToggle(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/login_signup"
                className="bg-blue-500 w-fit px-8 py-1 rounded-full font-semibold text-white"
                onClick={() => setToggle(false)}
              >Login</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar