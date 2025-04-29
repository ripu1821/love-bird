
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-couple-cream min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062')] bg-cover bg-center opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <Heart className="h-12 w-12 text-couple-rose fill-couple-pink mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-couple-deep mb-6">
            Sarah <span className="text-couple-mauve">&</span> Michael
          </h1>
          <p className="text-xl md:text-2xl text-couple-deep mb-8">
            Every love story is beautiful, but ours is my favorite
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="#about" 
              className="px-6 py-3 bg-couple-rose text-white rounded-full hover:bg-couple-mauve transition-colors shadow-md"
            >
              Our Story
            </a>
            <a 
              href="#gallery" 
              className="px-6 py-3 bg-white bg-opacity-70 backdrop-blur-sm text-couple-deep rounded-full hover:bg-opacity-100 transition-all shadow-md"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
