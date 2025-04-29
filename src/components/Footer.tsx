
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-couple-cream py-10">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <Heart className="h-6 w-6 text-couple-rose fill-couple-pink" />
            <span className="font-serif text-2xl text-couple-deep">Forever Us</span>
          </Link>
          
          <div className="flex space-x-8 mb-8">
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
          
          <div className="text-center text-couple-mauve">
            <p>© {currentYear} Forever Us. All rights reserved.</p>
            <p className="mt-2 text-sm">Made with love for loving couples.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
