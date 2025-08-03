export default function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
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
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
              Beragam Jenis <br /> Media
            </h3>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
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
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
              Harga Bisa <br /> disesuaikan
            </h3>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
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
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
              Garansi pasti <br /> Tayang
            </h3>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Apabila tidak tayang jaminan <br /> uang kembali 100%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
