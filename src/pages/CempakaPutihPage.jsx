import LocationPage from "./LocationPage";

function CempakaPutihPage() {
  const recommendations = [
    {
      name: "Jl. Ahmad Yani Cempaka Putih",
      image: "/src/assets/ahmad/image-01.webp",
      link: "/lokasi/cempaka-putih"
    },
    {
      name: "Jl. Matraman Raya", 
      image: "/src/assets/matraman/image-03.webp",
      link: "/lokasi/matraman-raya"
    },
    {
      name: "Jl. Raya Bekasi Pulo Gadung",
      image: "/src/assets/raya/image-07.webp", 
      link: "/lokasi/bekasi-pulogadung"
    },
    {
      name: "Jl. Kebon Kacang Raya",
      image: "/src/assets/kebon/image-04.webp",
      link: "/lokasi/kebon-kacang-raya"
    }
  ];

  return (
    <LocationPage
      title="Jl. Ahmad Yani Cempaka Putih"
      description="Billboard strategis di Jl. Ahmad Yani Cempaka Putih, salah satu jalan protokol Jakarta dengan tingkat visibility yang sangat tinggi. Lokasi ideal untuk branding dan promosi dengan target audience yang luas."
      mainImage="/src/assets/ahmad/image-01.webp"
      videoThumbnail="/src/assets/ahmad/image-08.webp"
      recommendations={recommendations}
      videoTime="02:20"
      price="IDR 850.000"
    />
  );
}

export default CempakaPutihPage;