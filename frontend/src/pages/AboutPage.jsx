import React from "react";
import { FaHotel, FaSuitcase, FaBed, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { assets } from "../assets/assets"; // team images

const AboutPage = () => {
  const whyChooseUs = [
    { icon: <FaHotel size={24} className="text-primary" />, text: "Verified Hotels & Rooms" },
    { icon: <FaStar size={24} className="text-primary" />, text: "Best Price Guarantee" },
    { icon: <FaSuitcase size={24} className="text-primary" />, text: "24/7 Customer Support" },
    { icon: <FaBed size={24} className="text-primary" />, text: "Flexible Bookings & Cancellation" },
  ];

  const team = [
    { name: "Baljeet Kumar Patel", 
      role: "Full-Stack Developer & Data Scientist", 
      image:assets.Myphoto },
    // Add more team members here
  ];

  // Floating icons data
  const floatingIcons = [
    { icon: <FaHotel size={28} className="text-primary opacity-30" />, x: 50, y: 100, duration: 6 },
    { icon: <FaSuitcase size={24} className="text-orange-300 opacity-30" />, x: 300, y: 200, duration: 8 },
    { icon: <FaStar size={20} className="text-yellow-300 opacity-30" />, x: 150, y: 400, duration: 10 },
    { icon: <FaBed size={26} className="text-green-300 opacity-30" />, x: 500, y: 150, duration: 7 },
  ];

  return (
    <div className="relative py-28 px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full opacity-20"
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300 rounded-full opacity-20"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, 15, 0], x: [0, 15, 0] }}
          transition={{ duration: item.duration, repeat: Infinity, ease: "easeInOut" }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Header Section */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          About <span className="text-primary">ShyanKaksh</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Delivering unforgettable stays and seamless hotel booking experiences.
        </p>
      </div>

      {/* Who We Are */}
      <motion.div
        className="max-w-4xl mx-auto mb-12 text-gray-600 space-y-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Who We Are</h2>
        <p>
          ShyanKaksh is a modern hotel booking platform designed to make hotel discovery,
          booking, and management seamless for travelers. Our platform features curated hotels,
          user-friendly booking flows, and detailed insights to ensure every stay is exceptional.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-12 relative z-10">
        <motion.div
          className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            Simplify hotel bookings and help travelers find the perfect stay effortlessly,
            while supporting hotel partners to showcase their offerings.
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To become the go-to platform for travelers seeking memorable experiences
            and personalized hospitality.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-12 text-center relative z-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6 text-gray-600">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col items-center gap-3 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
            >
              {item.icon}
              <p className="text-center font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-12 text-center relative z-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mb-2 object-cover shadow-md"
              /> */}
              <div className="w-40 h-40 overflow-hidden rounded-full shadow-md">
                      <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
              </div>

              <p className="font-semibold text-gray-800">{member.name}</p>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Explore Our Hotels Today
        </h2>
        <p className="text-gray-600 mb-6">
          Find your perfect stay and book with ShyanKaksh effortlessly.
        </p>
        <motion.a
          href="/rooms"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dull transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Browse Hotels
        </motion.a>
      </div>
    </div>
  );
};

export default AboutPage;
