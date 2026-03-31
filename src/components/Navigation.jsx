import cart from "../images/products/shopping-cart.png"
import { FaCartShopping } from 'react-icons/fa6'

export default function Navigation({ isAdded, setIsAdded }) {
  const cartCount = isAdded.length;

  return (
    <nav className="navbar bg-base-100 shadow-sm px-4">

      {/* Left Side */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box">
            {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((item, i) => (
              <li key={i}><a>{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          DigiTools
        </h1>
      </div>

      {/* Center Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((item, i) => (
            <li key={i}><a>{item}</a></li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end flex items-center gap-4">

        {/* Cart */}
        <button className="relative flex items-center">
          <img src={cart} alt="cart" />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        {/* Auth Buttons */}
        <button className="text-sm">Login</button>

        <button className="btn rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-500">
          Get Started
        </button>

      </div>
    </nav>
  );
}
