import React from "react";

const PartnerPage = () => {
  const partners = [
    {
      id: 1,
      name: "Taj Hotels",
      logo: "https://www.vectorlogo.zone/logos/ihcl/ihcl-ar21.svg", 
      description: "Luxury hospitality partner providing premium services and guest experience.",
      website: "https://www.tajhotels.com/",
    },
    {
      id: 2,
      name: "OYO Rooms",
      logo: "https://seeklogo.com/images/O/oyo-rooms-logo-7F3E10A08E-seeklogo.com.png",
      description: "Affordable stay partner with wide network of hotels across India.",
      website: "https://www.oyorooms.com/",
    },
    {
      id: 3,
      name: "MakeMyTrip",
      logo: "https://seeklogo.com/images/M/makemytrip-logo-86150E3D39-seeklogo.com.png",
      description: "Travel booking partner offering flights, hotels, and holiday packages.",
      website: "https://www.makemytrip.com/",
    },
    {
      id: 4,
      name: "Airbnb",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
      description: "Global travel partner connecting guests with unique stays worldwide.",
      website: "https://www.airbnb.com/",
    },
    {
      id: 5,
      name: "Booking.com",
      logo: "https://seeklogo.com/images/B/booking-com-logo-6948C97BB4-seeklogo.com.png",
      description: "Leading travel partner for hotels, flights, and rental services.",
      website: "https://www.booking.com/",
    },
  ];

  return (
    <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our <span className="text-primary">Partners</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We are proud to collaborate with trusted partners who help us deliver exceptional experiences.
        </p>
      </div>

      {/* Partner Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-20 mx-auto mb-4 object-contain"
            />
            <h2 className="text-xl font-semibold text-gray-800">{partner.name}</h2>
            <p className="mt-2 text-gray-600 text-sm">{partner.description}</p>
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary-dull transition-all"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerPage;
