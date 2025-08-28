import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Navigation({ isHome = false }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isInsideLeftColumn, setIsInsideLeftColumn] = useState(false);
  const [isInsideRightColumn, setIsInsideRightColumn] = useState(false);
  const jabodetabekRef = useRef(null);
  const [portalPosition, setPortalPosition] = useState({ top: 0, left: 0 });
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isInsideLeftColumn && !isInsideRightColumn) {
      closeTimeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 500);
    }
  };

  const handleLeftColumnEnter = () => {
    setIsInsideLeftColumn(true);
    handleMouseEnter();
  };

  const handleLeftColumnLeave = () => {
    setIsInsideLeftColumn(false);
    handleMouseLeave();
  };

  const handleRightColumnEnter = () => {
    setIsInsideRightColumn(true);
    handleMouseEnter();
  };

  const handleRightColumnLeave = () => {
    setIsInsideRightColumn(false);
    handleMouseLeave();
  };

  useEffect(() => {
    if (isDropdownOpen && jabodetabekRef.current) {
      const rect = jabodetabekRef.current.getBoundingClientRect();
      setPortalPosition({
        top: rect.top,
        left: rect.right + 24, // 24px gap (ml-6)
      });
    }
  }, [isDropdownOpen]);

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
          <Link
            to="/artikel"
            className="text-white hover:text-gray-200 transition-colors font-medium"
          >
            Tentang Kami
          </Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
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

            {/* Dropdown Menu - Left Box */}
            <div
              className={`absolute left-0 mt-2 bg-white rounded-md shadow-2xl transition-all duration-300 border border-gray-100 ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onMouseEnter={handleLeftColumnEnter}
              onMouseLeave={handleLeftColumnLeave}
            >
              <div className="p-6">
                <div className="relative">
                  <div
                    ref={jabodetabekRef}
                    className="block text-gray-800 hover:text-[#0C098C] text-lg font-medium transition-colors cursor-pointer"
                  >
                    Jabodetabek
                    <span className="text-gray-400 ml-2">></span>
                  </div>
                  <div className="h-px bg-[#0C098C] w-full mt-3"></div>
                </div>
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

      {/* Portal for Right Column Dropdown */}
      {isDropdownOpen &&
        createPortal(
          <div
            className="fixed z-50 bg-white rounded-md shadow-2xl border border-gray-100 p-8"
            style={{
              top: `${portalPosition.top - 24}px`,
              left: `${portalPosition.left}px`,
              minWidth: "280px",
            }}
            onMouseEnter={handleRightColumnEnter}
            onMouseLeave={handleRightColumnLeave}
          >
            <div className="space-y-8">
              <div className="relative">
                <Link
                  to="/lokasi/perintis-kemerdekaan"
                  className="block text-gray-800 hover:text-[#0C098C] text-lg font-medium transition-colors leading-tight"
                >
                  Jl. Perintis
                  <br />
                  Kemerdekaan
                </Link>
                <div className="h-px bg-[#0C098C] w-full mt-3"></div>
              </div>

              <div className="relative">
                <Link
                  to="/lokasi/cempaka-putih"
                  className="block text-gray-800 hover:text-[#0C098C] text-lg font-medium transition-colors leading-tight"
                >
                  Jl. Ahmad Yani
                  <br />
                  Cempaka Putih
                </Link>
              </div>

              <div className="relative">
                <Link
                  to="/lokasi/matraman-raya"
                  className="block text-gray-800 hover:text-[#0C098C] text-lg font-medium transition-colors leading-tight"
                >
                  Jl. Matraman
                  <br />
                  Raya
                </Link>
              </div>

              <div className="relative">
                <Link
                  to="/lokasi/bekasi-pulogadung"
                  className="block text-gray-800 hover:text-[#0C098C] text-lg font-medium transition-colors leading-tight"
                >
                  Jl. Raya Bekasi
                  <br />
                  Pulo Gadung
                </Link>
              </div>

              <div className="relative">
                <Link
                  to="/lokasi/kebon-kacang-raya"
                  className="block text-gray-800 hover:text-[#0C098C] text-lg font-medium transition-colors leading-tight"
                >
                  Jl. Kebon
                  <br />
                  Kacang Raya
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </nav>
  );
}
