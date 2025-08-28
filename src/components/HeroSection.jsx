import Navigation from "./Navigation";

export default function HeroSection() {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-blue-600 to-blue-800"
      style={{
        backgroundImage: `url("./bg-billboard-top.jpg")`,
        backgroundSize: "cover", // Changed from "contain" to "cover"
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top", // Better positioning
        backgroundAttachment: "scroll", // Ensures consistent behavior
      }}
    >
      {/* Navigation */}
      <Navigation isHome={true} />

      {/* Hero Content */}
      <div className="relative z-20 px-6 lg:px-12 pt-16 lg:pt-24">
        <div className="max-w-3xl lg:max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Selamat Datang di <br /> Bejanaanugerah
          </h1>
          <p className="text-xl lg:text-2xl text-white mb-8 font-semibold drop-shadow-md">
            Kamu lihat ini berarti, Kamu butuh ini !
          </p>
          <button className="bg-[#0C098C] text-white px-16 py-2 rounded font-normal transition-colors text-md cursor-pointer">
            Kontak Kami
          </button>
        </div>
      </div>
    </div>
  );
}
