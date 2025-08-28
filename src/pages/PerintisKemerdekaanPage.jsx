import LocationPage from "./LocationPage";

function PerintisKemerdekaanPage() {
  const recommendations = [
    {
      name: "Jl. Ahmad Yani Cempaka Putih",
      image: "/src/assets/ahmad/image-01.webp",
      link: "/lokasi/cempaka-putih",
    },
    {
      name: "Jl. Matraman Raya",
      image: "/src/assets/matraman/image-03.webp",
      link: "/lokasi/matraman-raya",
    },
    {
      name: "Jl. Raya Bekasi Pulo Gadung",
      image: "/src/assets/raya/image-07.webp",
      link: "/lokasi/bekasi-pulogadung",
    },
  ];

  return (
    <LocationPage
      title="Jl. Perintis Kemerdekaan"
      description={`Berada di jalan protokol (Protokol B), depan Halte TransJakarta "Perintis 
        Kemerdekaan", terletak di seberang kampus ASMI, dekat dengan Mall Bella Terra; 
        Konro Karebosi; Pallubasa Serigala; serta area ramai lainnya. View dari arah 
        Cempaka Putih menuju Kelapa Gading/Pulo Gadung.`}
      mainImage="/src/assets/perintis/image-02.webp"
      videoThumbnail="/src/assets/perintis/image-11.webp"
      recommendations={recommendations}
      videoTime="16:41"
      price="IDR 680.000"
    />
  );
}

export default PerintisKemerdekaanPage;
