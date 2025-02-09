import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="px-4 py-10 bg-gray-300">
      <div className="max-w-7xl mx-auto flex sm:flex-row flex-col justify-between gap-10">
        <div className="flex-1">
          <Link
            to={"/"}
            className="text-5xl font-bold"
            aria-label="Home"
          >
            Arohana
          </Link>
        </div>
        <div className="flex-auto flex gap-4 flex-wrap justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-4">HYPERION</h2>
            <div><a href="/" className="hover:underline">Official Website</a></div>
            <div><a href="/" className="flex gap-2 items-center hover:underline">Instagram <FaInstagram /></a></div>
            <div><a href="/" className="flex gap-2 items-center hover:underline">Facebook <FaFacebook /></a></div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">PGDAV COLLEGE</h2>
            <div><a href="/" className="hover:underline">Official Website</a></div>
            <div><a href="/" className="flex gap-2 items-center hover:underline">Instagram <FaInstagram /></a></div>
            <div><a href="/" className="flex gap-2 items-center hover:underline">Facebook <FaFacebook /></a></div>
            <div><a href="/" className="flex gap-2 items-center hover:underline">Twitter <FaTwitter /></a></div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">TEAM</h2>
            <div><a href="/" className="hover:underline">Hyperion - PGDAV</a></div>
            <div>
              <a href="/" className="hover:underline">
                Website Development Team <br/> Techwhiz - IT Society
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10">
        <p className="text-sm">
          &copy; 2024 Hyperion&trade;. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer