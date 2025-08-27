import LocationPage from "./LocationPage";

function KebonKacangRayaPage() {
  const recommendations = [
    {
      name: "Jl. Ahmad Yani Cempaka Putih",
      image: "/src/assets/image-11.webp",
      link: "/lokasi/cempaka-putih"
    },
    {
      name: "Jl. Matraman Raya", 
      image: "/src/assets/image-12.webp",
      link: "/lokasi/matraman-raya"
    },
    {
      name: "Jl. Raya Bekasi Pulo Gadung",
      image: "/src/assets/image-13.webp", 
      link: "/lokasi/bekasi-pulogadung"
    }
  ];

  return (
    <LocationPage
      title="Jl. Kebon Kacang Raya"
      description="Posisi billboard premium di Jl. Kebon Kacang Raya dengan akses mudah dan traffic tinggi. Area bisnis strategis yang memberikan exposure maksimal untuk iklan Anda dengan target market yang tepat."
      mainImage="/src/assets/image-05.webp"
      videoThumbnail="/src/assets/image-06.webp"
      recommendations={recommendations}
      videoTime="13:45"
      price="IDR 650.000"
    />
  );
}

export default KebonKacangRayaPage;