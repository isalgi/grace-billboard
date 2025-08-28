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
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = carouselMainImage
    ? [carouselMainImage, ...additionalImages]
    : additionalImages;

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
      <section className="bg-white pt-32 pb-2">
        <div className="container mx-auto px-5 md:px-10 lg:px-16">
          {/* Hero Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-[#0C098C] text-[40px] leading-10 font-bold mb-6">
                {title}
              </h1>
              <p className="text-[#000000] text-[16px] leading-[21px] mb-8 whitespace-pre-line">
                {description}
              </p>
              <Link to="https://wa.me/6281239336293">
                <button className="bg-white border border-[#0C098C] text-[#0C098C] hover:bg-blue-50 rounded-md px-8 py-2 text-lg font-medium cursor-pointer">
                  Hubungi Kami
                </button>
              </Link>
            </div>

            {/* Right Column - Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={mainImage}
                alt={title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Location Preview Section */}
        <div className="container mx-auto px-5 md:px-10 lg:px-16 mb-16">
          <h2 className="text-2xl font-semibold text-[#0C098C] text-center my-12">
            Penampakan dari arah lain
          </h2>

          {/* Image Carousel with Overlay */}
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <img
                src={allImages[currentImageIndex]}
                alt="Location preview"
                className="w-full h-[500px] object-cover transition-opacity duration-500"
              />

              {/* Bottom Overlay with Time and Location Info */}
              <div className="absolute bottom-0 left-0 right-0  text-white p-6">
                <div className="flex justify-between items-end">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="text-6xl font-bold leading-none">
                        {videoTime}
                      </div>
                      <div>
                        <div className="text-lg">03 Mei 2025</div>
                        <div className="text-lg">Sabtu</div>
                      </div>
                    </div>
                    <div className="text-sm leading-relaxed max-w-xs">
                      Cemp. Putih Tim., Kec. Cemp. Putih,
                      <br />
                      Kota Jakarta Pusat, Daerah Khusus
                      <br />
                      Ibukota Jakarta
                    </div>
                  </div>

                  {/* Map */}
                  {qrCode && (
                    <div className="w-32 h-24 bg-blue-900 rounded-lg ml-6 overflow-hidden flex items-center justify-center relative">
                      <div className="w-full h-full bg-gradient-to-br from-blue-800 to-blue-900 relative">
                        {/* Simple map-like design */}
                        <div className="absolute inset-2 border border-blue-300 rounded">
                          <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-2 left-2"></div>
                          <div className="w-1 h-4 bg-blue-300 absolute top-4 left-3 transform rotate-45"></div>
                          <div className="w-3 h-1 bg-blue-300 absolute bottom-2 right-2"></div>
                          <div className="w-1 h-3 bg-blue-300 absolute bottom-3 right-4"></div>
                        </div>
                      </div>
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
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Contact Button */}
            <div className="text-center mt-8">
              <Link to="https://wa.me/6281239336293">
                <button className="bg-[#0C098C] text-white px-12 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors cursor-pointer">
                  Kontak Kami
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        {recommendations.length > 0 && (
          <div className="container mx-auto px-5 md:px-10 lg:px-16 mb-16">
            <h2 className="text-5xl font-semibold text-[#0C098C] mb-8">
              Rekomendasi Area Lain
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {recommendations.map((item, index) => (
                <Link key={index} to={item.link} className="group">
                  <div className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  <h3 className="text-[20px] font-medium text-[#000000]  transition-colors mt-3">
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
