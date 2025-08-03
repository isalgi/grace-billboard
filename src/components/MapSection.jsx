export default function MapSection() {
  return (
    <section className="max-w-full ">
      <div className="max-w-full px-0">
        {/* Section Title */}
        <div className="text-center py-10 px-6 lg:px-12">
          <h2 className="text-xl font-bold text-gray-800">Area Layanan Kami</h2>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-none shadow-lg overflow-hidden">
          <div className="relative h-[600px]">
            {/* Google Maps Embed - Replace with your actual Google Maps embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.89845529982!2d106.74005899726561!3d-6.229386899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1693234567890!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Area Layanan Grace Billboard"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
