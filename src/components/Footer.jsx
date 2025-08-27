function Footer() {
  return (
    <footer className="px-20 pt-16 pb-10 bg-sky-50 max-sm:px-5 max-sm:py-10">
      <div className="flex justify-between items-start mb-20 max-sm:flex-col gap-12">
        {/* Logo and Description */}
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center">
            <img
              src="/Bejanaanugerah 1.png"
              alt="CV Bejanaanugerah Logo"
              className="h-16 w-auto"
            />
          </div>
          <p className="text-sm text-black leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt sit amet
          </p>
        </div>

        {/* Office Location and Contact us */}
        <div className="flex flex-col gap-8">
          {/* Office Location */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#0C098C]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-semibold text-[#0C098C]">
                Office Location
              </h3>
            </div>
            <p className="text-sm text-black leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt sit amet
            </p>
          </div>

          {/* Contact us */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#0C098C]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <h3 className="text-xl font-semibold text-[#0C098C]">
                Contact us
              </h3>
            </div>
            <p className="text-sm text-black leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt sit amet
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-[#0C098C]">Services</h3>
          <div className="flex flex-col gap-3 font-semibold">
            <a
              href="#"
              className="text-sm text-black hover:text-[#0C098C] transition-colors"
            >
              Lokasi
            </a>
            <a
              href="#"
              className="text-sm text-black hover:text-[#0C098C] transition-colors"
            >
              Pemasangan
            </a>
            <a
              href="#"
              className="text-sm text-black hover:text-[#0C098C] transition-colors"
            >
              Desain
            </a>
          </div>
        </div>

        {/* Ask Now */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-[#0C098C]">Ask Now</h3>
          <a
            href="https://wa.me/6281239336293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-10 h-10 text-[#0C098C]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-xs text-center text-[#0C098C] leading-relaxed">
        Copyright ©2025 - PT. GRACE BILLBOARD. All right reserved. Liability
        limited by a scheme approved under Professional Standard Legislation.
      </p>
    </footer>
  );
}

export default Footer;
