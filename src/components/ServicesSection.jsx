import ServiceCard from "./ServiceCard";

function ServicesSection() {
  const services = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb3b2dee152d26a2ffaf5c0d3b56414ae4a1c4ed?placeholderIfAbsent=true",
      title: "Jakarta Selatan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet lorem quis dignissim. Vivamus facilisis venenatis eros, id fringilla dolor iaculis quis. Donec quis purus leo. Maecenas convallis congue pretium. Maecenas ac interdum tortor, sed ultricies lorem.",
      price: "IDR 660.000",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/568e681e1f994c3c1eb36927b2fb7227eae688c5?placeholderIfAbsent=true",
      title: "Jakarta Pusat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet lorem quis dignissim. Vivamus facilisis venenatis eros, id fringilla dolor iaculis quis. Donec quis purus leo. Maecenas convallis congue pretium. Maecenas ac interdum tortor, sed ultricies lorem.",
      price: "IDR 660.000",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c27dc58142a7987b215958f85e21619300aa1ede?placeholderIfAbsent=true",
      title: "Jakarta Pusat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet lorem quis dignissim. Vivamus facilisis venenatis eros, id fringilla dolor iaculis quis. Donec quis purus leo. Maecenas convallis congue pretium. Maecenas ac interdum tortor, sed ultricies lorem.",
      price: "IDR 660.000",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d34237039bc47ebcb42b622ab7289cb2078a5b4a?placeholderIfAbsent=true",
      title: "Jakarta Barat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet lorem quis dignissim. Vivamus facilisis venenatis eros, id fringilla dolor iaculis quis. Donec quis purus leo. Maecenas convallis congue pretium. Maecenas ac interdum tortor, sed ultricies lorem.",
      price: "IDR 660.000",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb3b2dee152d26a2ffaf5c0d3b56414ae4a1c4ed?placeholderIfAbsent=true",
      title: "Jakarta Timur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet lorem quis dignissim. Vivamus facilisis venenatis eros, id fringilla dolor iaculis quis. Donec quis purus leo. Maecenas convallis congue pretium. Maecenas ac interdum tortor, sed ultricies lorem.",
      price: "IDR 660.000",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb3b2dee152d26a2ffaf5c0d3b56414ae4a1c4ed?placeholderIfAbsent=true",
      title: "Bogor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet lorem quis dignissim. Vivamus facilisis venenatis eros, id fringilla dolor iaculis quis. Donec quis purus leo. Maecenas convallis congue pretium. Maecenas ac interdum tortor, sed ultricies lorem.",
      price: "IDR 660.000",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb3b2dee152d26a2ffaf5c0d3b56414ae4a1c4ed?placeholderIfAbsent=true",
      title: "Depok",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet lorem quis dignissim. Vivamus facilisis venenatis eros, id fringilla dolor iaculis quis. Donec quis purus leo. Maecenas convallis congue pretium. Maecenas ac interdum tortor, sed ultricies lorem.",
      price: "IDR 660.000",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb3b2dee152d26a2ffaf5c0d3b56414ae4a1c4ed?placeholderIfAbsent=true",
      title: "Bekasi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet lorem quis dignissim. Vivamus facilisis venenatis eros, id fringilla dolor iaculis quis. Donec quis purus leo. Maecenas convallis congue pretium. Maecenas ac interdum tortor, sed ultricies lorem.",
      price: "IDR 660.000",
    },
  ];

  return (
    <section className="flex flex-col gap-10 items-center p-16 bg-gray-100 max-sm:px-5 max-sm:py-10">
      <h2 className="text-3xl font-bold text-[#323232]">Available Area</h2>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            price={service.price}
          />
        ))}
      </div>

      <div>
        <button className="bg-[#0C098C] text-white px-16 py-3 rounded font-normal transition-colors text-md hover:bg-[#0A0678]">
          Kontak Kami
        </button>
      </div>
    </section>
  );
}

export default ServicesSection;
