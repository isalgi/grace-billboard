import LocationPage from "./LocationPage";

function MatramanJayaPage() {
  const recommendations = [
    {
      name: "Jl. Ahmad Yani Cempaka Putih",
      image: "",
      link: "/lokasi/cempaka-putih",
    },
    {
      name: "Jl. Perintis Kemerdekaan",
      image: "",
      link: "/lokasi/perintis-kemerdekaan",
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

  const additionalImages = ["", "", ""];

  return (
    <LocationPage
      title="Jl. Matraman Raya"
      description="Berada di jalan protokol (Protokol B), depan Halte TransJakarta 'Perintis 
      Kemerdekaan', terletak di seberang kampus ASMI, dekat dengan Mall Bella Terra; 
      Konro Karebosi; Pallubasa Serigala; serta area ramai lainnya. View dari arah 
      Cempaka Putih menuju Kelapa Gading/Pulo Gadung."
      mainImage=""
      carouselMainImage=""
      additionalImages={additionalImages}
      recommendations={recommendations}
      videoTime="16:14"
    />
  );
}

export default MatramanJayaPage;
