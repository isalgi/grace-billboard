import ServiceCard from "./ServiceCard";

function ServicesSection() {
  const services = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb3b2dee152d26a2ffaf5c0d3b56414ae4a1c4ed?placeholderIfAbsent=true",
      title: "Jakarta Selatan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet lorem quis dignissim. Vivamus facilisis venenatis eros, id fringilla dolor iaculis quis. Donec quis purus leo. Maecenas convallis congue pretium. Maecenas ac interdum tortor, sed ultricies lorem.",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/568e681e1f994c3c1eb36927b2fb7227eae688c5?placeholderIfAbsent=true",
      title: "Jakarta Pusat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet lorem quis dignissim. Vivamus facilisis venenatis eros, id fringilla dolor iaculis quis. Donec quis purus leo. Maecenas convallis congue pretium. Maecenas ac interdum tortor, sed ultricies lorem.",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c27dc58142a7987b215958f85e21619300aa1ede?placeholderIfAbsent=true",
      title: "Jakarta Pusat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet lorem quis dignissim. Vivamus facilisis venenatis eros, id fringilla dolor iaculis quis. Donec quis purus leo. Maecenas convallis congue pretium. Maecenas ac interdum tortor, sed ultricies lorem.",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d34237039bc47ebcb42b622ab7289cb2078a5b4a?placeholderIfAbsent=true",
      title: "Jakarta Barat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet lorem quis dignissim. Vivamus facilisis venenatis eros, id fringilla dolor iaculis quis. Donec quis purus leo. Maecenas convallis congue pretium. Maecenas ac interdum tortor, sed ultricies lorem.",
    },
  ];

  return (
    <section className="flex flex-col gap-10 items-center p-16 bg-neutral-50 max-sm:px-5 max-sm:py-10 ">
      <h2 className="text-3xl font-bold text-[#323232]">Available Area</h2>
      <div className="flex justify-center items-center w-full max-md:flex-col max-md:gap-10 gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div>
        <button className="bg-[#0C098C] text-white px-16 py-2 rounded font-normal transition-colors text-md">
          Kontak Kami
        </button>
      </div>
    </section>
  );
}

export default ServicesSection;
