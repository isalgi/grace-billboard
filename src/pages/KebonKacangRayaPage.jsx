import LocationPage from "./LocationPage";

function KebonKacangRayaPage() {
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
    {
      name: "Jl. Perintis Kemerdekaan",
      image: "",
      link: "/lokasi/perintis-kemerdekaan",
    },
  ];

  const additionalImages = [
    "",
    "",
    ""
  ];

  return (
    <LocationPage
      title="Jl. Kebon Kacang Raya"
      description="Berada di jalan protokol (Protokol B), depan Halte TransJakarta 'Perintis 
      Kemerdekaan', terletak di seberang kampus ASMI, dekat dengan Mall Bella Terra; 
      Konro Karebosi; Pallubasa Serigala; serta area ramai lainnya. View dari arah 
      Cempaka Putih menuju Kelapa Gading/Pulo Gadung."
      mainImage=""
      carouselMainImage=""
      additionalImages={additionalImages}
      recommendations={recommendations}
      videoTime="13:45"
      price="IDR 650.000"
    />
  );
}

export default KebonKacangRayaPage;