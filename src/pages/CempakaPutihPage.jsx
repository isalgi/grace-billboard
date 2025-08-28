import LocationPage from "./LocationPage";
import mainImageSrc from "../assets/ahmad/image-01.webp";
import additionalImage1 from "../assets/ahmad/image-08.webp";
import additionalImage2 from "../assets/ahmad/image-09.webp";

function CempakaPutihPage() {
  const recommendations = [
    {
      name: "Jl. Perintis Kemerdekaan",
      image: "",
      link: "/lokasi/perintis-kemerdekaan",
    },
    {
      name: "Jl. Matraman Raya",
      image: "",
      link: "/lokasi/matraman-raya",
    },
    {
      name: "Jl. Raya Bekasi Pulo Gadung",
      image: "",
      link: "/lokasi/bekasi-pulogadung",
    },
    {
      name: "Jl. Kebon Kacang Raya",
      image: "",
      link: "/lokasi/kebon-kacang-raya",
    },
  ];

  const additionalImages = [mainImageSrc, additionalImage1, additionalImage2];

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
    />
  );
}

export default CempakaPutihPage;
