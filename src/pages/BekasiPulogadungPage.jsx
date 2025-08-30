import LocationPage from "./LocationPage";
import mainImageSrc from "../assets/raya/image-07.webp";
import additionalImage1 from "../assets/raya/image-12.webp";
import additionalImage2 from "../assets/raya/image-15.webp";
import cempakaPutihImage from "../assets/ahmad/image-01.webp";
import matramanImage from "../assets/matraman/image-03.webp";
import perintisImage from "../assets/perintis/image-02.webp";
import kebonKacangImage from "../assets/kebon/image-04.webp";

function BekasiPulogadungPage() {
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
      name: "Jl. Perintis Kemerdekaan",
      image: perintisImage,
      link: "/lokasi/perintis-kemerdekaan",
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
      time: "13:45",
      date: "18 Mei 2025",
      day: "Minggu",
      location: "Jl. Raya Bekasi,\nPulo Gadung, Kota Jakarta Timur,\nDaerah Khusus Ibukota Jakarta",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3220506543!2d106.89297407584375!3d-6.208146261845547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4d2f2f2f2f3%3A0x5027a76e352db703!2sJl.%20Raya%20Bekasi%2C%20Pulo%20Gadung%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735580000000!5m2!1sen!2sid"
    },
    {
      time: "13:55",
      date: "18 Mei 2025",
      day: "Minggu",
      location: "Area Mall Bella Terra\n& Kampus ASMI,\nJl. Raya Bekasi",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3220506543!2d106.89297407584375!3d-6.208146261845547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4d2f2f2f2f3%3A0x5027a76e352db703!2sJl.%20Raya%20Bekasi%2C%20Pulo%20Gadung%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735580100000!5m2!1sen!2sid"
    },
    {
      time: "14:05",
      date: "18 Mei 2025", 
      day: "Minggu",
      location: "Konro Karebosi &\nPallubasa Serigala,\nJl. Raya Bekasi",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3220506543!2d106.89297407584375!3d-6.208146261845547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4d2f2f2f2f3%3A0x5027a76e352db703!2sJl.%20Raya%20Bekasi%2C%20Pulo%20Gadung%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1735580200000!5m2!1sen!2sid"
    }
  ];

  return (
    <LocationPage
      title="Jl. Raya Bekasi Pulo Gadung"
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

export default BekasiPulogadungPage;