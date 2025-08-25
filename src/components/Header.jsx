import { Link } from 'react-router-dom'
import { Link as ScrollLink } from "react-scroll"; 

export default function Header() {

  return (
    <header className="text-white text-lg font-semibold p-4 h-20">
      <nav className="flex flex-wrap justify-around items-center">
        <img src="/Photos/beatsLogo.png" alt="beats logo" width={25} height={25} className="ml-2 mt-5" />

        <ul className="nav-list flex items-center flex-wrap justify-center list-none">
          <li className="px-6 py-2 transition-all duration-500 cursor-pointer  hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6 py-2 transition-all duration-500 cursor-pointer  hover:text-red-500">
             <ScrollLink
              to="specs"
              smooth={true}
              duration={800}
              offset={-200}
            >
              Specs
            </ScrollLink>
          </li>
          <li className="px-6 py-2 transition-all duration-500 cursor-pointer hover:text-red-500">
            <ScrollLink
              to="case"
              smooth={true}
              duration={800}
              offset={-10}
            >
              Case
            </ScrollLink>
          </li>
          <li className="px-6 py-2 transition-all duration-500 cursor-pointer  hover:text-red-500">
            <Link to="/products">Products</Link>
          </li>
          <Link to="/cart">
            <button className="px-8 py-2 text-base font-semibold text-white rounded-md cursor-pointer bg-[#1E1E21] hover:bg-red-500 transition-colors">
              Shop
            </button>
          </Link>
          <Link to="/login">
            <button className="ml-3 px-8 py-2 text-base font-semibold text-red-500 rounded-md cursor-pointer bg-[#1E1E21] hover:bg-white transition-colors">
              Login
            </button>
          </Link>
        </ul>
      </nav>
    </header>
  )
}