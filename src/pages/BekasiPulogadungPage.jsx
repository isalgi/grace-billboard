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
    />
  );
}

export default BekasiPulogadungPage;