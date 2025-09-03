function Footer() {
  return (
    <footer className="px-4 sm:px-8 lg:px-20 pt-12 sm:pt-16 pb-8 sm:pb-10 bg-[#F6F6F6]">
      <div className="flex justify-between items-start mb-12 sm:mb-16 max-lg:flex-col gap-6 sm:gap-8 max-w-6xl mx-auto">
        {/* Logo and Description */}
        <div className="flex flex-col gap-4 max-w-[200px] justify-center max-lg:items-center max-lg:max-w-none">
          <div className="flex items-center">
            <img
              src="/Bejanaanugerah 1.png"
              alt="CV Bejanaanugerah Logo"
              className="h-20 sm:h-24 w-auto"
            />
          </div>
        </div>

        {/* Office Location and Contact us */}
        <div className="flex flex-col gap-6 sm:gap-8 max-lg:items-center max-lg:text-center">
          {/* Office Location */}
          <div className="flex gap-2 max-lg:flex-col max-lg:items-center max-lg:gap-3">
            <span className="material-icons-outlined text-[#0C098C] text-xl mt-0.5 flex-shrink-0 max-lg:mt-0">
              location_on
            </span>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#0C098C]">
                Office Location
              </h3>
              <p className="text-black leading-relaxed tracking-normal text-xs sm:text-sm font-normal">
                Jln Poltangan Raya ,Gang L No 5 RT 01 RW 04
                <br /> Kel Tanjung Barat, Kec Jagakarsa Ps minggu
                <br /> Jakarta Selatan 12530
              </p>
            </div>
          </div>

          {/* Contact us */}
          <div className="flex gap-2 max-lg:flex-col max-lg:items-center max-lg:gap-3">
            <span className="material-icons-outlined text-[#0C098C] text-xl mt-0.5 flex-shrink-0 max-lg:mt-0">
              call_end
            </span>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#0C098C]">
                Contact us
              </h3>
              <p className="text-black leading-relaxed tracking-normal text-xs sm:text-sm font-normal">
                +62 811 1010 0899
                <br className="hidden sm:block" /> +62 821 1003 5871
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-3 sm:gap-4 self-start max-lg:items-center">
          <h3 className="text-lg sm:text-xl font-semibold text-[#0C098C]">
            Services
          </h3>
          <div className="flex flex-col gap-2 sm:gap-3 font-semibold max-lg:items-center">
            <a
              href="#"
              className="text-xs sm:text-sm text-black transition-colors"
            >
              Lokasi
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-black transition-colors"
            >
              Pemasangan
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-black transition-colors"
            >
              Desain
            </a>
          </div>
        </div>

        {/* Ask Now */}
        <div className="flex flex-col gap-3 sm:gap-4 items-start self-start max-lg:items-center">
          <h3 className="text-lg sm:text-xl font-semibold text-[#0C098C]">
            Ask Now
          </h3>
          <a href="https://wa.me/6282110035871" target="_blank" rel="noopener noreferrer" className="transition-opacity">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-[#0C098C]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-xs text-center text-[#0C098C] leading-relaxed px-4">
        Copyright ©2025 - CV. Bejanaanugerah. All right reserved. Liability
        limited by a scheme approved under Professional Standard Legislation.
      </p>
    </footer>
  );
}

export default Footer;
