import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import ReviewsSection from "../components/ReviewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";

function HomePage() {
  return (
    <>
      <div className="relative min-h-screen">
        <HeroSection />
        <FeatureSection />
        <ServicesSection />
        <ReviewsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
