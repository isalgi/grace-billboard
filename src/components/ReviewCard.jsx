import StarRating from "./StarRating";

function ReviewCard({ name, company, review, index }) {
  // Only apply border and padding to the middle (index 1) card
  const isMiddleCard = index === 1;

  return (
    <article
      className={`flex flex-col items-center w-full max-w-[324px] ${
        isMiddleCard ? "lg:border-l lg:border-r lg:border-gray-200 lg:px-6 lg:w-[388px]" : ""
      } max-lg:border-r-0 max-lg:border-l-0 max-lg:border-b max-lg:border-gray-200 max-lg:pb-8 max-lg:last:border-b-0`}
    >
      <StarRating />
      <h3 className="text-base sm:text-lg font-semibold text-[#0C098C] mb-2">{name}</h3>
      <div className="text-lg sm:text-xl">{company}</div>
      <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-center text-gray-700 mt-3 sm:mt-4 px-4 sm:px-8 lg:px-12">
        {review}
      </p>
    </article>
  );
}

export default ReviewCard;
