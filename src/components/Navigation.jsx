import cart from "../images/products/shopping-cart.png"
import { FaCartShopping } from 'react-icons/fa6'

export default function Navigation({ isAdded }) {
  const cartCount = isAdded.length;

  return (
    <nav className="navbar bg-base-100 shadow-sm px-4">

      {/* Left Side */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
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

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-[1]"
          >
            {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((item, i) => (
              <li key={i}><a>{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          DigiTools
        </h1>
      </div>

      {/* Center Menu (Desktop only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((item, i) => (
            <li key={i}><a>{item}</a></li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end flex items-center gap-2 sm:gap-4">

        {/* Cart */}
        <button className="relative flex items-center">
          <img src={cart} alt="cart" className="w-6 sm:w-7" />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        {/* Login (hide on small screen optional) */}
        <button className="text-sm hidden sm:block">Login</button>

        {/* CTA Button */}
        <button className="btn rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-500 px-3 sm:px-5">
          Get Started
        </button>

      </div>
    </nav>
  );
}
