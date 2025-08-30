import ReviewCard from "./ReviewCard";

function ReviewsSection() {
  const reviews = [
    {
      name: "Rizal Danuarta",
      company: "Bussiness Owner",
      review:
        "Lokasinya sangat strategis dan pelayanan pemasangannya sangat baik . Iklan saya berdampak langsung pada produk saya secara langsung setelah 2 mnggu pemasangan di titik-titik billboard ini. Sangat rekomendasi untuk pemasangan di titik-titik bejanaanugerah. Bintang 5 saya berikan.",
    },
    {
      name: "Rudi Tsu",
      company: "Bussiness Owner",
      review:
        "Saya sangat puas dengan layanan Bejanaanugerah. Spot-spot billboardnya berada di jalur ramai sehingga iklan kami langsung terlihat banyak orang. Dalam hitungan minggu sudah terasa efeknya pada brand awareness kami. Pemasangan cepat dan rapi, sangat rekomendasi",
    },
    {
      name: "Fei Tan",
      company: "Bussiness Owner",
      review:
        "Bejanaanugerah adalah pilihan terbaik untuk media luar ruang. Titik billboardnya berada di pusat keramaian, sehingga eksposur iklan sangat maksimal. Setelah pemasangan, respon pasar terhadap produk kami meningkat signifikan. Saya puas dan pasti akan pasang lagi",
    },
  ];

  return (
    <section className="px-0 py-8 sm:py-10 bg-white">
      <h2 className="mb-6 sm:mb-4 text-2xl sm:text-3xl font-bold text-center text-[#0C098C]">
        Review Kami
      </h2>
      <div className="flex justify-between max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 max-lg:flex-col max-lg:gap-8 max-lg:items-center">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            index={index}
            name={review.name}
            company={review.company}
            review={review.review}
          />
        ))}
      </div>
    </section>
  );
}

export default ReviewsSection;
