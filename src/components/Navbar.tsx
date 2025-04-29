
import { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-couple-rose fill-couple-pink" />
            <span className="font-serif text-2xl text-couple-deep">Forever Us</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-couple-deep hover:text-couple-mauve transition-colors">
              Home
            </Link>
            <a href="#about" className="font-medium text-couple-deep hover:text-couple-mauve transition-colors">
              Our Story
            </a>
            <a href="#gallery" className="font-medium text-couple-deep hover:text-couple-mauve transition-colors">
              Gallery
            </a>
            <a href="#dates" className="font-medium text-couple-deep hover:text-couple-mauve transition-colors">
              Special Dates
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-couple-deep hover:text-couple-mauve"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-couple-deep hover:text-couple-mauve transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#about" 
                className="font-medium text-couple-deep hover:text-couple-mauve transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Our Story
              </a>
              <a 
                href="#gallery" 
                className="font-medium text-couple-deep hover:text-couple-mauve transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#dates" 
                className="font-medium text-couple-deep hover:text-couple-mauve transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Special Dates
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
