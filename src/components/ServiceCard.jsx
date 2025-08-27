import { Link } from "react-router-dom";

function ServiceCard({ image, title, description, price, link }) {
  const CardContent = () => (
    <article className="flex flex-col gap-8 px-4 pt-4 pb-8 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] h-[640px] w-[300px] max-sm:w-full overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={image}
        className="rounded-3xl h-[251px] w-[270px] object-cover"
        alt={title}
      />
      <div className="flex flex-col gap-6 h-full">
        <h3 className="text-xl font-semibold text-center text-[#0C098C]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-black text-left px-2 flex-grow">
          {description}
        </p>
        <div className="mt-auto">
          <div className="text-xs text-gray-600 mb-1">Starting From</div>
          <div className="text-2xl font-bold text-black mb-1">{price}</div>
          <div className="text-xs text-gray-600 mb-4">All pricing exclude PPN</div>
          {link && (
            <Link 
              to={link}
              className="bg-[#0C098C] text-white px-4 py-2 rounded text-sm hover:bg-[#0A0678] transition-colors block text-center"
            >
              Lihat Detail
            </Link>
          )}
        </div>
      </div>
    </article>
  );

  if (link) {
    return <CardContent />;
  }

  return <CardContent />;
}

export default ServiceCard;
