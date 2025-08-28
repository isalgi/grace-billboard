import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ReviewsSection from "../components/ReviewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

function ArticlePage() {
  // Mock article data - in a real app this would come from props or API
  const article = {
    title:
      "Tentang CV Bejanaanugerah: Solusi Terbaik untuk Billboard Advertising Anda",
    date: "December 15, 2024",
    image: "/src/assets/image-06.webp",
    content: `
      <p>CV Bejanaanugerah adalah penyedia layanan iklan billboard & videotron terdepan yang telah 12+ tahun melayani advertising dengan klien-klien dengan posisi strategis sehingga memastikan iklan Anda terlihat oleh ribuan orang setiap harinya.</p>
      
      <p>Kami menyediakan solusi periklanan yang efektif dan terjangkau untuk berbagai kebutuhan bisnis Anda. Dengan lokasi-lokasi billboard yang tersebar di area-area strategis Jakarta, kami memastikan iklan Anda mendapat exposure maksimal.</p>
      
      <h3>Mengapa Memilih CV Bejanaanugerah?</h3>
      
      <p>CV Bejanaanugerah telah mempercayai mengiklankan berbagai brand besar dan kecil dengan rata-rata traffic mencapai 100k+ kendaraan yang melintasi setiap harinya.</p>
      
      <ul>
        <li><strong>Kualitas terjamin dan paling teliti</strong> dalam instalment advertisemen</li>
        <li><strong>Tidak perlu khawatir mengenai kualitas</strong> bila ada beriklan bersama kami</li>
        <li><strong>Harga murah dengan kualitas terjamin</strong> yang sudah berpengalaman puluhan tahun bergerak di bidang advertising</li>
        <li><strong>Terpercaya dan sudah melayani ratusan klien</strong> baik korporasi maupun perorangan dari Seluruh Nusantara, Terutama Jakarta dan sekitarnya</li>
      </ul>
      
      <h3>Keunggulan Layanan Kami</h3>
      
      <p>Tim profesional kami siap membantu Anda dalam merancang dan memasang iklan billboard yang menarik perhatian:</p>
      
      <ul>
        <li>Lokasi strategis dengan traffic tinggi</li>
        <li>Harga kompetitif dan terjangkau</li>
        <li>Kualitas material billboard terbaik</li>
        <li>Layanan pemasangan profesional</li>
        <li>Maintenance rutin untuk memastikan kualitas tampilan</li>
        <li>Konsultasi gratis untuk desain iklan yang efektif</li>
      </ul>
      
      <h3>Komitmen Terhadap Kualitas</h3>
      
      <p>Dengan pengalaman lebih dari 12 tahun di industri advertising, CV Bejanaanugerah memahami betul kebutuhan klien akan solusi periklanan yang efektif. Kami tidak hanya menyediakan tempat untuk beriklan, tetapi juga menjadi partner strategis dalam mengembangkan brand awareness bisnis Anda.</p>
      
      <p>Setiap lokasi billboard yang kami sediakan telah melalui survei mendalam untuk memastikan tingkat visibility dan traffic yang optimal. Hal ini menjadikan investasi advertising Anda lebih efektif dan memberikan ROI yang maksimal.</p>
    `,
  };

  // Recommended locations data
  const recommendedLocations = [
    {
      image: "/src/assets/image-01.webp",
      title: "Jl. Raya Bekasi Pulo Gadung",
      description:
        "Lokasi billboard strategis dengan traffic padat kendaraan setiap harinya. Area komersial dengan visibility tinggi.",
      price: "IDR 750.000",
      link: "/lokasi/bekasi-pulogadung",
    },
    {
      image: "/src/assets/image-03.webp",
      title: "Jl. Ahmad Yani Cempaka Putih",
      description:
        "Billboard strategis di jalan protokol Jakarta dengan tingkat visibility yang sangat tinggi.",
      price: "IDR 850.000",
      link: "/lokasi/cempaka-putih",
    },
    {
      image: "/src/assets/image-05.webp",
      title: "Jl. Kebon Kacang Raya",
      description:
        "Posisi billboard premium dengan akses mudah dan traffic tinggi. Area bisnis strategis.",
      price: "IDR 650.000",
      link: "/lokasi/kebon-kacang-raya",
    },
  ];

  return (
    <>
      <Navigation isHome={false} />

      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-8 pt-32">
        <h1 className="text-[48px] text-[#0C098C] mb-6 font-semibold">
          Tentang CV Bejanaanugerah
        </h1>

        {/* Image container with full width */}
        <div className="w-full overflow-hidden rounded-lg mb-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full max-h-[600px] object-cover"
            loading="lazy"
          />
        </div>

        <h2 className="text-2xl font-medium mb-1">{article.title}</h2>
        <p className="text-gray-600 text-sm mb-6">{article.date}</p>

        <div
          className="prose max-w-none 
            [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-gray-700
            [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:mt-6 [&>h3]:mb-3 
            [&>h1]:font-semibold [&>h2]:font-semibold [&>h3]:font-semibold 
            [&>h1]:text-gray-800 [&>h2]:text-gray-800 [&>h3]:text-gray-800
            [&>ul]:mb-6 [&>ol]:mb-6 [&>ul]:pl-6 [&>ol]:pl-6
            [&>ul]:list-disc [&>ol]:list-decimal
            [&>li]:mb-2 [&>li]:leading-relaxed [&>li]:text-gray-700
            [&>strong]:font-semibold [&>strong]:text-gray-800
            [&>a]:text-cyan-600 [&>a]:hover:text-cyan-700 [&>a]:underline
            [&_.article-image]:mb-6 [&_.article-image]:mt-6 [&_.article-image]:text-left
            [&_.article-image>img]:!w-auto [&_.article-image>img]:max-h-[400px] [&_.article-image>img]:h-auto
            [&_.article-image>img]:rounded-lg [&_.article-image>img]:!ml-0
            [&_.article-image>img]:object-contain
            [&_img]:!w-auto [&_img]:max-h-[400px] [&_img]:h-auto [&_img]:rounded-lg 
            [&_img]:object-contain [&_img]:block [&_img]:!ml-0
            [&_p]:text-left
            [&_div]:text-left
            [&>*]:text-left"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      <ReviewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default ArticlePage;
