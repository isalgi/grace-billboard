import LocationPage from "./LocationPage";
import mainImageSrc from "../assets/ahmad/image-01.webp";
import additionalImage1 from "../assets/ahmad/image-08.webp";
import additionalImage2 from "../assets/ahmad/image-09.webp";
import perintisImage from "../assets/perintis/image-02.webp";
import matramanImage from "../assets/matraman/image-03.webp";
import bekasiImage from "../assets/raya/image-07.webp";
import kebonKacangImage from "../assets/kebon/image-04.webp";

function CempakaPutihPage() {
  const recommendations = [
    {
      name: "Jl. Perintis Kemerdekaan",
      image: perintisImage,
      link: "/lokasi/perintis-kemerdekaan",
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
      name: "Jl. Kebon Kacang Raya",
      image: kebonKacangImage,
      link: "/lokasi/kebon-kacang-raya",
    },
  ];

  const additionalImages = [mainImageSrc, additionalImage1, additionalImage2];

  const overlayData = [
    {
      time: "02:20",
      date: "10 Mei 2025",
      day: "Sabtu",
      location: "Jl. Ahmad Yani,\nCempaka Putih, Kota Jakarta Pusat,\nDaerah Khusus Ibukota Jakarta",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6663045712863!2d106.88049337584344!3d-6.175392360615132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d6b05d0cf9%3A0x4027a76e352db700!2sJl.%20Ahmad%20Yani%2C%20Cempaka%20Putih%2C%20Central%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735579700000!5m2!1sen!2sid"
    },
    {
      time: "02:30",
      date: "10 Mei 2025",
      day: "Sabtu", 
      location: "Halte TransJakarta\nPulo Mas Bypass,\nJl. Ahmad Yani",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6663045712863!2d106.88049337584344!3d-6.175392360615132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d6b05d0cf9%3A0x4027a76e352db700!2sJl.%20Ahmad%20Yani%2C%20Cempaka%20Putih%2C%20Central%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735579800000!5m2!1sen!2sid"
    },
    {
      time: "02:40", 
      date: "10 Mei 2025",
      day: "Sabtu",
      location: "Dekat Gudang Garam\n& Universitas Jayabaya,\nJl. Ahmad Yani",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6663045712863!2d106.88049337584344!3d-6.175392360615132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d6b05d0cf9%3A0x4027a76e352db700!2sJl.%20Ahmad%20Yani%2C%20Cempaka%20Putih%2C%20Central%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735579900000!5m2!1sen!2sid"
    }
  ];

  return (
    <LocationPage
      title="Jl. Ahmad Yani Cempaka Putih"
      description="Billboard berada di jalan protokol (Protokol A), berada persis di dekat Halte 
      TransJakarta 'Pulo Mas Bypass', dekat dengan Gudang Garam; Universitas
       Jayabaya; dan area ramai lainnya. Billboard bisa terlihat dari jalan arteri ataupun 
       jalan tol (view atas). View dari arah Rawamangun/Pramuka menuju Cempaka Putih/
       Kelapa Gading/Tanjung Priok."
      mainImage={mainImageSrc}
      carouselMainImage=""
      additionalImages={additionalImages}
      recommendations={recommendations}
      videoTime="02:20"
      overlayData={overlayData}
    />
  );
}

export default CempakaPutihPage;
