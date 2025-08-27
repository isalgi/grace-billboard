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
      <section className="bg-white pt-32 pb-2">
        <div className="container mx-auto px-5 md:px-10 lg:px-16">
          {/* Hero Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-[#0C098C] text-[40px] leading-10 font-bold mb-6">
                {title}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {description}
              </p>
              <Link to="https://wa.me/6281239336293">
                <button className="bg-white border border-[#0C098C] text-[#0C098C] hover:bg-blue-50 rounded-md px-6 py-3 text-lg font-medium cursor-pointer">
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

          {/* Single Image with Overlay */}
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <img
                src={videoThumbnail}
                alt="Location preview"
                className="w-full h-[500px] object-cover "
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
              <div className="w-3 h-3 bg-[#0C098C] rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>

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
                  <h3 className="text-sm font-medium text-gray-800 group-hover:text-[#1196A9] transition-colors mt-3">
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
