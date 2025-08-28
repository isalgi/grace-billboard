import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Navigation({ isHome = false }) {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRightColumnOpen, setIsRightColumnOpen] = useState(false);
  const [isInsideLeftColumn, setIsInsideLeftColumn] = useState(false);
  const [isInsideRightColumn, setIsInsideRightColumn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [rightDropdownPosition, setRightDropdownPosition] = useState({
    top: 0,
    left: 0,
  });
  const closeTimeoutRef = useRef(null);
  const layananButtonRef = useRef(null);

  const handleLayananClick = () => {
    if (!isDropdownOpen && layananButtonRef.current) {
      const rect = layananButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setIsRightColumnOpen(false);
    }
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setIsRightColumnOpen(false);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isDropdownOpen &&
        !event.target.closest("[data-dropdown-container]")
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isDropdownOpen) {
        closeDropdown();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isDropdownOpen]);

  // Update dropdown positions on scroll
  useEffect(() => {
    const updatePositions = () => {
      if (isDropdownOpen && layananButtonRef.current) {
        const rect = layananButtonRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + 8,
          left: rect.left,
        });
        
        if (isRightColumnOpen) {
          setRightDropdownPosition({
            top: rect.bottom + 8,
            left: rect.right + 160,
          });
        }
      }
    };

    if (isDropdownOpen) {
      window.addEventListener("scroll", updatePositions);
      window.addEventListener("resize", updatePositions);
    }

    return () => {
      window.removeEventListener("scroll", updatePositions);
      window.removeEventListener("resize", updatePositions);
    };
  }, [isDropdownOpen, isRightColumnOpen]);

  const handleJabodetabekClick = () => {
    if (layananButtonRef.current) {
      const rect = layananButtonRef.current.getBoundingClientRect();
      setRightDropdownPosition({
        top: rect.bottom + 8,
        left: rect.right + 160,
      });
    }
    setIsRightColumnOpen(true);
  };

  return (
    <>
      <nav
        className={`relative z-20 px-4 sm:px-6 lg:px-12 py-4 ${!isHome ? "bg-[#2682BB]" : ""}`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/Bejanaanugerah 1.png"
              alt="CV Bejanaanugerah Logo"
              className="h-16 sm:h-20 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white transition-colors font-medium">
              Beranda
            </Link>
            <Link
              to="/artikel"
              className="text-white transition-colors font-medium"
            >
              Tentang Kami
            </Link>
            <div className="relative" data-dropdown-container>
              <button
                ref={layananButtonRef}
                className="text-white transition-colors font-medium flex items-center cursor-pointer"
                onClick={handleLayananClick}
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
              </button>
            </div>
            <a
              href="#kontak"
              className="text-white transition-colors font-medium"
            >
              Kontak
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* Contact Button - Hidden on small screens */}
            <Link to="" className="hidden sm:block">
              <button className="bg-[#0C098C] text-white px-4 sm:px-8 py-2 rounded transition-colors font-medium cursor-pointer text-sm sm:text-base">
                Kontak Kami
              </button>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#2682BB] border-t border-blue-500">
            <div className="px-6 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-white font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                to="/artikel" 
                className="block text-white font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <div className="py-2">
                <div className="text-white font-medium mb-2">Layanan</div>
                <div className="ml-4 space-y-2">
                  <Link 
                    to="/lokasi/perintis-kemerdekaan" 
                    className="block text-white text-sm py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Jl. Perintis Kemerdekaan
                  </Link>
                  <Link 
                    to="/lokasi/cempaka-putih" 
                    className="block text-white text-sm py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Jl. Ahmad Yani Cempaka Putih
                  </Link>
                  <Link 
                    to="/lokasi/matraman-raya" 
                    className="block text-white text-sm py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Jl. Matraman Raya
                  </Link>
                  <Link 
                    to="/lokasi/bekasi-pulogadung" 
                    className="block text-white text-sm py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Jl. Raya Bekasi Pulo Gadung
                  </Link>
                  <Link 
                    to="/lokasi/kebon-kacang-raya" 
                    className="block text-white text-sm py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Jl. Kebon Kacang Raya
                  </Link>
                </div>
              </div>
              <a 
                href="#kontak" 
                className="block text-white font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontak
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Portal for Left Dropdown */}
      {isDropdownOpen &&
        createPortal(
          <div
            className="fixed bg-white rounded-md shadow-2xl border border-gray-100 z-[9999] opacity-100 visible"
            style={{
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
            }}
            data-dropdown-container
          >
            <div className="p-6">
              <div className="relative">
                <div
                  className="block text-gray-800 text-[14px] font-bold transition-colors cursor-pointer"
                  onClick={handleJabodetabekClick}
                >
                  Jabodetabek
                  <span className="text-black font-bold ml-2">></span>
                </div>
                <div className="h-px bg-[#0C098C] w-full mt-3"></div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* Portal for Right Column Dropdown */}
      {isRightColumnOpen &&
        createPortal(
          <div
            className="fixed bg-white rounded-md shadow-2xl border border-gray-100 p-6 min-w-[200px] z-[9999]"
            style={{
              top: `${rightDropdownPosition.top}px`,
              left: `${rightDropdownPosition.left - 80}px`,
            }}
            data-dropdown-container
          >
            <div className="space-y-8">
              <div className="relative">
                <Link
                  to="/lokasi/perintis-kemerdekaan"
                  className="block text-gray-800 text-[14px] font-bold transition-colors leading-tight"
                  onClick={closeDropdown}
                >
                  Jl. Perintis
                  <br />
                  Kemerdekaan
                </Link>
                <div
                  className={`h-px w-full mt-3 ${
                    location.pathname === "/lokasi/perintis-kemerdekaan"
                      ? "bg-[#0C098C]"
                      : "bg-transparent"
                  }`}
                ></div>
              </div>

              <div className="relative">
                <Link
                  to="/lokasi/cempaka-putih"
                  className="block text-gray-800 text-[14px] font-bold transition-colors leading-tight"
                  onClick={closeDropdown}
                >
                  Jl. Ahmad Yani
                  <br />
                  Cempaka Putih
                </Link>
                <div
                  className={`h-px w-full mt-3 ${
                    location.pathname === "/lokasi/cempaka-putih"
                      ? "bg-[#0C098C]"
                      : "bg-transparent"
                  }`}
                ></div>
              </div>

              <div className="relative">
                <Link
                  to="/lokasi/matraman-raya"
                  className="block text-gray-800 text-[14px] font-bold transition-colors leading-tight"
                  onClick={closeDropdown}
                >
                  Jl. Matraman
                  <br />
                  Raya
                </Link>
                <div
                  className={`h-px w-full mt-3 ${
                    location.pathname === "/lokasi/matraman-raya"
                      ? "bg-[#0C098C]"
                      : "bg-transparent"
                  }`}
                ></div>
              </div>

              <div className="relative">
                <Link
                  to="/lokasi/bekasi-pulogadung"
                  className="block text-gray-800 text-[14px] font-bold transition-colors leading-tight"
                  onClick={closeDropdown}
                >
                  Jl. Raya Bekasi
                  <br />
                  Pulo Gadung
                </Link>
                <div
                  className={`h-px w-full mt-3 ${
                    location.pathname === "/lokasi/bekasi-pulogadung"
                      ? "bg-[#0C098C]"
                      : "bg-transparent"
                  }`}
                ></div>
              </div>

              <div className="relative">
                <Link
                  to="/lokasi/kebon-kacang-raya"
                  className="block text-gray-800 text-[14px] font-bold transition-colors leading-tight"
                  onClick={closeDropdown}
                >
                  Jl. Kebon
                  <br />
                  Kacang Raya
                </Link>
                <div
                  className={`h-px w-full mt-3 ${
                    location.pathname === "/lokasi/kebon-kacang-raya"
                      ? "bg-[#0C098C]"
                      : "bg-transparent"
                  }`}
                ></div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
