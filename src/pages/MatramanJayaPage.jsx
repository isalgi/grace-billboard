import LocationPage from "./LocationPage";

function MatramanJayaPage() {
  const recommendations = [
    {
      name: "Jl. Ahmad Yani Cempaka Putih",
      image: "/src/assets/ahmad/image-01.webp",
      link: "/lokasi/cempaka-putih",
    },
    {
      name: "Jl. Matraman Raya",
      image: "/src/assets/matraman/image-13.webp",
      link: "/lokasi/matraman-raya",
    },
    {
      name: "Jl. Raya Bekasi Pulo Gadung",
      image: "/src/assets/raya/image-07.webp",
      link: "/lokasi/bekasi-pulogadung",
    },
    {
      name: "Jl. Kebon Kacang Raya",
      image: "/src/assets/kebon/image-04.webp",
      link: "/lokasi/kebon-kacang-raya",
    },
  ];

  return (
    <LocationPage
      title="Jl. Matraman Raya"
      description="Berada di jalan protokol (Protokol B), depan Halte TransJakarta “Perintis 
      Kemerdekaan”, terletak di seberang kampus ASMI, dekat dengan Mall Bella Terra; 
      Konro Karebosi; Pallubasa Serigala; serta area ramai lainnya. View dari arah 
      Cempaka Putih menuju Kelapa Gading/Pulo Gadung."
      mainImage="/src/assets/matraman/image-03.webp"
      videoThumbnail="/src/assets/matraman/image-14.webp"
      recommendations={recommendations}
      videoTime="16:14"
      price="IDR 700.000"
    />
  );
}

export default MatramanJayaPage;
