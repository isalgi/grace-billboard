import { Link } from "react-router-dom";

export default function Navigation({ isHome = false }) {
  return (
    <nav
      className={`relative z-20 px-12 py-4 ${!isHome ? "bg-[#2682BB]" : ""}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/Bejanaanugerah 1.png"
            alt="CV Bejanaanugerah Logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-white hover:text-gray-200 transition-colors font-medium"
          >
            Beranda
          </Link>
          <a
            href="#tentang"
            className="text-white hover:text-gray-200 transition-colors font-medium"
          >
            Tentang Kami
          </a>
          <div className="relative group">
            <button className="text-white hover:text-gray-200 transition-colors font-medium flex items-center cursor-pointer">
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
                <Link
                  to="/lokasi/bekasi-pulogadung"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 text-sm"
                >
                  Jl. Raya Bekasi Pulo Gadung
                </Link>
                <Link
                  to="/lokasi/cempaka-putih"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 text-sm"
                >
                  Jl. Ahmad Yani Cempaka Putih
                </Link>
                <Link
                  to="/lokasi/kebon-kacang-raya"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 text-sm"
                >
                  Jl. Kebon Kacang Raya
                </Link>
                <Link
                  to="/lokasi/matraman-raya"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 text-sm"
                >
                  Jl. Matraman Raya
                </Link>
                <Link
                  to="/lokasi/perintis-kemerdekaan"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 text-sm"
                >
                  Jl. Perintis Kemerdekaan
                </Link>
              </div>
            </div>
          </div>
          <a
            href="#kontak"
            className="text-white hover:text-gray-200 transition-colors font-medium"
          >
            Kontak
          </a>
        </div>

        {/* Contact Button */}
        <Link to="https://wa.me/6281239336293">
          <button className="bg-[#0C098C] text-white px-6 py-2 rounded hover:bg-[#0A0678] transition-colors font-medium cursor-pointer">
            Kontak Kami
          </button>
        </Link>

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
      </div>
    </nav>
  );
}
