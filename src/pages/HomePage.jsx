import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import ReviewsSection from "../components/ReviewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import MapSection from "../components/MapSection";

function HomePage() {
  return (
    <>
      <div className="relative min-h-screen">
        <HeroSection />
        <FeatureSection />
        <ServicesSection />
        <MapSection />
        <ReviewsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
