import React from "react";

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 mt-14">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-2xl p-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border rounded-lg p-3"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border rounded-lg p-3"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="space-y-4">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
            <p>Email: baljeetpatel022@gmail.com</p>
            <p>Phone: +91-6205528437</p>
            <p>Hours: Mon–Sat, 9 AM – 9 PM</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Visit Us</h2>
            <p>BMSIT&M</p>
            <p>Avalahalli,Yelahanka,Bengaluru,Karnataka,560064 India</p>
            <iframe
              title="Hotel Location"
              className="w-full h-40 mt-2 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3067379294737!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE4LjAiTiA3N8KwMzUnNDEuMiJF!5e0!3m2!1sen!2sin!4v1638702712345!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
