import { Link } from "react-router";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              {/* Logo image */}
              <div className="relative">
                <img
                  src="/images/logo.jpg"
                  alt="Destiny Driven Finance Logo"
                  className="h-10 w-auto"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Destiny Driven Finance</h1>
                <p className="text-xs text-orange-600 font-medium">Building Wealth For Generations</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-slate-600">Call us now</p>
              <a href="tel:+263786573967" className="text-orange-600 font-semibold hover:text-orange-700">
                0786573967 / 0714635258
              </a>
            </div>
            <Link
              to="/contact"
              className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-slate-600 mb-2">Call us now</p>
                <a href="tel:+263786573967" className="text-orange-600 font-semibold hover:text-orange-700 block mb-4">
                  0786573967 / 0714635258
                </a>
                <Link
                  to="/contact"
                  className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium inline-block text-center w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}