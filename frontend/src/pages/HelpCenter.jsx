import React, { useState } from "react";

const faqs = [
  {
    question: "How do I book a room?",
    answer:
      "To book a room, simply browse available listings, select your preferred room, choose your dates, and complete the secure payment process.",
  },
  {
    question: "Can I modify or cancel a reservation?",
    answer:
      "Yes, you can modify or cancel your booking from your account dashboard. Cancellation charges may apply based on the hotel's policy.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Standard check-in time is 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out is subject to availability.",
  },
  {
    question: "Do you provide free WiFi?",
    answer:
      "Yes, all our rooms and common areas are equipped with complimentary high-speed WiFi.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellations made 48 hours before check-in are fully refundable. After that, one night’s charge will apply.",
  },
];

export default function HelpCenter() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 mt-14">Help Center</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-sm bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center font-medium"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="px-4 pb-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
