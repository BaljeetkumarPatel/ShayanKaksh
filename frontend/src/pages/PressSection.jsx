
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { assets } from "../assets/assets.js";

const pressLogos = [
  { name: "Hotels.com", src: assets.hotelx, alt: "Hotels.com" },
  { name: "Booking.com", src: assets.BookingH, alt: "Booking.com" },
  { name: "Expedia", src: assets.Expedia, alt: "Expedia" },
  { name: "TripAdvisor", src: assets.tripadvisor, alt: "TripAdvisor" },
  { name: "Lonely Planet", src: assets.lonelyplanet, alt: "Lonely Planet" },
];

const pressQuotes = [
  { text: `"ShyanKaksh makes hotel booking seamless and fun!"`, source: "Travel + Leisure" },
  { text: `"A modern platform that understands travelers’ needs."`, source: "Forbes Travel" },
  { text: `"Exceptional user experience and easy navigation for all travelers."`, source: "Lonely Planet" },
];

const PressSection = () => {
  const controls = useAnimation();

  return (
    <section className="relative overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${assets.pressbackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: -2,
        }}
      ></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-[-1]"></div>

      {/* Section Content */}
      <div className="relative py-28 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Header */}
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Press & Media</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            ShyanKaksh has been featured in leading travel and hospitality publications, showcasing our commitment to seamless hotel booking experiences.
          </p>
        </div>

        {/* Logos Auto-Scroll Carousel */}
        <div className="relative w-full overflow-hidden mb-16">
          <motion.div
            className="flex space-x-12"
            animate={controls}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            onHoverStart={() => controls.stop()} // stop animation on hover
            onHoverEnd={() => controls.start({ x: ["0%", "-100%"] })}
          >
            {[...pressLogos, ...pressLogos].map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto max-w-[200px] grayscale hover:grayscale-0 transition-all"
                whileHover={{ scale: 1.25 }} // bigger on hover
              />
            ))}
          </motion.div>
        </div>

        {/* Featured Quotes */}
        <div className="grid md:grid-cols-3 gap-6">
          {pressQuotes.map((quote, index) => (
            <div key={index} className="p-6 border rounded-2xl shadow hover:shadow-lg transition-all bg-white">
              <p className="text-gray-600 italic">{quote.text}</p>
              <span className="font-semibold mt-4 block text-gray-800">— {quote.source}</span>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center text-white">
          <h3 className="text-2xl font-bold">Want to feature us?</h3>
          <p className="mt-2">
            For media inquiries, reach us at{" "}
            <span className="text-primary font-semibold">baljeetpatel022@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PressSection;

