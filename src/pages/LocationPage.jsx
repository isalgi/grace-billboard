import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import ReviewsSection from "../components/ReviewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function LocationPage({
  title,
  description,
  mainImage,
  carouselMainImage,
  recommendations = [],
  videoTime = "13:45",
  qrCode = true,
  additionalImages = [],
  overlayData = [],
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = carouselMainImage
    ? [carouselMainImage, ...additionalImages]
    : additionalImages;

  // Get current overlay data from provided overlayData prop
  const currentOverlayData = overlayData[currentImageIndex];

  // Auto-scroll functionality
  useEffect(() => {
    if (allImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, 15000); // Change image every 15 seconds

    return () => clearInterval(interval);
  }, [allImages.length]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <>
      <Navigation isHome={false} />

      {/* Hero Section - Simple Grid Layout */}
      <section className="bg-white pt-20 sm:pt-24 lg:pt-32 pb-2">
        <div className="container mx-auto px-4 sm:px-5 md:px-10 lg:px-16">
          {/* Hero Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-[#0C098C] text-[28px] sm:text-[32px] lg:text-[40px] leading-tight lg:leading-10 font-bold mb-4 sm:mb-6">
                {title}
              </h1>
              <p className="text-[#000000] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[21px] mb-6 sm:mb-8 whitespace-pre-line">
                {description}
              </p>
              <a href="https://wa.me/6282110035871" target="_blank" rel="noopener noreferrer">
                <button className="bg-white border border-[#0C098C] text-[#0C098C] rounded-md px-6 sm:px-8 py-2 text-base sm:text-lg font-medium cursor-pointer">
                  Hubungi Kami
                </button>
              </a>
            </div>

            {/* Right Column - Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={mainImage}
                alt={title}
                className="w-full h-[280px] sm:h-[320px] lg:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Location Preview Section */}
        <div className="container mx-auto px-4 sm:px-5 md:px-10 lg:px-16 mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#0C098C] text-center my-8 sm:my-12">
            Penampakan dari arah lain
          </h2>

          {/* Image Carousel with Overlay */}
          <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
            <div className="relative">
              <img
                src={allImages[currentImageIndex]}
                alt="Location preview"
                className="w-full h-[400px] sm:h-[450px] lg:h-[500px] object-cover transition-opacity duration-500"
              />

              {/* Bottom Overlay with Time and Location Info */}
              <div className="absolute bottom-0 left-0 right-0 text-white p-2">
                <div className="flex justify-between items-end">
                  <div className="flex-1">
                    <div className="flex items-start gap-1 sm:gap-2 mb-2 sm:mb-3">
                      <div
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-none tracking-tighter"
                        style={{
                          transform: "scaleX(0.8)",
                          transformOrigin: "left",
                        }}
                      >
                        {currentOverlayData?.time}
                      </div>
                      <div className="w-[2px] sm:w-[3px] bg-yellow-400 h-8 sm:h-10 lg:h-12 mt-1 sm:mt-2 -ml-3 sm:-ml-6"></div>
                      <div className="ml-1 sm:ml-0">
                        <div className="text-sm sm:text-base lg:text-lg">{currentOverlayData?.date}</div>
                        <div className="text-sm sm:text-base lg:text-lg">{currentOverlayData?.day}</div>
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed max-w-[200px] sm:max-w-xs whitespace-pre-line">
                      {currentOverlayData?.location}
                    </div>
                  </div>

                  {/* Map */}
                  {qrCode && (
                    <div className="w-24 h-28 sm:w-28 sm:h-32 lg:w-32 lg:h-36 rounded-lg ml-3 sm:ml-6 overflow-hidden">
                      <iframe
                        src={currentOverlayData?.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            {allImages.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex
                        ? "bg-[#0C098C]"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Contact Button */}
            <div className="text-center mt-6 sm:mt-8">
              <a href="https://wa.me/6282110035871" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#0C098C] text-white px-8 sm:px-12 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium transition-colors cursor-pointer">
                  Kontak Kami
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        {recommendations.length > 0 && (
          <div className="container mx-auto px-4 sm:px-5 md:px-10 lg:px-16 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0C098C] mb-6 sm:mb-8">
              Rekomendasi Area Lain
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {recommendations.map((item, index) => (
                <Link key={index} to={item.link} className="group">
                  <div className="bg-white rounded-3xl overflow-hidden transition-shadow">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
                    />
                  </div>
                  <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-[#000000] transition-colors mt-2 sm:mt-3">
                    {item.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Reusable Components */}
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LocationPage;
