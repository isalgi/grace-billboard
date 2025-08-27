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

        {/* Video Section */}
        <div className="container mx-auto px-5 md:px-10 lg:px-16 mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Location Preview
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Video */}
            <div>
              <div className="relative">
                <img
                  src={videoThumbnail}
                  alt="Location video preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-75 text-white px-3 py-1 rounded">
                    <span className="text-lg font-mono">{videoTime}</span>
                  </div>
                </div>
                {qrCode && (
                  <div className="absolute bottom-4 right-4 bg-white p-2 rounded">
                    <div className="w-16 h-16 bg-gray-300 flex items-center justify-center text-xs">
                      QR Code
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Description */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Experience the Location
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get a real-time view of this strategic billboard location. See
                the actual traffic flow, visibility angles, and surroundings
                that make this spot perfect for your advertising needs.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Daily Traffic:</span>
                  <span className="font-medium">50,000+ vehicles</span>
                </div>
                <div className="flex justify-between">
                  <span>Visibility Distance:</span>
                  <span className="font-medium">200+ meters</span>
                </div>
                <div className="flex justify-between">
                  <span>Peak Hours:</span>
                  <span className="font-medium">7-9 AM, 5-7 PM</span>
                </div>
              </div>
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
