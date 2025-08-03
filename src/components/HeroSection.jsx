export default function HeroSection() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url("./bg-billboard-top.jpg")`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="./logo-billboard.png" alt="" />
          </div>
          <div>
            <div className="text-[#0C098C] font-bold">Grace</div>
            <div className="text-[#0C098C] font-bold">Billboard</div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 font-semibold">
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Beranda
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Tentang Kami
          </a>
          <div className="relative group">
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors flex items-center"
            >
              Layanan
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Portofolio
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Kontak
          </a>
          <button className="bg-[#0C098C] text-white px-6 py-2 rounded transition-colors font-normal text-sm ml-[50px]">
            Kontak Kami
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-6 lg:px-12 pt-16 lg:pt-24">
        <div className="max-w-3xl lg:max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Selamat Datang di Grace <br /> Billboard
          </h1>
          <p className="text-xl lg:text-2xl text-white mb-8 font-semibold">
            Kamu lihat ini berarti, Kamu butuh ini !
          </p>
          <button className="bg-[#0C098C] text-white px-16 py-2 rounded font-normal transition-colors text-md">
            Kontak Kami
          </button>
        </div>
      </div>
    </div>
  );
}
