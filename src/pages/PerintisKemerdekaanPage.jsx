import LocationPage from "./LocationPage";
import mainImageSrc from "../assets/perintis/image-02.webp";
import additionalImage1 from "../assets/perintis/image-11.webp";
import additionalImage2 from "../assets/perintis/image-16.webp";
import cempakaPutihImage from "../assets/ahmad/image-01.webp";
import matramanImage from "../assets/matraman/image-03.webp";
import bekasiImage from "../assets/raya/image-07.webp";
import kebonKacangImage from "../assets/kebon/image-04.webp";

function PerintisKemerdekaanPage() {
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
      name: "Jl. Kebon Kacang Raya",
      image: kebonKacangImage,
      link: "/lokasi/kebon-kacang-raya",
    },
  ];

  const additionalImages = [mainImageSrc, additionalImage1, additionalImage2];

  const overlayData = [
    {
      time: "16:41",
      date: "22 Mei 2025",
      day: "Kamis",
      location: "Jl. Perintis Kemerdekaan,\nKec. Matraman, Kota Jakarta Timur,\nDaerah Khusus Ibukota Jakarta",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4120486543!2d106.87297407584370!3d-6.202146261835547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4c2c2c2c2c4%3A0x5027a76e352db704!2sJl.%20Perintis%20Kemerdekaan%2C%20Matraman%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735580300000!5m2!1sen!2sid"
    },
    {
      time: "16:52",
      date: "22 Mei 2025",
      day: "Kamis",
      location: "Halte TransJakarta\nPerintis Kemerdekaan,\nSeberang Kampus ASMI",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4120486543!2d106.87297407584370!3d-6.202146261835547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4c2c2c2c2c4%3A0x5027a76e352db704!2sJl.%20Perintis%20Kemerdekaan%2C%20Matraman%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735580400000!5m2!1sen!2sid"
    },
    {
      time: "17:03",
      date: "22 Mei 2025",
      day: "Kamis",
      location: "Area Mall Bella Terra,\nKonro Karebosi & Pallubasa,\nJl. Perintis Kemerdekaan",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4120486543!2d106.87297407584370!3d-6.202146261835547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4c2c2c2c2c4%3A0x5027a76e352db704!2sJl.%20Perintis%20Kemerdekaan%2C%20Matraman%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735580500000!5m2!1sen!2sid"
    }
  ];

  return (
    <LocationPage
      title="Jl. Perintis Kemerdekaan"
      description={`Berada di jalan protokol (Protokol B), depan Halte TransJakarta "Perintis 
        Kemerdekaan", terletak di seberang kampus ASMI, dekat dengan Mall Bella Terra; 
        Konro Karebosi; Pallubasa Serigala; serta area ramai lainnya. View dari arah 
        Cempaka Putih menuju Kelapa Gading/Pulo Gadung.`}
      mainImage={mainImageSrc}
      carouselMainImage=""
      additionalImages={additionalImages}
      recommendations={recommendations}
      videoTime="16:41"
      overlayData={overlayData}
    />
  );
}

export default PerintisKemerdekaanPage;
