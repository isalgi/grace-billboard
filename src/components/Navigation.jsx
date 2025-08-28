import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Navigation({ isHome = false }) {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRightColumnOpen, setIsRightColumnOpen] = useState(false);
  const [isInsideLeftColumn, setIsInsideLeftColumn] = useState(false);
  const [isInsideRightColumn, setIsInsideRightColumn] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleLayananClick = () => {
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

  const handleJabodetabekClick = () => {
    setIsRightColumnOpen(true);
  };

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
          <div className="relative" data-dropdown-container>
            <button
              className="text-white hover:text-gray-200 transition-colors font-medium flex items-center cursor-pointer"
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

            {/* Dropdown Menu - Left Box */}
            <div
              className={`absolute left-0 mt-2 bg-white rounded-md shadow-2xl border border-gray-100 ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
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
            </div>

            {/* Right Column Dropdown */}
            {isRightColumnOpen && (
              <div
                className="absolute left-full top-8 ml-20 bg-white rounded-md shadow-2xl border border-gray-100 p-6 min-w-[200px]"
                data-dropdown-container
              >
                <div className="space-y-8">
                  <div className="relative">
                    <Link
                      to="/lokasi/perintis-kemerdekaan"
                      className="block text-gray-800 text-[14px] font-bold transition-colors leading-tight"
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
              </div>
            )}
          </div>
          <a
            href="#kontak"
            className="text-white hover:text-gray-200 transition-colors font-medium"
          >
            Kontak
          </a>
        </div>

        {/* Contact Button */}
        <Link to="">
          <button className="bg-[#0C098C] text-white px-8 py-2 rounded hover:bg-[#0A0678] transition-colors font-medium cursor-pointer">
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
