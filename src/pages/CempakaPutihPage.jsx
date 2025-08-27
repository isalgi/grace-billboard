import LocationPage from "./LocationPage";

function CempakaPutihPage() {
  const recommendations = [
    {
      name: "Jl. Ahmad Yani Cempaka Putih",
      image: "/src/assets/image-07.webp",
      link: "/lokasi/cempaka-putih"
    },
    {
      name: "Jl. Matraman Raya", 
      image: "/src/assets/image-08.webp",
      link: "/lokasi/matraman-raya"
    },
    {
      name: "Jl. Raya Bekasi Pulo Gadung",
      image: "/src/assets/image-09.webp", 
      link: "/lokasi/bekasi-pulogadung"
    },
    {
      name: "Jl. Kebon Kacang Raya",
      image: "/src/assets/image-10.webp",
      link: "/lokasi/kebon-kacang-raya"
    }
  ];

  return (
    <LocationPage
      title="Jl. Ahmad Yani Cempaka Putih"
      description="Billboard strategis di Jl. Ahmad Yani Cempaka Putih, salah satu jalan protokol Jakarta dengan tingkat visibility yang sangat tinggi. Lokasi ideal untuk branding dan promosi dengan target audience yang luas."
      mainImage="/src/assets/image-03.webp"
      videoThumbnail="/src/assets/image-04.webp"
      recommendations={recommendations}
      videoTime="02:20"
      price="IDR 850.000"
    />
  );
}

export default CempakaPutihPage;