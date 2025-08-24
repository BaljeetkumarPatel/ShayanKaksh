import React from "react";
import { FaWheelchair, FaBed, FaGlobe, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Accessibility() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-60 md:h-72 w-full">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
          alt="Accessibility Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center mt-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black text-center text-black">
            Accessibility at ShayanKaksh
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto p-6 -mt-10 relative z-10 ">
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Hotel Accessibility Features */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition border border-black"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <FaWheelchair className="text-blue-600 text-2xl" />
              <h2 className="text-xl font-semibold">Hotel Accessibility Features</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Wheelchair-accessible entrances, elevators, and ramps.</li>
              <li>Accessible parking spots near the main entrance.</li>
              <li>Wide doorways and hallways for mobility aids.</li>
            </ul>
          </motion.div>

          {/* Accessible Rooms */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition border border-black"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <FaBed className="text-green-600 text-2xl" />
              <h2 className="text-xl font-semibold">Accessible Rooms</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Roll-in showers with grab bars.</li>
              <li>Lowered sinks, mirrors, and switches.</li>
              <li>Emergency pull cords in accessible bathrooms.</li>
            </ul>
          </motion.div>

          {/* Website Accessibility */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition border border-black"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <FaGlobe className="text-purple-600 text-2xl" />
              <h2 className="text-xl font-semibold">Website Accessibility</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Keyboard-friendly navigation.</li>
              <li>Alt text for all images.</li>
              <li>High-contrast text for readability.</li>
              <li>Screen reader–friendly page structure.</li>
            </ul>
          </motion.div>

          {/* Our Commitment */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition border border-black"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <FaHandsHelping className="text-pink-600 text-2xl" />
              <h2 className="text-xl font-semibold">Our Commitment</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We are committed to ensuring that our hotel and website are accessible to all.
              If you experience any difficulty while booking or during your stay, 
              please contact our support team, and we will be happy to assist you.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
