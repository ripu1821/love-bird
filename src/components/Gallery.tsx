
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1529634806980-85c3088d5be9?q=80&w=2069",
    alt: "Couple laughing together",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=2070",
    alt: "Couple on beach",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?q=80&w=1974",
    alt: "Holding hands",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070",
    alt: "Couple hiking",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1539150713678-2d8abb2f4b74?q=80&w=1974",
    alt: "Couple silhouette at sunset",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1542378151504-0361264d50c1?q=80&w=1974",
    alt: "Couple in autumn",
  },
];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setCurrentImage(null);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev! - 1));
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev! + 1));
  };

  // Handle keyboard events for lightbox
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (currentImage === null) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") goToPrevious();
    if (event.key === "ArrowRight") goToNext();
  };

  return (
    <section id="gallery" className="section bg-couple-pink bg-opacity-10">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-couple-deep mb-12">Our Moments</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="aspect-[4/5] relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow group"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-couple-deep bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium text-lg">View</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {currentImage !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button 
              className="absolute top-4 right-4 text-white p-2 hover:text-couple-pink"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>
            
            <button 
              className="absolute left-4 text-white p-2 hover:text-couple-pink"
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            
            <button 
              className="absolute right-4 text-white p-2 hover:text-couple-pink"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
            >
              <ChevronRight className="h-10 w-10" />
            </button>
            
            <div className="max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
              <img 
                src={galleryImages[currentImage].src} 
                alt={galleryImages[currentImage].alt} 
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
