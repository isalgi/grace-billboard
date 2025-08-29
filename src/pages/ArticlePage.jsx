import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import ReviewsSection from "../components/ReviewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import image06 from "../assets/image-06.webp";

function ArticlePage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  // Mock article data - in a real app this would come from props or API
  const article = {
    title: "Best billboard spot you can find",
    image: image06,
    content: `
      <p>CV Bejanaanugerah adalah perusahaan yang bergerak di bidang periklanan luar ruang (Out of Home Advertising) dengan fokus utama pada penyediaan media billboard premium di berbagai titik strategis. Sejak berdiri, kami berkomitmen untuk menjadi pinta terdepan di industri periklanan bagi brand, perusahaan, dan instansi dalam membangun visibilitas, meningkatkan brand citra, serta menjangkau audiens yang lebih luas.</p>
      
      <p>Kami memahami bahwa billboard bukan hanya sekedar media iklan, tetapi merupakan wujud brand yang hadir di tengah masyarakat setiap hari. Karena itu, setiap titik billboard yang kami kelola dipilih secara strategis—berada di lokasi dengan tingkat lalu lintas tinggi, mudah terlihat, dan sering dilalui oleh ribuan orang setiap harinya.</p>
      
      <h3>Jaringan Billboard Kami</h3>
      
      <p>CV Bejanaanugerah telah mempertuas jangkauan ke berbagai kota besar dan strategis di Indonesia, antara lain:</p>
      
      <ul>
        <li><strong>Jabodetabek</strong> – Pusat bisnis, pemerintahan, dan hiburan dengan pergerakan manusia dan kendaraan terbesar di Indonesia.</li>
        <li><strong>Padang</strong> – Kota pesisir yang menjadi pusat ekonomi dan budaya di Sumatera Barat, dengan jalur lalu lintas utama yang ramai.</li>
        <li><strong>Ambon</strong> – Gerbang utama kawasan Indonesia Timur, dengan potensi audiens yang beragam dan berkembang pesat.</li>
        <li><strong>Gorontalo</strong> – Kota yang strategis sebagai jalur penghubung, dengan tingkat mobilitas masyarakat yang tinggi.</li>
      </ul>
      
      <p>Keberadaan titik billboard kami di lokasi-lokasi tersebut memberikan nilai tambah berupa jangkauan luas, frekuensi tayang tinggi, dan peluang besar untuk meningkatkan brand awareness.</p>
      
      <h3>Keunggulan CV Bejanaanugerah</h3>
      
      <ul>
        <li><strong>Lokasi Premium:</strong> Setiap spot billboard berada di jalan protokol, pusat kota, area bisnis, hingga jalur transportasi utama.</li>
        <li><strong>Jangkauan Audiens Luas:</strong> Menjangkau masyarakat urban, komuter, perilaku bisnis, hingga wisatawan.</li>
        <li><strong>Visibilitas Maksimal:</strong> Dirancang dengan ukuran besar dan sudut pandang yang tepat agar mudah dilihat oleh siapa saja.</li>
        <li><strong>Pengelolaan Profesional:</strong> Tim kami memastikan billboard selalu dalam kondisi terbaik, sehingga iklan tampil optimal.</li>
      </ul>
      
      <h3>Komitmen Kami</h3>
      
      <p>CV Bejanaanugerah tidak hanya menawarkan ruang iklan, tetapi juga solusi komunikasi visual yang dapat membantu klien meraih tujuan pemasaran mereka. Kami percaya bahwa iklan luar ruang yang efektif mampu menciptakan kesan kuat, tahan lama, dan membangun brand image di benak audiens.</p>

      <p>Dengan strategi penempatan yang tepat, CV Bejanaanugerah siap menjadi partner iklan luar ruang terpercaya untuk membawa brand Anda lebih dekat dengan masyarakat.</p>
    `,
  };

  // Preload and cache image
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(article.image);
      setImageLoaded(true);
    };
    img.src = article.image;
  }, [article.image]);

  return (
    <>
      <Navigation isHome={false} />

      <div className="container mx-auto py-12">
        <h1 className="text-[48px] text-[#0C098C] mb-10 font-semibold">
          Tentang CV Bejanaanugerah
        </h1>

        {/* Image container with full width */}
        <div className="w-full overflow-hidden rounded-lg mb-6">
          {imageLoaded ? (
            <img
              src={imageSrc}
              alt={article.title}
              className="w-full max-h-[600px] object-cover object-top"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500">Loading...</div>
            </div>
          )}
        </div>

        <h2 className="text-2xl font-medium mb-3">{article.title}</h2>

        <div
          className="prose max-w-none 
            [&>p]:leading-relaxed [&>p]:text-gray-700 [&>p]:indent-6
            [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:mt-6 [&>h3]:indent-6 [&>h3]:mb-6 
            [&>h1]:font-semibold [&>h2]:font-semibold [&>h3]:text-xl [&>h3]:font-semibold 
            [&>h1]:text-gray-800 [&>h2]:text-gray-800 [&>h3]:text-gray-800
            [&>ol]:mb-6 [&>ul]:pl-6 [&>ol]:pl-6
            [&>ul]:list-disc [&>ol]:list-decimal
            [&>li]:mb-2 [&>li]:leading-relaxed [&>li]:text-gray-700
            [&>strong]:font-semibold [&>strong]:text-gray-800
            [&>a]:text-cyan-600 [&>a]:underline
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
