
const AboutUs = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-couple-deep mb-12">Our Love Story</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-serif text-couple-mauve mb-4">How We Met</h3>
            <p className="text-couple-deep mb-6">
              We first locked eyes across a crowded coffee shop in downtown Seattle. Michael was working on his laptop, 
              and Sarah spilled her latte nearby. What started as an awkward encounter turned into hours of conversation and laughter.
            </p>
            
            <h3 className="text-2xl font-serif text-couple-mauve mb-4">Our Journey</h3>
            <p className="text-couple-deep mb-6">
              After dating for two years, exploring the Pacific Northwest together, and meeting each other's families, 
              Michael proposed during a sunset hike at Mount Rainier. The rest, as they say, is history.
            </p>
            
            <h3 className="text-2xl font-serif text-couple-mauve mb-4">Today</h3>
            <p className="text-couple-deep">
              Now we're building our life together in our cozy apartment with our rescue cat Milo. 
              We love cooking together, weekend road trips, and binging our favorite shows.
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1964" 
                alt="Sarah and Michael together" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
