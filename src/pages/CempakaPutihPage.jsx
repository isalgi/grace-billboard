import LocationPage from "./LocationPage";

function CempakaPutihPage() {
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
    {
      name: "Jl. Kebon Kacang Raya",
      image: "/src/assets/kebon/image-04.webp",
      link: "/lokasi/kebon-kacang-raya",
    },
  ];

  return (
    <LocationPage
      title="Jl. Ahmad Yani Cempaka Putih"
      description="Billboard berada di jalan protokol (Protokol A), berada persis di dekat Halte 
      TransJakarta “Pulo Mas Bypass”, dekat dengan Gudang Garam; Universitas
       Jayabaya; dan area ramai lainnya. Billboard bisa terlihat dari jalan arteri ataupun 
       jalan tol (view atas). View dari arah Rawamangun/Pramuka menuju Cempaka Putih/
       Kelapa Gading/Tanjung Priok. "
      mainImage="/src/assets/ahmad/image-01.webp"
      videoThumbnail="/src/assets/ahmad/image-08.webp"
      recommendations={recommendations}
      videoTime="02:20"
      price="IDR 850.000"
    />
  );
}

export default CempakaPutihPage;
