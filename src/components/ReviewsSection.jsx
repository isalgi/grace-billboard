import ReviewCard from "./ReviewCard";

function ReviewsSection() {
  const reviews = [
    {
      name: "John Doe",
      company: "PT. LEBAH MADU",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      name: "Rudi Tsu",
      company: "PT. TERNAK LEBAH",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur",
    },
    {
      name: "Wong Fei Hong",
      company: "PT. ELANG MENDARAT",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
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
