import ServiceCard from "./ServiceCard";

function ServicesSection() {
  const services = [
    {
      image: "/src/assets/perintis/image-02.webp",
      title: "Jl. Perintis\nKemerdekaan",
      description:
        "Berada di jalan protokol (Protokol B), dapat hilir Taman/Makarta cabang Kemayoran Jakarta Pusat sebesar kurang lebih 4KM, dekat dengan Mall Bola, Plaza Kuning, Komplex Jakarta Trade Center, menuju Kelapa Gading area ramai lainnya. View dari arah Cemara Pulih/Kelapa Gading menuju Priok.",
      link: "/lokasi/perintis-kemerdekaan",
    },
    {
      image: "/src/assets/ahmad/image-01.webp",
      title: "Jl. Ahmad Yani\nCempaka Putih",
      description:
        "Billboard berada di jalan protokol (Protokol A), berada service di dekat dengan PD. Pasar Senen, Gedung Bappenas, dekat dengan Gedung Garmin, Universitas Jayabaya, PTC (Thamrinplaza Trade Center), pool B bis besar AKAR, area transito industri dan perdagangan, menuju ke banyak pusat stasium pusat Induk garut Senen. View dari arah Cemara Pulih/Kelapa Gading Tanjung Priok.",
      link: "/lokasi/cempaka-putih",
    },
    {
      image: "/src/assets/matraman/image-03.webp",
      title: "Jl. Matraman Raya",
      description:
        "Jl. Teritikad persisi di depan Soto Dunia Mas (Matraman), dekat dengan Mall Jakarta Kampung Jakarta, Kelurahan Utan Kayu Selatan, Kelurahan Utan Kayu Utara, Gramedia Matraman, Pasar Statium, dll. area pusat keramaian dan perkantoran. Memiliki kedataan pejalan jalan/kampung Melayu menuju Saldmbaya/Pumangi/Senen.",
      link: "/lokasi/matraman-raya",
    },
    {
      image: "/src/assets/raya/image-07.webp",
      title: "Jl. Raya Bekasi\n Pulo Gadung",
      description:
        "Terletak di tempat strategis, dekat dengan Mall PTC (Pulogadung Trade Center), pool B bis besar AKAR, area kawasan industri dan perdagangan, menuju ke banyak pusat ekonomi lainnya. View dari arah Cakung/Derzpen Induk menuju Senen/Gambir/Pramoedya HI menuju Kota Tanah Abang.",
      link: "/lokasi/bekasi-pulogadung",
    },
    {
      image: "/src/assets/kebon/image-04.webp",
      title: "Jl. Kebon Kacang Raya",
      description:
        "Billboard berada di dekat jantung kota Jakarta Pusat. Terletak di Mall Plaza Indonesia, Mall Grand Indonesia. Dekat perkantoran & swalayan menuju ke Senen/Tanah Abang HI menuju Kota/Muanyar/Tanah Abang.",
      link: "/lokasi/kebon-kacang-raya",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-[32px] font-medium mb-1 text-black">
          Available Area
        </h2>
        <p className="text-center text-[#0C098C] font-bold my-8 text-[28px]">
          JABODETABEK
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="h-full">
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto mb-8 ">
          {services.slice(3).map((service, index) => (
            <div key={index + 3} className="h-full">
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-7 text-[#0C098C]">Jakarta</h3>
          <button className="bg-[#0C098C] text-white px-16 py-2 rounded-sm text-sm transition-colors cursor-pointer">
            Kontak Kami
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
