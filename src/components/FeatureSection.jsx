export default function FeaturesSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-medium text-[#1E1E1E] mb-4">
            Mengapa beriklan di Bejanaanugerah ?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 lg:gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <img
                src="./multimedia.png"
                alt="Beragam Jenis Media"
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
              />
            </div>
            <h3 className="text-gray-800 mb-3 sm:mb-4 text-[18px] sm:text-[20px] lg:text-[24px] font-medium leading-tight text-center">
              Beragam Jenis <br /> Media
            </h3>
            <p className="text-[#323232] text-[12px] sm:text-[13px] lg:text-[14px] font-medium leading-tight text-center">
              Pilihan kategori media promosi <br /> indoor maupun outdoor
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <img
                src="./best-price.png"
                alt="Harga Bisa disesuaikan"
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
              />
            </div>
            <h3 className="text-gray-800 mb-3 sm:mb-4 text-[18px] sm:text-[20px] lg:text-[24px] font-medium leading-tight text-center">
              Harga Bisa <br /> disesuaikan
            </h3>
            <p className="text-[#323232] text-[12px] sm:text-[13px] lg:text-[14px] font-medium leading-tight text-center">
              Harga Sewa Billboard Spesial Cukup <br /> ajukan penawaran <br />
              anda.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <img
                src="./guarantee.png"
                alt="Garansi pasti Tayang"
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
              />
            </div>
            <h3 className="text-gray-800 mb-3 sm:mb-4 text-[18px] sm:text-[20px] lg:text-[24px] font-medium leading-tight text-center">
              Garansi pasti <br /> Tayang
            </h3>
            <p className="text-[#323232] text-[12px] sm:text-[13px] lg:text-[14px] font-medium leading-tight text-center">
              Apabila tidak tayang jaminan <br /> uang kembali 100%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
