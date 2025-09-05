import LocationPage from "./LocationPage";
import mainImageSrc from "../assets/matraman/image-03.webp";
import additionalImage1 from "../assets/matraman/image-13.webp";
import additionalImage2 from "../assets/matraman/image-14.webp";
import cempakaPutihImage from "../assets/ahmad/image-01.webp";
import perintisImage from "../assets/perintis/image-02.webp";
import bekasiImage from "../assets/raya/image-07.webp";
import kebonKacangImage from "../assets/kebon/image-04.webp";

function MatramanJayaPage() {
  const recommendations = [
    {
      name: "Jl. Ahmad Yani Cempaka Putih",
      image: cempakaPutihImage,
      link: "/lokasi/cempaka-putih",
    },
    {
      name: "Jl. Perintis Kemerdekaan",
      image: perintisImage,
      link: "/lokasi/perintis-kemerdekaan",
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
      time: "16:14",
      date: "15 Mei 2025",
      day: "Kamis",
      location: "Jl. Matraman Raya,\nKec. Matraman, Kota Jakarta Timur,\nDaerah Khusus Ibukota Jakarta",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4440740043!2d106.85804417584361!3d-6.19495496185584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5f0f0f0f0f1%3A0x5027a76e352db702!2sJl.%20Matraman%20Raya%2C%20Matraman%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735579400000!5m2!1sen!2sid"
    },
    {
      time: "16:25",
      date: "15 Mei 2025", 
      day: "Kamis",
      location: "Area Halte TransJakarta\nPerintis Kemerdekaan,\nJl. Matraman Raya",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4440740043!2d106.85804417584361!3d-6.19495496185584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5f0f0f0f0f1%3A0x5027a76e352db702!2sJl.%20Matraman%20Raya%2C%20Matraman%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735579500000!5m2!1sen!2sid"
    },
    {
      time: "16:35",
      date: "15 Mei 2025",
      day: "Kamis", 
      location: "Dekat Mall Bella Terra,\nSeberang Kampus ASMI,\nJl. Matraman Raya",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4440740043!2d106.85804417584361!3d-6.19495496185584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5f0f0f0f0f1%3A0x5027a76e352db702!2sJl.%20Matraman%20Raya%2C%20Matraman%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735579600000!5m2!1sen!2sid"
    }
  ];

  return (
    <LocationPage
      title="Jl. Matraman Raya"
      description="Berada di jalan protokol (Protokol B). Terletak persis di depan Sop Djanda Khas 
      Maranggi, dekat dengan Munik Resto; Hotel Holiday Inn; Gramedia Matraman; Pasar; 
      Stasiun; dan area pusat keramaian lainnya. Arah pandang dari arah Jatinegara/Kampung 
      Melayu menuju Salemba/Pramuka/Senen."
      mainImage={mainImageSrc}
      carouselMainImage=""
      additionalImages={additionalImages}
      recommendations={recommendations}
      videoTime="16:14"
      overlayData={overlayData}
    />
  );
}

export default MatramanJayaPage;
