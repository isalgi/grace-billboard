import ServiceCard from "./ServiceCard";

function ServicesSection() {
  const services = [
    {
      image: "/src/assets/image-01.webp",
      title: "Jl. Raya Bekasi Pulo Gadung",
      description:
        "Lokasi billboard strategis di Jl. Raya Bekasi Pulo Gadung dengan traffic padat kendaraan setiap harinya. Area komersial dengan visibility tinggi yang cocok untuk berbagai jenis iklan bisnis Anda.",
      price: "IDR 750.000",
      link: "/lokasi/bekasi-pulogadung"
    },
    {
      image: "/src/assets/image-03.webp",
      title: "Jl. Ahmad Yani Cempaka Putih",
      description:
        "Billboard strategis di Jl. Ahmad Yani Cempaka Putih, salah satu jalan protokol Jakarta dengan tingkat visibility yang sangat tinggi. Lokasi ideal untuk branding dan promosi dengan target audience yang luas.",
      price: "IDR 850.000",
      link: "/lokasi/cempaka-putih"
    },
    {
      image: "/src/assets/image-05.webp",
      title: "Jl. Kebon Kacang Raya",
      description:
        "Posisi billboard premium di Jl. Kebon Kacang Raya dengan akses mudah dan traffic tinggi. Area bisnis strategis yang memberikan exposure maksimal untuk iklan Anda dengan target market yang tepat.",
      price: "IDR 650.000",
      link: "/lokasi/kebon-kacang-raya"
    },
    {
      image: "/src/assets/image-07.webp",
      title: "Jl. Matraman Raya",
      description:
        "Billboard strategis di Jl. Matraman Raya dengan posisi yang sangat visible dari berbagai arah. Lokasi komersial dengan density traffic tinggi yang ideal untuk campaign advertising Anda.",
      price: "IDR 700.000",
      link: "/lokasi/matraman-raya"
    },
    {
      image: "/src/assets/image-09.webp",
      title: "Jl. Perintis Kemerdekaan",
      description:
        "Lokasi billboard premium di Jl. Perintis Kemerdekaan dengan akses yang sangat strategis. Area dengan traffic density tinggi dan visibility optimal untuk berbagai jenis iklan komersial.",
      price: "IDR 680.000",
      link: "/lokasi/perintis-kemerdekaan"
    }
  ];

  return (
    <section className="flex flex-col gap-10 items-center p-16 bg-gray-100 max-sm:px-5 max-sm:py-10">
      <h2 className="text-3xl font-bold text-[#323232]">Available Area</h2>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            price={service.price}
            link={service.link}
          />
        ))}
      </div>

      <div>
        <button className="bg-[#0C098C] text-white px-16 py-3 rounded font-normal transition-colors text-md hover:bg-[#0A0678]">
          Kontak Kami
        </button>
      </div>
    </section>
  );
}

export default ServicesSection;
