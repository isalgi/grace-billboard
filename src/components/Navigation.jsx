import { Link } from "react-router-dom";

export default function Navigation({ isHome = false }) {
  const linkClass = isHome 
    ? "text-white hover:text-gray-200 transition-colors"
    : "text-gray-800 hover:text-blue-600 transition-colors";
    
  const buttonClass = isHome
    ? "bg-[#0C098C] text-white px-6 py-2 rounded transition-colors font-normal text-sm ml-[100px] hover:bg-[#0A0678]"
    : "bg-orange-500 text-white px-6 py-2 rounded transition-colors font-normal text-sm ml-[100px] hover:bg-orange-600";

  return (
    <nav className={`relative z-20 flex items-center justify-between px-12 py-6 ${!isHome ? 'bg-white shadow-md' : ''}`}>
      <Link to="/" className="flex items-center space-x-1">
        <div className="w-11 h-11 flex items-center justify-center">
          <img src="/logo-billboard.png" alt="Grace Billboard Logo" />
        </div>
        <div>
          <div className="text-[#0C098C] font-[500] text-[20px] leading-[24px]">
            Grace
          </div>
          <div className="text-[#0C098C] font-[500] text-[20px] leading-[24px]">
            Billboard
          </div>
        </div>
      </Link>

      <div className="hidden md:flex items-center space-x-8 font-semibold">
        <Link to="/" className={linkClass}>
          Beranda
        </Link>
        <a href="#tentang" className={linkClass}>
          Tentang Kami
        </a>
        <div className="relative group">
          <button className={`${linkClass} flex items-center`}>
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
          </button>
          
          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="py-2">
              <Link to="/lokasi/bekasi-pulogadung" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 text-sm">
                Jl. Raya Bekasi Pulo Gadung
              </Link>
              <Link to="/lokasi/cempaka-putih" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 text-sm">
                Jl. Ahmad Yani Cempaka Putih
              </Link>
              <Link to="/lokasi/kebon-kacang-raya" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 text-sm">
                Jl. Kebon Kacang Raya
              </Link>
              <Link to="/lokasi/matraman-raya" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 text-sm">
                Jl. Matraman Raya
              </Link>
              <Link to="/lokasi/perintis-kemerdekaan" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 text-sm">
                Jl. Perintis Kemerdekaan
              </Link>
            </div>
          </div>
        </div>
        <Link to="/artikel" className={linkClass}>
          Artikel
        </Link>
        <a href="#kontak" className={linkClass}>
          Kontak
        </a>
        <Link to="#kontak" className={buttonClass}>
          Kontak Kami
        </Link>
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
  );
}