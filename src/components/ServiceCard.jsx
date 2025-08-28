function ServiceCard({ image, title, description, link }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-3 text-center flex flex-col h-full">
      <img
        src={image}
        className="w-full h-32 object-cover rounded-lg mb-3"
        alt={title}
      />
      <h3 className="font-medium text-base mb-2 text-[#0C098C] px-20">
        {title}
      </h3>
      <p
        className="text-[#000000] mb-3 px-1 text-left"
        style={{
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "21px",
          letterSpacing: "0%",
        }}
      >
        {description}
      </p>
      <button className="bg-[#0C098C] text-white px-4 py-1.5 rounded-md text-xs hover:bg-[#0A0678] transition-colors mt-auto">
        Buka Area
      </button>
    </div>
  );
}

export default ServiceCard;
