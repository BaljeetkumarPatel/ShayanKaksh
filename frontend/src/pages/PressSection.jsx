import React from "react";

const pressLogos = [
  {
    name: "Hotels.com",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Hotels.com_logo.svg/800px-Hotels.com_logo.svg.png",
    alt: "Hotels.com",
  },
  {
    name: "Booking.com",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Booking.com_logo_2017.svg/800px-Booking.com_logo_2017.svg.png",
    alt: "Booking.com",
  },
  {
    name: "Expedia",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Expedia_logo.svg/800px-Expedia_logo.svg.png",
    alt: "Expedia",
  },
  {
    name: "TripAdvisor",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Tripadvisor_logo.svg/800px-Tripadvisor_logo.svg.png",
    alt: "TripAdvisor",
  },
  {
    name: "Lonely Planet",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Lonely_Planet_logo.svg/800px-Lonely_Planet_logo.svg.png",
    alt: "Lonely Planet",
  },
];

const pressQuotes = [
  {
    text: `"ShyanKaksh makes hotel booking seamless and fun!"`,
    source: "Travel + Leisure",
  },
  {
    text: `"A modern platform that understands travelers’ needs."`,
    source: "Forbes Travel",
  },
  {
    text: `"Exceptional user experience and easy navigation for all travelers."`,
    source: "Lonely Planet",
  },
];

const PressSection = () => {
  return (
    <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Press & Media
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          ShyanKaksh has been featured in leading travel and hospitality
          publications, showcasing our commitment to seamless hotel booking
          experiences.
        </p>
      </div>

      {/* Logos Carousel */}
      <div className="overflow-x-auto flex space-x-8 mb-16">
        {pressLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-12 grayscale hover:grayscale-0 transition-all"
          />
        ))}
      </div>

      {/* Featured Quotes */}
      <div className="grid md:grid-cols-3 gap-6">
        {pressQuotes.map((quote, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl shadow hover:shadow-lg transition-all bg-white"
          >
            <p className="text-gray-600 italic">{quote.text}</p>
            <span className="font-semibold mt-4 block text-gray-800">
              — {quote.source}
            </span>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-800">
          Want to feature us?
        </h3>
        <p className="mt-2 text-gray-600">
          For media inquiries, reach us at{" "}
          <span className="text-primary font-semibold">
            press@shyankaksh.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default PressSection;
