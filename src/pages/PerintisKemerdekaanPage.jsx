import LocationPage from "./LocationPage";

function PerintisKemerdekaanPage() {
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
    }
  ];

  return (
    <LocationPage
      title="Jl. Perintis Kemerdekaan"
      description="Lokasi billboard premium di Jl. Perintis Kemerdekaan dengan akses yang sangat strategis. Area dengan traffic density tinggi dan visibility optimal untuk berbagai jenis iklan komersial."
      mainImage="/src/assets/perintis/image-02.webp"
      videoThumbnail="/src/assets/perintis/image-11.webp"
      recommendations={recommendations}
      videoTime="16:41"
      price="IDR 680.000"
    />
  );
}

export default PerintisKemerdekaanPage;