import React from "react";
import ServiceCard from "./ServiceCard";
import image02 from "../assets/perintis/image-02.webp";
import image01 from "../assets/ahmad/image-01.webp";
import image03 from "../assets/matraman/image-03.webp";
import image07 from "../assets/raya/image-07.webp";
import image04 from "../assets/kebon/image-04.webp";

function ServicesSection() {
  const services = [
    {
      image: image02,
      title: "Jl. Perintis\nKemerdekaan",
      description:
        "Berada di jalan protokol (Protokol B), depan Halte TransJakarta \"Perintis Kemerdekaan\", terletak di seberang kampus ASMI, dekat dengan Mall Bella Terra; Konro Karebosi; Pallubasa Serigala; serta area ramai lainnya. View dari arah Cempaka Putih menuju Kelapa Gading/Pulo Gadung",
      link: "/lokasi/perintis-kemerdekaan",
    },
    {
      image: image01,
      title: "Jl. Ahmad Yani\nCempaka Putih",
      description:
        "Billboard berada di jalan protokol (Protokol A), berada persis di dekat Halte TransJakarta \"Pulo Mas Bypass\", dekat dengan Gudang Garam; Universitas Jayabaya; dan area ramai lainnya. Billboard bisa terlihat dari jalan arteri ataupun jalan tol (view atas). View dari arah Rawamangun/Pramuka menuju Cempaka Putih/Kelapa Gading/Tanjung Priok.",
      link: "/lokasi/cempaka-putih",
    },
    {
      image: image03,
      title: "Jl. Matraman Raya",
      description:
        "Berada di jalan protokol (Protokol B). Terletak persis di depan Sop Djanda Khas Maranggi, dekat dengan Munik Resto; Hotel Holiday Inn; Gramedia Matraman; Pasar; Stasiun; dan area pusat keramaian lainnya. Arah pandang dari arah Jatinegara/Kampung Melayu menuju Salemba/Pramuka/Senen.",
      link: "/lokasi/matraman-raya",
    },
    {
      image: image07,
      title: "Jl. Raya Bekasi\n Pulo Gadung",
      description:
        "Terletak di tempat strategis, dekat dengan Mall PTC (Pulogadung Trade Centre), pool & PO bus AKAP, area kawasan industri dan perkantoran, SPBU, Pasar Pulo Gadung, serta area pusat keramaian lainnya. View dari arah Cakung/Harapan Indah menuju Pulo Gadung/Kelapa Gading/Perintis Kemerdekaan.",
      link: "/lokasi/bekasi-pulogadung",
    },
    {
      image: image04,
      title: "Jl. Kebon Kacang Raya",
      description:
        "Billboard berada di dekat jantung kota Jakarta Pusat. Terletak di dekat Thamrin City; Mall Grand Indonesia, Mall Plaza Indonesia, area perkantoran & perhotelan, serta area prestise lainnya. View dari arah Thamrin/Bundaran HI menuju Mas Mansyur/Tanah Abang.",
      link: "/lokasi/kebon-kacang-raya",
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-4">
        <h2 className="text-center text-[24px] sm:text-[28px] lg:text-[32px] font-medium mb-1 text-black">
          Available Area
        </h2>
        <p className="text-center text-[#0C098C] font-bold my-6 sm:my-8 text-[20px] sm:text-[24px] lg:text-[28px]">
          JABODETABEK
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-sm sm:max-w-xl mx-auto mb-6 sm:mb-8">
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
          <a href="https://wa.me/6282110035871" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#0C098C] text-white px-8 sm:px-12 lg:px-16 py-2 rounded-sm text-sm sm:text-base transition-colors cursor-pointer">
              Kontak Kami
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
