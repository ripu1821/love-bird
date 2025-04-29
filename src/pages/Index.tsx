
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import SpecialDates from "../components/SpecialDates";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Gallery />
        <SpecialDates />
      </main>
      <Footer />
    </>
  );
};

export default Index;
