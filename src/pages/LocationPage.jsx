import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ReviewsSection from "../components/ReviewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function LocationPage({
  title,
  subtitle,
  description,
  mainImage,
  videoThumbnail,
  recommendations = [],
  videoTime = "13:45",
  qrCode = true,
  price = "IDR 750.000",
  features = [],
}) {
  return (
    <>
      <Navigation isHome={false} />

      {/* Hero Section - Simple Grid Layout */}
      <section className="bg-white pt-32 pb-16">
        <div className="container mx-auto px-5 md:px-10 lg:px-16">
          {/* Hero Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-[#1196A9] text-[40px] leading-10 font-bold mb-6">
                {title}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {description}
              </p>
              <Link to="https://wa.me/6281239336293">
                <button className="bg-white border border-[#1196A9] text-[#1196A9] hover:bg-cyan-50 rounded-md px-6 py-3 text-lg font-medium">
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
          <h2 className="text-2xl font-semibold text-[#1196A9] text-center my-12">
            Penampakan dari arah lain
          </h2>

          {/* Single Image with Overlay */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <img
                src={videoThumbnail}
                alt="Location preview"
                className="w-full h-[400px] object-cover rounded-lg"
              />

              {/* Bottom Overlay with Time and Location Info */}
              <div className="absolute bottom-0 left-0 right-0  text-white p-4 rounded-b-lg">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="text-3xl font-bold mb-1">{videoTime}</div>
                    <div className="text-sm mb-1">03 Mei 2025</div>
                    <div className="text-sm mb-1">Sabtu</div>
                    <div className="text-xs leading-tight">
                      Cemp. Putih Tim., Kec. Cemp. Putih,
                      <br />
                      Kota Jakarta Pusat, Daerah Khusus
                      <br />
                      Ibukota Jakarta
                    </div>
                  </div>

                  {/* Map/QR Code */}
                  {qrCode && (
                    <div className="w-20 h-16 bg-gray-300 rounded ml-4 flex items-center justify-center">
                      <div className="text-xs text-gray-600 text-center">
                        Google
                        <br />
                        Maps
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-3 h-3 bg-[#1196A9] rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>

            {/* Contact Button */}
            <div className="text-center mt-8">
              <Link to="https://wa.me/6281239336293">
                <button className="bg-[#1196A9] text-white px-12 py-3 rounded-lg text-lg font-medium hover:bg-cyan-700 transition-colors">
                  Kontak Kami
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        {recommendations.length > 0 && (
          <div className="container mx-auto px-5 md:px-10 lg:px-16 mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Other Strategic Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Premium billboard location with high visibility
                    </p>
                    <Link
                      to={item.link}
                      className="bg-[#1196A9] text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors inline-block text-center w-full"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
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
