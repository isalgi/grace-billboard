import LocationPage from "./LocationPage";

function BekasiPulogadungPage() {
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
      name: "Jl. Perintis Kemerdekaan",
      image: "",
      link: "/lokasi/perintis-kemerdekaan",
    },
    {
      name: "Jl. Kebon Kacang Raya",
      image: "",
      link: "/lokasi/kebon-kacang-raya",
    },
  ];

  const additionalImages = [
    "",
    "",
    ""
  ];

  return (
    <LocationPage
      title="Jl. Raya Bekasi Pulo Gadung"
      description="Berada di jalan protokol (Protokol B), depan Halte TransJakarta 'Perintis 
      Kemerdekaan', terletak di seberang kampus ASMI, dekat dengan Mall Bella Terra; 
      Konro Karebosi; Pallubasa Serigala; serta area ramai lainnya. View dari arah 
      Cempaka Putih menuju Kelapa Gading/Pulo Gadung."
      mainImage=""
      carouselMainImage=""
      additionalImages={additionalImages}
      recommendations={recommendations}
      videoTime="13:45"
    />
  );
}

export default BekasiPulogadungPage;