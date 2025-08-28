function ServiceCard({ image, title, description, link }) {
  return (
    <div className="bg-white rounded-[25px] shadow-sm p-3 text-center flex flex-col h-full min-h-[600px]">
      <img
        src={image}
        className="w-full h-48 object-cover rounded-[25px] mb-5"
        alt={title}
      />
      <h3
        className={`font-semibold text-[20px] leading-[21px] mb-2 text-[#0C098C] whitespace-pre-line ${
          title.includes("Jl. Matraman Raya") ||
          title.includes("Jl. Kebon Kacang Raya")
            ? "mt-2"
            : ""
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-[#000000] mb-3 px-1 py-5 text-left leading-[18px] text-[14px] 
        }`}
      >
        {description}
      </p>
      <a 
        href={link} 
        className="bg-[#0C098C] text-white px-20 py-2 mb-5 rounded-md text-[14px] leading-[21px] font-medium transition-colors mt-auto self-center cursor-pointer inline-block text-center"
      >
        Buka Area
      </a>
    </div>
  );
}

export default ServiceCard;
