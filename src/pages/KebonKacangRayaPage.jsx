import LocationPage from "./LocationPage";
import mainImageSrc from "../assets/kebon/image-04.webp";
import additionalImage1 from "../assets/kebon/image-05.webp";
import additionalImage2 from "../assets/kebon/image-10.webp";
import cempakaPutihImage from "../assets/ahmad/image-01.webp";
import matramanImage from "../assets/matraman/image-03.webp";
import bekasiImage from "../assets/raya/image-07.webp";
import perintisImage from "../assets/perintis/image-02.webp";

function KebonKacangRayaPage() {
  const recommendations = [
    {
      name: "Jl. Ahmad Yani Cempaka Putih",
      image: cempakaPutihImage,
      link: "/lokasi/cempaka-putih",
    },
    {
      name: "Jl. Matraman Raya",
      image: matramanImage,
      link: "/lokasi/matraman-raya",
    },
    {
      name: "Jl. Raya Bekasi Pulo Gadung",
      image: bekasiImage,
      link: "/lokasi/bekasi-pulogadung",
    },
    {
      name: "Jl. Perintis Kemerdekaan",
      image: perintisImage,
      link: "/lokasi/perintis-kemerdekaan",
    },
  ];

  const additionalImages = [mainImageSrc, additionalImage1, additionalImage2];

  const overlayData = [
    {
      time: "13:45",
      date: "25 Mei 2025",
      day: "Minggu",
      location: "Jl. Kebon Kacang Raya,\nKebon Kacang, Kota Jakarta Pusat,\nDaerah Khusus Ibukota Jakarta",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5239245043!2d106.81297407584357!3d-6.186146261225547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c2a2a2a2a5%3A0x5027a76e352db705!2sJl.%20Kebon%20Kacang%20Raya%2C%20Kebon%20Kacang%2C%20Central%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735580600000!5m2!1sen!2sid"
    },
    {
      time: "13:55",
      date: "25 Mei 2025",
      day: "Minggu",
      location: "Area Bisnis Kebon Kacang,\nDekat Kawasan Perkantoran,\nJl. Kebon Kacang Raya",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5239245043!2d106.81297407584357!3d-6.186146261225547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c2a2a2a2a5%3A0x5027a76e352db705!2sJl.%20Kebon%20Kacang%20Raya%2C%20Kebon%20Kacang%2C%20Central%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735580700000!5m2!1sen!2sid"
    },
    {
      time: "14:05",
      date: "25 Mei 2025",
      day: "Minggu", 
      location: "Koridor Protokol B,\nAkses ke Menteng & Tanah Abang,\nJl. Kebon Kacang Raya",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5239245043!2d106.81297407584357!3d-6.186146261225547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c2a2a2a2a5%3A0x5027a76e352db705!2sJl.%20Kebon%20Kacang%20Raya%2C%20Kebon%20Kacang%2C%20Central%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735580800000!5m2!1sen!2sid"
    }
  ];

  return (
    <LocationPage
      title="Jl. Kebon Kacang Raya"
      description="Berada di jalan protokol (Protokol B), depan Halte TransJakarta 'Perintis 
      Kemerdekaan', terletak di seberang kampus ASMI, dekat dengan Mall Bella Terra; 
      Konro Karebosi; Pallubasa Serigala; serta area ramai lainnya. View dari arah 
      Cempaka Putih menuju Kelapa Gading/Pulo Gadung."
      mainImage={mainImageSrc}
      carouselMainImage=""
      additionalImages={additionalImages}
      recommendations={recommendations}
      videoTime="13:45"
      overlayData={overlayData}
    />
  );
}

export default KebonKacangRayaPage;
