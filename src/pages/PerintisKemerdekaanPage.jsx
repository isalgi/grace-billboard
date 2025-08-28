import LocationPage from "./LocationPage";
import mainImageSrc from "../assets/perintis/image-02.webp";

function PerintisKemerdekaanPage() {
  const recommendations = [
    {
      name: "Jl. Ahmad Yani Cempaka Putih",
      image: "",
      link: "/lokasi/cempaka-putih",
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
  ];

  const additionalImages = ["", "", ""];

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
    />
  );
}

export default PerintisKemerdekaanPage;
