import { Link } from "react-router-dom";

function ServiceCard({ image, title, description, link }) {
  return (
    <div className="bg-white rounded-[25px] shadow-sm p-3 sm:p-4 text-center flex flex-col h-full min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
      <img
        src={image}
        className="w-full h-40 sm:h-44 lg:h-48 object-cover rounded-[25px] mb-4 sm:mb-5"
        alt={title}
      />
      <h3
        className={`font-semibold text-[18px] sm:text-[20px] leading-[19px] sm:leading-[21px] mb-2 text-[#0C098C] whitespace-pre-line ${
          title.includes("Jl. Matraman Raya") ||
          title.includes("Jl. Kebon Kacang Raya")
            ? "mt-2"
            : ""
        }`}
      >
        {title}
      </h3>
      <p className="text-[#000000] mb-3 px-1 py-3 sm:py-5 text-left leading-[16px] sm:leading-[18px] text-[13px] sm:text-[14px] flex-grow">
        {description}
      </p>
      <Link
        to={link}
        className="bg-[#0C098C] text-white px-8 sm:px-12 lg:px-20 py-2 mb-3 sm:mb-5 rounded-md text-[13px] sm:text-[14px] leading-[19px] sm:leading-[21px] font-medium transition-colors mt-auto self-center cursor-pointer inline-block text-center"
      >
        Buka Area
      </Link>
    </div>
  );
}

export default ServiceCard;
