import LocationPage from "./LocationPage";

function MatramanJayaPage() {
  const recommendations = [
    {
      name: "Jl. Ahmad Yani Cempaka Putih",
      image: "/src/assets/image-14.webp",
      link: "/lokasi/cempaka-putih"
    },
    {
      name: "Jl. Matraman Raya", 
      image: "/src/assets/image-15.webp",
      link: "/lokasi/matraman-raya"
    },
    {
      name: "Jl. Raya Bekasi Pulo Gadung",
      image: "/src/assets/image-16.webp", 
      link: "/lokasi/bekasi-pulogadung"
    },
    {
      name: "Jl. Kebon Kacang Raya",
      image: "/src/assets/image-01.webp",
      link: "/lokasi/kebon-kacang-raya"
    }
  ];

  return (
    <LocationPage
      title="Jl. Matraman Raya"
      description="Billboard strategis di Jl. Matraman Raya dengan posisi yang sangat visible dari berbagai arah. Lokasi komersial dengan density traffic tinggi yang ideal untuk campaign advertising Anda."
      mainImage="/src/assets/image-07.webp"
      videoThumbnail="/src/assets/image-08.webp"
      recommendations={recommendations}
      videoTime="16:14"
      price="IDR 700.000"
    />
  );
}

export default MatramanJayaPage;