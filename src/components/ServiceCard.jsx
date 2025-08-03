function ServiceCard({ image, title, description, price }) {
  return (
    <article className="flex flex-col gap-8 px-4 pt-4 pb-8 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] h-[640px] w-[300px] max-sm:w-full overflow-hidden">
      <img
        src={image}
        className="rounded-3xl h-[251px] w-[270px]"
        alt={title}
      />
      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-semibold text-center text-[#0C098C]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-black text-left px-2">
          {description}
        </p>
        <div className="mt-auto">
          <div className="text-xs text-gray-600 mb-1">Starting From</div>
          <div className="text-2xl font-bold text-black mb-1">{price}</div>
          <div className="text-xs text-gray-600">All pricing exclude PPN</div>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
