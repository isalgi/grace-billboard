export default function FeaturesSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] font-medium text-[#1E1E1E] mb-4">
            Mengapa beriklan di GraceBillboard ?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img
                src="./multimedia.png"
                alt="Beragam Jenis Media"
                className="w-28 h-28 lg:w-32 lg:h-32"
              />
            </div>
            <h3 className="text-gray-800 mb-4" style={{fontWeight: 500, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center'}}>
              Beragam Jenis <br /> Media
            </h3>
            <p className="text-[#323232]" style={{fontWeight: 500, fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center'}}>
              Pilihan kategori media promosi <br /> indoor maupun outdoor
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img
                src="./best-price.png"
                alt="Harga Bisa disesuaikan"
                className="w-28 h-28 lg:w-32 lg:h-32"
              />
            </div>
            <h3 className="text-gray-800 mb-4" style={{fontWeight: 500, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center'}}>
              Harga Bisa <br /> disesuaikan
            </h3>
            <p className="text-[#323232]" style={{fontWeight: 500, fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center'}}>
              Harga Sewa Billboard Spesial Cukup <br /> ajukan penawaran <br />
              anda.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img
                src="./guarantee.png"
                alt="Garansi pasti Tayang"
                className="w-28 h-28 lg:w-32 lg:h-32"
              />
            </div>
            <h3 className="text-gray-800 mb-4" style={{fontWeight: 500, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center'}}>
              Garansi pasti <br /> Tayang
            </h3>
            <p className="text-[#323232]" style={{fontWeight: 500, fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center'}}>
              Apabila tidak tayang jaminan <br /> uang kembali 100%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
